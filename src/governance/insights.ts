import type { LedgerEvent, PaperOrder } from './types';

// Read-only insights over an engine snapshot. None of these helpers mutate
// state or participate in any limit, approval, fill, or kill-switch decision.

export interface PortfolioSnapshot {
  cashCents: number;
  initialEquityCents: number;
  equityCents: number;
  lossCents: number;
  positions: Record<string, number>;
  orders: PaperOrder[];
  killSwitch: boolean;
}

export interface ApprovalTask {
  kind: 'approval';
  orderId: string;
  clientOrderId: string;
  asset: string;
  side: string;
  notionalCents: number;
  submittedBy: string;
  createdAt: string;
}

export function searchOrders(snapshot: PortfolioSnapshot, query: string, filters: { state?: string; side?: string } = {}): PaperOrder[] {
  const needle = query.trim().toLowerCase();
  return snapshot.orders.filter((order) => {
    if (filters.state && order.state !== filters.state) return false;
    if (filters.side && order.side !== filters.side) return false;
    if (!needle) return true;
    return [order.id, order.clientOrderId, order.asset, order.side, order.state, order.submittedBy, order.approvedBy || '']
      .some((field) => field.toLowerCase().includes(needle));
  }).map((order) => structuredClone(order));
}

export function listApprovalTasks(snapshot: PortfolioSnapshot): ApprovalTask[] {
  return snapshot.orders
    .filter((order) => order.state === 'pending_approval')
    .map((order) => ({
      kind: 'approval' as const,
      orderId: order.id,
      clientOrderId: order.clientOrderId,
      asset: order.asset,
      side: order.side,
      notionalCents: order.quantity * order.limitPriceCents,
      submittedBy: order.submittedBy,
      createdAt: order.createdAt,
    }));
}

function csvCell(value: unknown): string {
  return `"${String(value).replace(/"/g, '""')}"`;
}

export function ordersToCsv(snapshot: PortfolioSnapshot): string {
  const header = 'id,client_order_id,asset,side,quantity,filled_quantity,limit_price_cents,state,submitted_by,approved_by,created_at';
  const rows = snapshot.orders.map((order) => [
    order.id, order.clientOrderId, order.asset, order.side, order.quantity, order.filledQuantity,
    order.limitPriceCents, order.state, order.submittedBy, order.approvedBy || '', order.createdAt,
  ].map(csvCell).join(','));
  return [header, ...rows].join('\n');
}

export function searchEvents(events: readonly LedgerEvent[], query: string, type?: string): LedgerEvent[] {
  const needle = query.trim().toLowerCase();
  return events.filter((event) => {
    if (type && event.type !== type) return false;
    if (!needle) return true;
    return event.type.toLowerCase().includes(needle)
      || event.actor.toLowerCase().includes(needle)
      || JSON.stringify(event.payload).toLowerCase().includes(needle);
  }).map((event) => structuredClone(event));
}

export interface SummaryResult { provider: string; model?: string; text: string; facts: Record<string, number | boolean> }

type Fetcher = (url: string, init: Record<string, unknown>) => Promise<{ ok: boolean; status: number; json(): Promise<unknown> }>;

export async function summarizePortfolio(
  snapshot: PortfolioSnapshot,
  options: { apiKey?: string; baseUrl?: string; model?: string; fetcher?: Fetcher } = {},
): Promise<SummaryResult> {
  const facts: Record<string, number | boolean> = {
    cashCents: snapshot.cashCents,
    equityCents: snapshot.equityCents,
    lossCents: snapshot.lossCents,
    openOrders: snapshot.orders.filter((order) => ['pending_approval', 'approved', 'partially_filled'].includes(order.state)).length,
    pendingApprovals: listApprovalTasks(snapshot).length,
    positions: Object.keys(snapshot.positions).length,
    killSwitch: snapshot.killSwitch,
  };
  const fallbackText = `Paper portfolio: equity ${facts.equityCents} cents, cash ${facts.cashCents} cents, loss ${facts.lossCents} cents, ${facts.openOrders} open order(s), ${facts.pendingApprovals} pending approval(s), kill switch ${snapshot.killSwitch ? 'ON' : 'off'}.`;
  const apiKey = options.apiKey ?? process.env.OPENAI_API_KEY ?? process.env.AI_API_KEY;
  if (!apiKey) return { provider: 'deterministic-fallback', text: fallbackText, facts };
  const fetcher = options.fetcher ?? (globalThis.fetch as unknown as Fetcher);
  const model = options.model ?? process.env.AI_MODEL ?? 'gpt-4o-mini';
  const baseUrl = (options.baseUrl ?? process.env.AI_BASE_URL ?? 'https://api.openai.com/v1').replace(/\/$/, '');
  const response = await fetcher(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: 'Summarize paper-trading portfolio facts in one short paragraph. Never recommend or approve trades.' },
        { role: 'user', content: JSON.stringify(facts) },
      ],
    }),
  });
  if (!response.ok) throw new Error(`ai_provider_http_${response.status}`);
  const body = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  const text = body.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error('ai_provider_empty_response');
  return { provider: 'openai-compatible', model, text, facts };
}
