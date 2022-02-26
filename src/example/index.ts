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
let integrationManagerAddress = "0x9C85258d9A00C01d00ded98065ea3840dF06f09c";
let fundValueCalculatorAddress = "0xA3f7BF5b0fa93176c260BBa57ceE85525De2BaF4";
let fundDeployerAddress = "0x90c84237fDdf091b1E63f369AF122EB46000bc70";
let fundValueCalculatorRouterAddress = "0x76cec9299B6Fa418dc71416FF353737AB7933A7D";
let valueInterpreterAddress = "0x3a622DB2db50f463dF562Dc5F341545A64C580fc";
let managementFeeAddress = "0xdB012DD3E3345e2f8D23c0F3cbCb2D94f430Be8C";
let entranceRateDirectFeeAddress = "0x52173b6ac069619c206b9A0e75609fC92860AB2A";
let performanceFeeAddress = "0xd977422c9eE9B646f64A4C4389a6C98ad356d8C4";
let lendingPoolAddressesProviderAddress = "0x8F4ec854Dd12F1fe79500a1f53D0cbB30f9b6134";
let aaveProtocolDataProviderAddress = "0x9c65f85425c619A6cB6D29fF8d57ef696323d188";
let enzymeBridgeAddress = "0xE8addD62feD354203d079926a8e563BC1A7FE81e";
//Set this manually if required
let comptrollerProxyAddress = "0xafe315464a16c86b0f30f6207d1c4fdd3f9207fc";
let vaultProxyAddress = "0x7b9421a637804e0a9cfb4e082fd27647540f64ea";

let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
let aaveAddress = "0x02b0B4EFd909240FCB2Eb5FAe060dC60D112E3a4";
let enjAddress = "0x66F625B8c4c635af8b74ECe2d7eD0D58b4af3C3d";
let daiAddress = "0x01c1DeF3b91672704716159C9041Aeca392DdFfb";

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
    await lendingPoolAddressProvider.setAddress(newId,addresses[i]);
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

registerEnzymeContractsWithAave(signer);
//createFundWork(signer,provider);
/*addTrackedOneAssetToVault(signer,
  comptrollerProxyAddress,
  integrationManagerAddress,[denominationAsset,aaveAddress]);
  */
//createAssetsToFund (signer,provider,comptrollerProxyAddress,aaveAddress, 10000000000);

/*
moveAssetsToAnotherFund(signer,provider,
  "0xa4ab96993998b9cd84916615b8f077891368d652",
  "0x5f867ca9e467b9573ccb002a54ca897d00c8a052",
  [aaveAddress],
  [100]);
  */

 /* getFundValue(signer,provider,
    fundValueCalculatorAddress,
    fundDeployerAddress,
    fundValueCalculatorRouterAddress,
    valueInterpreterAddress,
    "0x7345b0b5b02ac1b3caf95e3315551ca472de4a87",
    aaveAddress);*/
//enableEnzymeVaultAsAaveTokenPool (signer,lendingPoolConfiguratorAddress,vaultProxyAddress);

const SUB_GRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme";

const init = async () => {
  const funds = await listAllFunds(SUB_GRAPH_ENDPOINT);
  console.log(funds);
};

//init();
