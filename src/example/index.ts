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
let integrationManagerAddress = "0x25C0a2F0A077F537Bd11897F04946794c2f6f1Ef";
let fundValueCalculatorAddress = "0x22b1c5C2C9251622f7eFb76E356104E5aF0e996A";
let fundDeployerAddress = "0xB9d9e972100a1dD01cd441774b45b5821e136043";
let fundValueCalculatorRouterAddress = "0x5322471a7E37Ac2B8902cFcba84d266b37D811A0";
let valueInterpreterAddress = "0xB7ca895F81F20e05A5eb11B05Cbaab3DAe5e23cd";
let managementFeeAddress = "0xA9d0Fb5837f9c42c874e16da96094b14Af0e2784";
let entranceRateDirectFeeAddress = "0xd977422c9eE9B646f64A4C4389a6C98ad356d8C4";
let performanceFeeAddress = "0x6B21b3ae41f818Fc91e322b53f8D0773d31eCB75";
let lendingPoolAddressesProviderAddress = "0xaC47e91215fb80462139756f43438402998E4A3a";
let aaveProtocolDataProviderAddress = "0xA21DDc1f17dF41589BC6A5209292AED2dF61Cc94";
let enzymeBridgeAddress = "0x3C15538ED063e688c8DF3d571Cb7a0062d2fB18D";
let vaultLibAddress = "0x52173b6ac069619c206b9A0e75609fC92860AB2A";
let comptrollerLibAddress = "0xeC1BB74f5799811c0c1Bff94Ef76Fb40abccbE4a";

//Set this manually if required
let comptrollerProxyAddress = "0xb2db534da1be04149c1c49edb008979b95db4970";
let vaultProxyAddress = "0x8e825311482e79454ca24ae24570ecd7d0a4282f";

let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
let aaveAddress = "0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7";
let enjAddress = "0xaca81583840B1bf2dDF6CDe824ada250C1936B4D";
let daiAddress = "0xFD6F7A6a5c21A3f503EBaE7a473639974379c351";

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

registerEnzymeContractsWithAave(signer);
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
/*
 getFundValue(signer,provider,
    fundValueCalculatorAddress,
    fundDeployerAddress,
    fundValueCalculatorRouterAddress,
    valueInterpreterAddress,
    comptrollerProxyAddress,
    aaveAddress);
*/
//enableEnzymeVaultAsAaveTokenPool (signer,lendingPoolConfiguratorAddress,vaultProxyAddress);


const SUB_GRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme";

const init = async () => {
  const funds = await listAllFunds(SUB_GRAPH_ENDPOINT);
  console.log(funds);
};

//init();
