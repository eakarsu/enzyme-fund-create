import { listAllFunds } from "./../index";

import { createSomeNewFund } from "./create-fund";
import { BigNumber, constants,ethers, utils } from "ethers";
import {getMintableToken} from "../funds/create-fund";
import {EnzymeBridgeFactory, MintableERC20, MintableERC20Factory, MockAToken} from "../aave/types";
import {addNewAssetsToFundCustom,
  addAssetsToFundExtend,
  moveAssetsToAnotherFund,
addTrackedOneAssetToVault} from "../utils/assets"
import { getFundValue } from "../utils/vaultValue";

import { LendingPoolConfiguratorFactory,LendingPoolAddressesProviderFactory,
  EnzymeLendingPoolManagerFactory } from "../aave/types";
import { LendingPoolConfigurator,LendingPoolConfiguratorInterface } from "../aave/types/LendingPoolConfigurator";

import {AddressLike, randomAddress} from '@enzymefinance/ethers';
import {
    ComptrollerLib, FundDeployer, IntegrationManager,
    IYearnVaultV2,
    lendSelector, MockToken,
    redeemSelector,
    SpendAssetsHandleType,
    StandardToken, VaultLib, YearnVaultV2Adapter,
    yearnVaultV2LendArgs,
    yearnVaultV2RedeemArgs,
} from '@enzymefinance/protocol';

import {yearnVaultV2Lend} from '../yearn/yearn';

const web3 = require("web3");

const provider = new ethers.providers.JsonRpcProvider(
  //"https://kovan.infura.io/v3/f7f0290fa86240888223b0ad599c71a1"
);
const denominationAsset = "0x99dBE4AEa58E518C50a1c04aE9b48C9F6354612f";
//User 1

const userAddress = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const USER_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

//const userAddress = "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc";
//const USER_PRIVATE_KEY = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";

//user2
/*
const userAddress = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
const USER_PRIVATE_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"; 
*/
let integrationManagerAddress = "0xd038A2EE73b64F30d65802Ad188F27921656f28F";
let fundValueCalculatorAddress = "0x696358bBb1a743052E0E87BeD78AAd9d18f0e1F4";
let fundDeployerAddress = "0x2538a10b7fFb1B78c890c870FC152b10be121f04";
let fundValueCalculatorRouterAddress = "0x3D63c50AD04DD5aE394CAB562b7691DD5de7CF6f";
let valueInterpreterAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
let managementFeeAddress = "0x1f53E116c31F171e59f45f0752AEc5d1F5aA3714";
let entranceRateDirectFeeAddress = "0x6e0a5725dD4071e46356bD974E13F35DbF9ef367";
let performanceFeeAddress = "0xa31F4c0eF2935Af25370D9AE275169CCd9793DA3";
let lendingPoolAddressesProviderAddress = "0x63fea6E447F120B8Faf85B53cdaD8348e645D80E";
let aaveProtocolDataProviderAddress = "0x158d291D8b47F056751cfF47d1eEcd19FDF9B6f8";
let enzymeBridgeAddress = "0x3904b8f5b0F49cD206b7d5AABeE5D1F37eE15D8d";
let vaultLibAddress = "0x532802f2F9E0e3EE9d5Ba70C35E1F43C0498772D";
let comptrollerLibAddress = "0x09120eAED8e4cD86D85a616680151DAA653880F2";
let yearnVaultV2AdapterAddress = "0xD2D5e508C82EFc205cAFA4Ad969a4395Babce026";

//Set this manually if required
let comptrollerProxyAddress = "0x3482173066f5a4f3326a116bbc8b621737bc4a24";
let vaultProxyAddress = "0xbb322c198a0dea7cb5d1c0a4665098c83825710d";

let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
let aaveAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
let enjAddress = "0x26B862f640357268Bd2d9E95bc81553a2Aa81D7E";
let daiAddress = "0x5302E909d1e93e30F05B5D6Eea766363D14F9892";

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

const createFundWork = async (denominationAsset:string,
                              signer:ethers.Wallet,provider:ethers.providers.JsonRpcProvider) => {
  
  const triple = await createSomeNewFund(signer,provider,userAddress,denominationAsset);
  provider.waitForTransaction(triple.receipt.transactionHash);
  let comptrollerProxy = triple.comptrollerProxy;
  console.log ("Comptroller proxy adress:"+comptrollerProxy.address);
  const nonce = await provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce);
  return triple;
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

const lendPrimitive = async (signer:ethers.Wallet,) => {
    const yearnVaultV2Adapter = new YearnVaultV2Adapter(yearnVaultV2AdapterAddress, signer);

    const yVault = new IYearnVaultV2("0x19D3364A399d251E894aC732651be8B0E4e85001", provider);
    const outgoingUnderlyingAmount = utils.parseEther('2');
    const minIncomingYVaultSharesAmount = utils.parseEther('3');

    const result = await yearnVaultV2Adapter.parseAssetsForAction(
        randomAddress(),
        lendSelector,
        yearnVaultV2LendArgs({
            minIncomingYVaultSharesAmount,
            outgoingUnderlyingAmount,
            yVault,
        }),
    );
    console.log(result);
}
const lend = async (provider:ethers.providers.JsonRpcProvider,signer:ethers.Wallet,) => {
    const yearnVaultV2Adapter = new YearnVaultV2Adapter(yearnVaultV2AdapterAddress, signer);
    //dai token
    let dai = MintableERC20Factory.connect(daiAddress,signer);
    await dai.symbol()
    await dai.connect(signer).mint('10000000000000000000000000');
    let bal = await dai.balanceOf(signer.address)
    console.log ("Dai balance:"+bal.toString());

    const yVault = await MintableERC20Factory.connect("0x19D3364A399d251E894aC732651be8B0E4e85001", signer);
    const outgoingToken = dai;
    const assetUnit = await getAssetUnit(yVault);
    const integrationManager = new IntegrationManager(integrationManagerAddress, signer);

    const comptrollerProxy = new ComptrollerLib(comptrollerProxyAddress, signer);
    const vaultProxy = new VaultLib(vaultProxyAddress, signer);
    //const { comptrollerProxy,receipt, vaultProxy } = await createFundWork(daiAddress,signer,provider);
    //console.log (receipt);

    await dai.connect(signer).approve(vaultProxy.address,'100000000000000000000000000000000000000000');

    // Seed the fund with more than the necessary amount of outgoing asset
    const outgoingUnderlyingAmount = BigNumber.from(100000000000); //assetUnit;
    //await outgoingToken.transfer(vaultProxy.address, outgoingUnderlyingAmount.mul(3));
    await outgoingToken.connect(signer).transfer(vaultProxy.address,"1000000"); //outgoingUnderlyingAmount.mul(3));
    let bal2 = await outgoingToken.balanceOf(vaultProxy.address)
    console.log ("vault balance:"+bal2.toString());

    // Since we can't easily test that an unused underlying amount from a deposit is returned
    /// to the vaultProxy, we seed the adapter with a small amount of the underlying, which will
    /// be returned to the vaultProxy upon running lend()
    const preTxAdapterUnderlyingBalance = assetUnit;
    await outgoingToken.transfer(yearnVaultV2Adapter.address, "1000000000"); //preTxAdapterUnderlyingBalance);

    const [preTxYVaultBalance, preTxUnderlyingBalance] = await getAssetBalances(provider, vaultProxy,
       [yVault, outgoingToken]);
    console.log ("preTxYVaultBalance:"+preTxYVaultBalance);
    console.log ("preTxUnderlyingBalance:"+preTxUnderlyingBalance);

    const lendReceipt = await yearnVaultV2Lend({
        comptrollerProxy,
        integrationManager: integrationManager,
        outgoingUnderlyingAmount,
        signer: signer,
        yVault,
        yearnVaultV2Adapter,
    });

    const [postTxYVaultBalance, postTxUnderlyingBalance] = await getAssetBalances(provider, vaultProxy,
        [yVault, outgoingToken]);
}

async function getAssetBalances(provider:ethers.providers.JsonRpcProvider,
                                account: AddressLike, assets: AddressLike[] ) {
    return Promise.all(assets.map((asset) => new StandardToken(asset, provider).balanceOf(account)));
}

async function getAssetUnit(asset: MintableERC20) {
    return utils.parseUnits('1', await asset.decimals());
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
//createFundWork(daiAddress,signer,provider);
lend(provider,signer);

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
