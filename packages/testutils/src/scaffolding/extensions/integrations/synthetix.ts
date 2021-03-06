import type { AddressLike } from '@enzymefinance/ethers';
import type {
  ComptrollerLib,
  IntegrationManager,
  ISynthetixAddressResolver,
  StandardToken,
  SynthetixAdapter,
  VaultLib,
} from '@enzymefinance/protocol';
import {
  callOnIntegrationArgs,
  encodeArgs,
  IntegrationManagerActionId,
  synthetixAssignExchangeDelegateSelector,
  synthetixTakeOrderArgs,
  takeOrderSelector,
} from '@enzymefinance/protocol';
import type { BigNumberish, Signer } from 'ethers';
import { utils } from 'ethers';

export async function synthetixAssignExchangeDelegate({
  comptrollerProxy,
  addressResolver,
  fundOwner,
  delegate,
}: {
  comptrollerProxy: ComptrollerLib;
  addressResolver: ISynthetixAddressResolver;
  fundOwner: Signer;
  delegate: AddressLike;
}) {
  const delegateApprovals = await synthetixResolveAddress({
    addressResolver,
    name: 'DelegateApprovals',
  });

  await comptrollerProxy
    .connect(fundOwner)
    .vaultCallOnContract(
      delegateApprovals,
      synthetixAssignExchangeDelegateSelector,
      encodeArgs(['address'], [delegate]),
    );
}

export async function synthetixResolveAddress({
  addressResolver,
  name,
}: {
  addressResolver: ISynthetixAddressResolver;
  name: string;
}) {
  return addressResolver.requireAndGetAddress(utils.formatBytes32String(name), `Missing ${name}`);
}

export async function synthetixTakeOrder({
  comptrollerProxy,
  vaultProxy,
  integrationManager,
  fundOwner,
  synthetixAdapter,
  outgoingAsset,
  outgoingAssetAmount = utils.parseEther('1'),
  incomingAsset,
  minIncomingAssetAmount = utils.parseEther('1'),
  seedFund = false,
}: {
  comptrollerProxy: ComptrollerLib;
  vaultProxy: VaultLib;
  integrationManager: IntegrationManager;
  fundOwner: Signer;
  synthetixAdapter: SynthetixAdapter;
  outgoingAsset: StandardToken;
  outgoingAssetAmount?: BigNumberish;
  incomingAsset: StandardToken;
  minIncomingAssetAmount?: BigNumberish;
  seedFund?: boolean;
}) {
  if (seedFund) {
    // Seed the VaultProxy with enough outgoingAsset for the tx
    await outgoingAsset.transfer(vaultProxy, outgoingAssetAmount);
  }

  const takeOrderArgs = synthetixTakeOrderArgs({
    incomingAsset,
    minIncomingAssetAmount,
    outgoingAsset,
    outgoingAssetAmount,
  });

  const callArgs = await callOnIntegrationArgs({
    adapter: synthetixAdapter,
    encodedCallArgs: takeOrderArgs,
    selector: takeOrderSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}
