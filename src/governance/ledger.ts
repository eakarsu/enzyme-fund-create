import { createHmac, randomBytes } from 'node:crypto';
import { chmod, mkdir, open, readFile } from 'node:fs/promises';
import path from 'node:path';
import type { LedgerAppend, LedgerEvent } from './types';

const GENESIS_HASH = '0'.repeat(64);

export function canonicalJson(value: unknown): string {
  if (value === null || typeof value === 'boolean' || typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) throw new Error('non_finite_number');
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return `{${Object.keys(record).sort().map((key) => `${JSON.stringify(key)}:${canonicalJson(record[key])}`).join(',')}}`;
  }
  throw new Error('unsupported_ledger_value');
}

function eventHash(secret: string, event: Omit<LedgerEvent, 'eventHash'>): string {
  return createHmac('sha256', secret).update(canonicalJson(event)).digest('hex');
}

export class EvidenceLedger {
  private readonly records: LedgerEvent[] = [];
  private readonly idempotency = new Map<string, { fingerprint: string; event: LedgerEvent }>();
  private writeTail: Promise<unknown> = Promise.resolve();

  private constructor(private readonly filePath: string, private readonly secret: string) {}

  static async open(filePath: string, secret: string): Promise<EvidenceLedger> {
    if (secret.length < 32) throw new Error('ledger_key_too_short');
    const ledger = new EvidenceLedger(path.resolve(filePath), secret);
    await mkdir(path.dirname(ledger.filePath), { recursive: true, mode: 0o700 });
    let contents = '';
    try { contents = await readFile(ledger.filePath, 'utf8'); }
    catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }
    const records = contents.split('\n').filter(Boolean).map((line) => JSON.parse(line) as LedgerEvent);
    ledger.loadVerified(records);
    const handle = await open(ledger.filePath, 'a', 0o600);
    await handle.close();
    await chmod(ledger.filePath, 0o600);
    return ledger;
  }

  private loadVerified(records: LedgerEvent[]): void {
    let previousHash = GENESIS_HASH;
    for (const [index, event] of records.entries()) {
      if (event.sequence !== index + 1 || event.previousHash !== previousHash) throw new Error('ledger_chain_invalid');
      const { eventHash: storedHash, ...unsigned } = event;
      if (storedHash !== eventHash(this.secret, unsigned)) throw new Error('ledger_signature_invalid');
      const fingerprint = canonicalJson({ type: event.type, payload: event.payload, actor: event.actor });
      const existing = this.idempotency.get(event.idempotencyKey);
      if (existing && existing.fingerprint !== fingerprint) throw new Error('ledger_idempotency_conflict');
      this.idempotency.set(event.idempotencyKey, { fingerprint, event });
      this.records.push(event);
      previousHash = event.eventHash;
    }
  }

  append<T>(type: string, payload: T, metadata: { actor: string; idempotencyKey: string; occurredAt?: string }): Promise<LedgerAppend<T>> {
    const task = this.writeTail.then(() => this.appendUnlocked(type, payload, metadata));
    this.writeTail = task.then(() => undefined, () => undefined);
    return task;
  }

  private async appendUnlocked<T>(type: string, payload: T, metadata: { actor: string; idempotencyKey: string; occurredAt?: string }): Promise<LedgerAppend<T>> {
    if (!type || !metadata.actor || !metadata.idempotencyKey) throw new Error('ledger_metadata_required');
    const fingerprint = canonicalJson({ type, payload, actor: metadata.actor });
    const existing = this.idempotency.get(metadata.idempotencyKey);
    if (existing) {
      if (existing.fingerprint !== fingerprint) throw new Error('idempotency_conflict');
      return { event: existing.event as LedgerEvent<T>, replayed: true };
    }
    const unsigned: Omit<LedgerEvent<T>, 'eventHash'> = {
      sequence: this.records.length + 1,
      id: randomBytes(16).toString('hex'),
      type,
      payload,
      actor: metadata.actor,
      idempotencyKey: metadata.idempotencyKey,
      occurredAt: metadata.occurredAt || new Date().toISOString(),
      previousHash: this.records.at(-1)?.eventHash || GENESIS_HASH,
    };
    const event: LedgerEvent<T> = { ...unsigned, eventHash: eventHash(this.secret, unsigned as Omit<LedgerEvent, 'eventHash'>) };
    const handle = await open(this.filePath, 'a', 0o600);
    try {
      await handle.writeFile(`${JSON.stringify(event)}\n`, 'utf8');
      await handle.sync();
    } finally { await handle.close(); }
    this.records.push(event as LedgerEvent);
    this.idempotency.set(metadata.idempotencyKey, { fingerprint, event: event as LedgerEvent });
    return { event, replayed: false };
  }

  events(): readonly LedgerEvent[] { return this.records.map((event) => structuredClone(event)); }

  async verify(): Promise<boolean> {
    try {
      const contents = await readFile(this.filePath, 'utf8');
      const records = contents.split('\n').filter(Boolean).map((line) => JSON.parse(line) as LedgerEvent);
      const verifier = new EvidenceLedger(this.filePath, this.secret);
      verifier.loadVerified(records);
      return true;
    } catch { return false; }
  }
}
