
import { ethers, utils } from "ethers";
import {
  getEntranceRateFeeConfigArgs,
  getFeesManagerConfigArgsData,
  getPerformanceFees,
  ManagementFee,
} from "../funds/create-fund";
import { createNewFund, getManagementFees } from "./../index";
import { EntranceRateDirectFee } from "../funds/create-fund";
import { PerformanceFee } from "../funds/create-fund";
//include aave lending pool contract
import LendingPool from "../aave/abis/LendingPool.json";
import {LendingPoolFactory} from "../aave/types/LendingPoolFactory";
import { encodeArgs } from '../utils/fund';

const getLendingPool = (signer: ethers.Wallet) => {
   // GET FundDeployer Interface Data
   const LendingPoolInterface = new ethers.utils.Interface(
    JSON.parse(JSON.stringify(LendingPool.abi))
  );
  // FundDeployer Contract
  const lendingPool = new ethers.Contract(
    "0x839ea1137209c8899F8779e78ce3b426dE7437C5",
    LendingPoolInterface,
    signer
  );
  return lendingPool;
}

export const createSomeNewFund = async (signer:ethers.Wallet,
  provider:ethers.providers.JsonRpcProvider) => {
  
  const USER_ADDRESS = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  const denominationAsset = "0xA7c59f010700930003b33aB25a7a0679C860f29c";
                             
  const policyManagerConfigData = utils.hexlify("0x");

  const managementFee = "1";
  const performanceFee = "10";
  const entranceFee = "2";

  const nonce2 = await provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce2);

  let feeManagerSettingsData = [
    getManagementFees(managementFee),
    getEntranceRateFeeConfigArgs(entranceFee),
    getPerformanceFees(performanceFee, 12),
  ]; // value configurations
  let fees = [
    ManagementFee.address,
    EntranceRateDirectFee.address,
    PerformanceFee.address,
  ]; // list of address

  console.log("DATA", fees, feeManagerSettingsData);
  const feeArgsData = await getFeesManagerConfigArgsData(
    fees,
    feeManagerSettingsData,
    USER_ADDRESS,
    true
  );
  
  /*
  //aave 
  const lpAddress = "0x2a4EaBa4c09e59500fE7D97185B631Bb7797eEE4";
  const lendingPool = await LendingPoolFactory.connect(lpAddress,signer);
  let nonce = await provider.getTransactionCount(denominationAsset, "pending");
  
  let result = await lendingPool.functions["deposit(address,uint256,address,uint16)"](denominationAsset,
    "1000",signer.address,'1',{gasLimit:  30000000}); //,nonce: nonce});
  console.log (result);
  nonce = await provider.getTransactionCount(denominationAsset, "pending");
  result = await lendingPool.functions["deposit(address,uint256,address,uint16,string,uint256,bytes[])"](denominationAsset,
    "1000",signer.address,'1',"MY FUND",0,[feeArgsData,policyManagerConfigData],
    {gasLimit:  30000000});
  console.log (result);
  */
  const nonce = await provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce);

  console.log("ARGS", feeArgsData);

  let triple = await createNewFund(
      signer,
      "WE FUND 1",
      denominationAsset,
      10000,
      feeArgsData!,
      policyManagerConfigData,
      "8000000000000",
      provider,
      USER_ADDRESS
    );
  
  console.log("FUND CREATED");
  console.log(triple.receipt);
  return triple;
 
};
