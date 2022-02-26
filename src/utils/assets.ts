import  { ComptrollerLib, IntegrationManager, StandardToken, 
  VaultLib,VaultAction,encodeArgs } from '@enzymefinance/protocol';
import  { BigNumberish,ethers } from 'ethers';

import { addTrackedAssetsToVault } from './trackedAssets';

export async function addNewAssetsToFundCustom(
  signer:ethers.Wallet,
  comptrollerProxy: ComptrollerLib,
  assetAddresses:string[],
  amounts:string[]  )  {
      let assets: Array<StandardToken> = [];
      assetAddresses.forEach(asset => assets.push(new StandardToken(asset,signer)));
      await addAssetsToFundExtend({signer,comptrollerProxy,assets,amounts});
}


export async function addTrackedOneAssetToVault(
  signer:ethers.Wallet,
  comptrollerProxyAsset: string,
  integarationManagerAddress:string,
  assetAddresses:string[] )  {

      const comptrollerProxy = new ComptrollerLib(comptrollerProxyAsset, signer);
      const integrationManager = new IntegrationManager (integarationManagerAddress,signer);
      let assets: Array<StandardToken> = [];
      assetAddresses.forEach(asset => assets.push(new StandardToken(asset,signer)));
      console.log ("after integrationManager");
      const receipt = await addTrackedAssetsToVault({
        assets,
        comptrollerProxy,
        integrationManager,
        signer,
      });
      console.log (receipt);
}

export async function addAssetsToFundExtend({
  signer,
  comptrollerProxy,
  assets,
  amounts = new Array(assets.length).fill(1),
}: {
  signer: ethers.Wallet,
  comptrollerProxy: ComptrollerLib;
  assets: StandardToken[];
  amounts?: BigNumberish[];
}) {
 
  // Then seed the vault with balances as necessary
  const vaultProxy = await comptrollerProxy.getVaultProxy();
  console.log ("after  comptrollerProxy get vault proxy");

  const MintableERC20Factory = require("../aave/types/MintableERC20Factory").MintableERC20Factory;
  const aaveAsset = await MintableERC20Factory.connect(assets[0].address, signer);

  for (const i in assets) {
    console.log ("assets : "+i);
    if (amounts[i] > 0) {
      console.log ("assets amount: "+amounts[i]);
      await aaveAsset.connect(signer).transfer(vaultProxy, amounts[i]);
      //await assets[i].connect(signer).transfer(vaultProxy, amounts[i]);
      console.log ("after assets amount: "+amounts[i]);
    }
  }
}

export async function moveAssetsToAnotherFund(
  signer: ethers.Wallet,
  provider:ethers.providers.JsonRpcProvider,
  comptrollerProxyAddress: string,
  targetComptrollerProxyAddress: string,
  assetAddresses:string[],
  amounts: BigNumberish[]= new Array(assetAddresses.length).fill(1),
) {
 
  const comptrollerProxy = new ComptrollerLib(comptrollerProxyAddress, signer)
  
  // Then seed the vault with balances as necessary
  const vaultProxy = await comptrollerProxy.getVaultProxy()
  const vaultProxyObj = new VaultLib(vaultProxy,signer)
  const vp = new VaultLib(vaultProxy,signer)
  console.log ("after  comptrollerProxy get vault proxy:accessor:"+vp.getAccessor());

  const targetComptrollerProxy = new ComptrollerLib(targetComptrollerProxyAddress, signer)
  const targetVaultProxy = await targetComptrollerProxy.getVaultProxy();
  console.log ("after  tgarget comptrollerProxy get vault proxy:"+targetVaultProxy);
  let assets: Array<StandardToken> = [];
  assetAddresses.forEach(asset => assets.push(new StandardToken(asset,signer)));
  
  
  const MintableERC20Factory = require("../aave/types/MintableERC20Factory").MintableERC20Factory;
  const aaveAsset = await MintableERC20Factory.connect(assetAddresses[0], signer);

  let vpSigner = new ethers.Wallet(vaultProxy, provider);

  for (const i in assets) {
    console.log ("assets : "+i);
    if (amounts[i] > 0) {
      console.log ("assets amount: "+amounts[i]);
      let targetVaultTotal = await aaveAsset.balanceOf(targetVaultProxy)
      console.log ("Target Vault amount before transfer: "+targetVaultTotal);

      //let vaultTotal = await aaveAsset.balanceOf(vaultProxy)
      let vaultTotal = await aaveAsset.connect(vpSigner).balanceOf(vaultProxy)
      console.log ("Vault amount before transfer: "+vaultTotal);

      //await aaveAsset.connect(signer).transfer(targetVaultProxy, amounts[i]);
      //await vp.transfer(targetVaultProxy, amounts[i])

      const receipt = await vaultProxyObj.connect(signer).receiveValidatedVaultAction(
        VaultAction.WithdrawAssetTo,
        encodeArgs(['address', 'address', 'uint256'], [assets[i], targetVaultProxy, amounts[i]]),
      );

      //await assets[i].connect(signer).transfer(signer.address, amounts[i]);
      console.log ("after assets amount: "+amounts[i]);
      vaultTotal = await aaveAsset.balanceOf(vaultProxy)
      console.log ("Vault amount : "+vaultTotal);
      targetVaultTotal = await aaveAsset.balanceOf(targetVaultProxy)
      console.log ("Target Vault amount : xx "+targetVaultTotal);

      targetVaultTotal = await aaveAsset.balanceOf(signer.address)
      console.log ("User 1 balance: xx "+targetVaultTotal);
    }
  }
  console.log ("after move assstes")
}