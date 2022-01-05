import  { ComptrollerLib, IntegrationManager, StandardToken } from '@enzymefinance/protocol';
import  { BigNumberish,ethers } from 'ethers';

import { addTrackedAssetsToVault } from './trackedAssets';

export async function addNewAssetsToFundCustom(
  signer:ethers.Wallet,
  comptrollerProxy: ComptrollerLib,
  integrationManagerAsset:string,
  assetAddresses:string[],
  amounts:string[]  )  {

      const integrationManager = new IntegrationManager (integrationManagerAsset,signer);
      console.log ("after integrationManager");
      let assets: Array<StandardToken> = [];
      assetAddresses.forEach(asset => assets.push(new StandardToken(asset,signer)));
      await addNewAssetsToFundExtend({signer,comptrollerProxy,integrationManager,assets,amounts});
}

export async function addNewAssetsToFundExtend({
  signer,
  comptrollerProxy,
  integrationManager,
  assets,
  amounts = new Array(assets.length).fill(1),
}: {
  signer: ethers.Wallet,
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  assets: StandardToken[];
  amounts?: BigNumberish[];
}) {
  
  const nonce = await signer.provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce);

  console.log ("before addTrackedAssetsToVault");
  // First, add tracked assets while their balances are 0
  const receipt = await addTrackedAssetsToVault({
    assets,
    comptrollerProxy,
    integrationManager,
    signer,
  });
  signer.provider.waitForTransaction(receipt.transactionHash);
  console.log ("after addTrackedAssetsToVault");
  console.log (receipt);
  
  // Then seed the vault with balances as necessary
  const vaultProxy = await comptrollerProxy.getVaultProxy();
  console.log ("after  comptrollerProxy get vault proxy");

  for (const i in assets) {
    console.log ("assets : "+i);
    if (amounts[i] > 0) {
      console.log ("assets amount: "+amounts[i]);
      await assets[i].connect(signer).transfer(vaultProxy, amounts[i]);
      console.log ("after assets amount: "+amounts[i]);
    }
  }

  return receipt;
}
