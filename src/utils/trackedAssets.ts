import type { AddressLike } from '@enzymefinance/ethers';
import type { SignerWithAddress } from '@enzymefinance/hardhat';
import type { ComptrollerLib, IntegrationManager } from '@enzymefinance/protocol';
import {
  addTrackedAssetsToVaultArgs,
  IntegrationManagerActionId,
  removeTrackedAssetsFromVaultArgs,
} from '@enzymefinance/protocol';
import type { BigNumberish,ethers } from 'ethers';
export async function addTrackedAssetsToVault ({
  signer,
  comptrollerProxy,
  integrationManager,
  assets,
}: {
  signer: ethers.Wallet;
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  assets: AddressLike[];
})  {
  return  await comptrollerProxy
    .connect(signer)
    .callOnExtension(
      integrationManager,
      IntegrationManagerActionId.AddTrackedAssetsToVault,
      addTrackedAssetsToVaultArgs({ assets })
    );
}

export function removeTrackedAssetsFromVault({
  signer,
  comptrollerProxy,
  integrationManager,
  assets,
}: {
  signer: SignerWithAddress;
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  assets: AddressLike[];
}) {
  return comptrollerProxy
    .connect(signer)
    .callOnExtension(
      integrationManager,
      IntegrationManagerActionId.RemoveTrackedAssetsFromVault,
      removeTrackedAssetsFromVaultArgs({ assets }),
    );
}
