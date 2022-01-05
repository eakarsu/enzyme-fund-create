import type { ContractReceipt } from '@enzymefinance/ethers';
import { extractEvent } from '@enzymefinance/ethers';
import type { utils } from 'ethers';

export function assertEvent<TResult = any>(
  receipt: ContractReceipt<any>,
  event: string | utils.EventFragment,
  match?: TResult,
) {
  const events = extractEvent(receipt, event);

  const args = events.shift()?.args;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return (args as unknown as typeof match)!;
}

