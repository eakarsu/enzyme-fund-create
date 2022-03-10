import type { AddressLike } from '@enzymefinance/ethers';
import type { SignerWithAddress } from '@enzymefinance/hardhat';
import type {
  ComptrollerLib,
  IntegrationManager,
  MockGenericAdapter,
  StandardToken,
  VaultLib,
} from '@enzymefinance/protocol';
import { callOnIntegrationArgs, encodeArgs, IntegrationManagerActionId, sighash } from '@enzymefinance/protocol';
import type { BigNumberish, BytesLike } from 'ethers';
import { utils } from 'ethers';

export const mockGenericRemoveOnlySelector = sighash(
  utils.FunctionFragment.fromString('removeOnly(address,bytes,bytes)'),
);

export const mockGenericSwapASelector = sighash(utils.FunctionFragment.fromString('swapA(address,bytes,bytes)'));

export const mockGenericSwapBSelector = sighash(utils.FunctionFragment.fromString('swapB(address,bytes,bytes)'));

export const mockGenericSwapDirectFromVaultSelector = sighash(
  utils.FunctionFragment.fromString('swapDirectFromVault(address,bytes,bytes)'),
);

export const mockGenericSwapViaApprovalSelector = sighash(
  utils.FunctionFragment.fromString('swapViaApproval(address,bytes,bytes)'),
);

export function mockGenericSwapArgs({
  spendAssets = [],
  actualSpendAssetAmounts = [],
  maxSpendAssetAmounts = actualSpendAssetAmounts,
  incomingAssets = [],
  actualIncomingAssetAmounts = [],
  minIncomingAssetAmounts = actualIncomingAssetAmounts,
}: {
  spendAssets?: AddressLike[];
  maxSpendAssetAmounts?: BigNumberish[];
  actualSpendAssetAmounts?: BigNumberish[];
  incomingAssets?: AddressLike[];
  minIncomingAssetAmounts?: BigNumberish[];
  actualIncomingAssetAmounts?: BigNumberish[];
}) {
  return encodeArgs(
    ['address[]', 'uint256[]', 'uint256[]', 'address[]', 'uint256[]', 'uint256[]'],
    [
      spendAssets,
      maxSpendAssetAmounts,
      actualSpendAssetAmounts,
      incomingAssets,
      minIncomingAssetAmounts,
      actualIncomingAssetAmounts,
    ],
  );
}

export async function mockGenericSwap({
  comptrollerProxy,
  vaultProxy,
  integrationManager,
  fundOwner,
  mockGenericAdapter,
  selector = mockGenericSwapASelector,
  spendAssets = [],
  actualSpendAssetAmounts = [],
  maxSpendAssetAmounts = actualSpendAssetAmounts,
  incomingAssets = [],
  actualIncomingAssetAmounts = [],
  minIncomingAssetAmounts = actualIncomingAssetAmounts,
  seedFund = false,
}: {
  comptrollerProxy: ComptrollerLib;
  vaultProxy: VaultLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  mockGenericAdapter: MockGenericAdapter;
  selector?: BytesLike;
  spendAssets?: StandardToken[];
  maxSpendAssetAmounts?: BigNumberish[];
  actualSpendAssetAmounts?: BigNumberish[];
  incomingAssets?: StandardToken[];
  minIncomingAssetAmounts?: BigNumberish[];
  actualIncomingAssetAmounts?: BigNumberish[];
  seedFund?: boolean;
}) {
  // Seed the VaultProxy with enough spendAssets for the tx
  if (seedFund) {
    for (const key in spendAssets) {
      await spendAssets[key].transfer(vaultProxy, maxSpendAssetAmounts[key]);
    }
  }

  const swapArgs = mockGenericSwapArgs({
    actualIncomingAssetAmounts,
    actualSpendAssetAmounts,
    incomingAssets,
    maxSpendAssetAmounts,
    minIncomingAssetAmounts,
    spendAssets,
  });

  const callArgs = callOnIntegrationArgs({
    adapter: mockGenericAdapter,
    encodedCallArgs: swapArgs,
    selector,
  });

  const swapTx = comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);

  await expect(swapTx).resolves.toBeReceipt();

  return swapTx;
}
