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
let integrationManagerAddress = "0xd9fEc8238711935D6c8d79Bef2B9546ef23FC046";
let fundValueCalculatorAddress = "0x8E45C0936fa1a65bDaD3222bEFeC6a03C83372cE";
let fundDeployerAddress = "0x976C214741b4657bd99DFD38a5c0E3ac5C99D903";
let fundValueCalculatorRouterAddress = "0x9385556B571ab92bf6dC9a0DbD75429Dd4d56F91";
let valueInterpreterAddress = "0xAe120F0df055428E45b264E7794A18c54a2a3fAF";
let managementFeeAddress = "0x158d291D8b47F056751cfF47d1eEcd19FDF9B6f8";
let entranceRateDirectFeeAddress = "0x0c626FC4A447b01554518550e30600136864640B";
let performanceFeeAddress = "0x2F54D1563963fC04770E85AF819c89Dc807f6a06";
let lendingPoolAddressesProviderAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
let aaveProtocolDataProviderAddress = "0x71089Ba41e478702e1904692385Be3972B2cBf9e";
let enzymeBridgeAddress = "0x74Cf9087AD26D541930BaC724B7ab21bA8F00a27";
let vaultLibAddress = "0x9338CA7d556248055f5751d85cDA7aD6eF254433";
let comptrollerLibAddress = "0xCBBe2A5c3A22BE749D5DDF24e9534f98951983e2";
let yearnVaultV2AdapterAddress = "0xB22C255250d74B0ADD1bfB936676D2a299BF48Bd";

//Set this manually if required
let comptrollerProxyAddress = "0x8fee1caaccb93f019b48d4405d7429ca3a1d7145";
let vaultProxyAddress = "0xcf25c70d942a2db6a6d11a897be47d3d9153ab58";

let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
let aaveAddress = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
let enjAddress = "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c";
let daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

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
    //await dai.connect(signer).mint('10000000000000000000000000');
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
    const outgoingUnderlyingAmount = assetUnit;
    console.log (outgoingUnderlyingAmount.toString());

    //await outgoingToken.transfer(vaultProxy.address, outgoingUnderlyingAmount.mul(3));
    await outgoingToken.connect(signer).transfer(vaultProxy.address,"1000000000000000"); //outgoingUnderlyingAmount.mul(3));
    let bal2 = await outgoingToken.balanceOf(vaultProxy.address)
    console.log ("vault balance:"+bal2.toString());

    // Since we can't easily test that an unused underlying amount from a deposit is returned
    /// to the vaultProxy, we seed the adapter with a small amount of the underlying, which will
    /// be returned to the vaultProxy upon running lend()
    const preTxAdapterUnderlyingBalance = assetUnit;
    await outgoingToken.transfer(yearnVaultV2Adapter.address, "10010990"); //preTxAdapterUnderlyingBalance);

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
    return utils.parseUnits('0.001', await asset.decimals());
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
//createFundWork(daiAddress,signer,provider);
//lend(provider,signer);

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
