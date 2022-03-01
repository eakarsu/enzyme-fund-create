import { listAllFunds } from "./../index";

import { createSomeNewFund } from "./create-fund";
import { ethers, utils } from "ethers";
import { StandardToken } from "@enzymefinance/protocol";
import {getMintableToken} from "../funds/create-fund";
import {EnzymeBridgeFactory, MintableERC20Factory} from "../aave/types";
import {addNewAssetsToFundCustom,
  addAssetsToFundExtend,
  moveAssetsToAnotherFund,
addTrackedOneAssetToVault} from "../utils/assets"
import {ComptrollerLib} from '@enzymefinance/protocol';
import { getFundValue } from "../utils/vaultValue";
import { constants } from "http2";
import { LendingPoolConfiguratorFactory,LendingPoolAddressesProviderFactory,
  EnzymeLendingPoolManagerFactory } from "../aave/types";
import { LendingPoolConfigurator,LendingPoolConfiguratorInterface } from "../aave/types/LendingPoolConfigurator";

const web3 = require("web3");

const provider = new ethers.providers.JsonRpcProvider(
  //"https://kovan.infura.io/v3/f7f0290fa86240888223b0ad599c71a1"
);
const denominationAsset = "0x99dBE4AEa58E518C50a1c04aE9b48C9F6354612f";
//User 1

const userAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const USER_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

//user2
/*
const userAddress = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
const USER_PRIVATE_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"; 
*/
let integrationManagerAddress = "0xbe18A1B61ceaF59aEB6A9bC81AB4FB87D56Ba167";
let fundValueCalculatorAddress = "0xF45B1CdbA9AACE2e9bbE80bf376CE816bb7E73FB";
let fundDeployerAddress = "0xBbc18b580256A82dC0F9A86152b8B22E7C1C8005";
let fundValueCalculatorRouterAddress = "0xc0Bb1650A8eA5dDF81998f17B5319afD656f4c11";
let valueInterpreterAddress = "0x2BB8B93F585B43b06F3d523bf30C203d3B6d4BD4";
let managementFeeAddress = "0x6e0a5725dD4071e46356bD974E13F35DbF9ef367";
let entranceRateDirectFeeAddress = "0xdB012DD3E3345e2f8D23c0F3cbCb2D94f430Be8C";
let performanceFeeAddress = "0xA9d0Fb5837f9c42c874e16da96094b14Af0e2784";
let lendingPoolAddressesProviderAddress = "0x12Bcb546bC60fF39F1Adfc7cE4605d5Bd6a6A876";
let aaveProtocolDataProviderAddress = "0x0c626FC4A447b01554518550e30600136864640B";
let enzymeBridgeAddress = "0xe70f935c32dA4dB13e7876795f1e175465e6458e";
let vaultLibAddress = "0x773330693cb7d5D233348E25809770A32483A940";
let comptrollerLibAddress = "0x666432Ccb747B2220875cE185f487Ed53677faC9";

//Set this manually if required
let comptrollerProxyAddress = "0xb2db534da1be04149c1c49edb008979b95db4970";
let vaultProxyAddress = "0x8e825311482e79454ca24ae24570ecd7d0a4282f";

let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
let aaveAddress = "0xFD6F7A6a5c21A3f503EBaE7a473639974379c351";
let enjAddress = "0xefAB0Beb0A557E452b398035eA964948c750b2Fd";
let daiAddress = "0x6C2d83262fF84cBaDb3e416D527403135D757892";

const registerEnzymeContractsWithAave = async (
  signer:ethers.Wallet) => {
  
  const lendingPoolAddressProvider = LendingPoolAddressesProviderFactory.connect(
    lendingPoolAddressesProviderAddress,signer);
  console.log ("after LendingPoolAddressesProviderFactory");
  const ids:string[] = ["IntegrationManagerId","FundValueCalculatorId",
                        "FundDeployerId","FundValueCalculatorRouterId",
                        "ValueInterpreterId","ComptrollerProxyId",
                        "VaultProxyId","ManagementFeeId",
                        "EntranceRateDirectFeeId", "PerformanceFeeId",
                        "EnzymeBridgeId","AaveProtocolDataProviderAddress"]
  const addresses:string[] = [integrationManagerAddress,fundValueCalculatorAddress,
                              fundDeployerAddress,fundValueCalculatorRouterAddress,
                              valueInterpreterAddress,comptrollerProxyAddress,
                              vaultProxyAddress,managementFeeAddress,
                              entranceRateDirectFeeAddress, performanceFeeAddress,
                              enzymeBridgeAddress,aaveProtocolDataProviderAddress];
  for (let i=0;i<ids.length;i++){
    const newId = ethers.utils.formatBytes32String(ids[i]);
      console.log ("Setting address for "+ids[0]+" in "+addresses[i]+" "+newId);
    await lendingPoolAddressProvider.setAddress(newId,addresses[i]);
    console.log("Confirming "+newId);
    const returnAddress = await lendingPoolAddressProvider.getAddress(newId);
    console.log (`id = ${newId} address=${addresses[i]} returnAddress=${returnAddress}`);
  }
  const newId = ethers.utils.formatBytes32String("EnzymeBridgeId");
  const enzymeBridge = await lendingPoolAddressProvider.getAddress(newId)  ;
  await EnzymeBridgeFactory.connect(enzymeBridgeAddress,signer).initialize(lendingPoolAddressesProviderAddress,
      signer.address);
}

const createFundWork = async (signer:ethers.Wallet,provider:ethers.providers.JsonRpcProvider) => {
  
  const triple = await createSomeNewFund(signer,provider,userAddress,denominationAsset);
  provider.waitForTransaction(triple.receipt.transactionHash);
  let comptrollerProxy = triple.comptrollerProxy;
  console.log ("Comptroller proxy adress:"+comptrollerProxy.address);
  const nonce = await provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce);
}

const createAssetsToFund = async (signer:ethers.Wallet,
  provider:ethers.providers.JsonRpcProvider,
  comptrollerProxyAsset:string,
  assetAddress:string,
  amountIn:number) => {
  /*await provider.send("hardhat_setNonce", [
    signer.address,
    "0x1B9",
  ]);*/

  const comptrollerProxy = new ComptrollerLib(comptrollerProxyAsset, signer);

  let amount:string = amountIn.toString();
  const mintableToken = getMintableToken(signer);
  await MintableERC20Factory.connect(aaveAddress,signer).mint(ethers.utils.parseUnits(amount, "18"));
  await addNewAssetsToFundCustom(signer,comptrollerProxy,[assetAddress],[amount]);
}

const getVaultValueAction =async ( signer:ethers.Wallet,
  provider: any,
  fundValueCalculatorAddress:string,
    fundDeployerAddress:string,
  fundValueCalculatorRouterAddress:string,
  valueInterpreterAddress:string,
  comptrollerProxyAddress:string,
  vaultProxyAddress:string) => {
   
    const aaveAddress = "0xb9bEECD1A582768711dE1EE7B0A1d582D9d72a6C";
   getFundValue(signer,provider,fundValueCalculatorAddress,fundDeployerAddress,
    fundValueCalculatorRouterAddress,
    valueInterpreterAddress,
    comptrollerProxyAddress,
    aaveAddress);
}

/**
 * This is very crytical function. If we can deposit token from aave to enzyme fund,
 * then we are half way done. Later on, if I can borrow from enzyme fund, then I think
 * we are amost done. We have setup main stuff
 */
/*const enableEnzymeVaultAsAaveTokenPool = async (
  signer:ethers.Wallet,
  fromTokenAddress:string,
  enzymeVaultProxy:string
) => {
  const pool = EnzymeLendingPoolManagerFactory.connect(enzymeLendingPoolManagerAddress,signer)
  console.log ("after connecting");
  await pool.makeEnzymePool(fromTokenAddress,enzymeVaultProxy);
  console.log ("after setReserveFactor");
}*/

//registerEnzymeContractsWithAave(signer);
//createFundWork(signer,provider);

//createAssetsToFund (signer,provider,comptrollerProxyAddress,aaveAddress, 10000000000);

/*
moveAssetsToAnotherFund(signer,provider,
  "0xa4ab96993998b9cd84916615b8f077891368d652",
  "0x5f867ca9e467b9573ccb002a54ca897d00c8a052",
  [aaveAddress],
  [100]);
  */

/*addTrackedOneAssetToVault(signer,
    comptrollerProxyAddress,
    integrationManagerAddress,[denominationAsset,aaveAddress]);
*/

 getFundValue(signer,provider,
    fundValueCalculatorAddress,
    fundDeployerAddress,
    fundValueCalculatorRouterAddress,
    valueInterpreterAddress,
    comptrollerProxyAddress,
    aaveAddress);

//enableEnzymeVaultAsAaveTokenPool (signer,lendingPoolConfiguratorAddress,vaultProxyAddress);


const SUB_GRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme";

const init = async () => {
  const funds = await listAllFunds(SUB_GRAPH_ENDPOINT);
  console.log(funds);
};

//init();
