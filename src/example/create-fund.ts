import { StandardToken } from '@enzymefinance/protocol';
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

export const start = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    //"https://kovan.infura.io/v3/f7f0290fa86240888223b0ad599c71a1"
  );

  const USER_ADDRESS = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
  //"0xf83F4c3A25b8FEE1722d76e5F72AaFcA00845011";
  const USER_PRIVATE_KEY = 
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    //"0x2c283ea64fe7352dd1b1125723a260524e9ad0a6c0a8008b240f904265c0cfd2";

  const signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);
  //const denominationAsset = "0x038B86d9d8FAFdd0a02ebd1A476432877b0107C8";
  const denominationAsset = "0xA7c59f010700930003b33aB25a7a0679C860f29c";
  const policyManagerConfigData = utils.hexlify("0x");

  const managementFee = "1";
  const performanceFee = "10";
  const entranceFee = "2";

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
  
  console.log("ARGS", feeArgsData);
  try {
    const fund = await createNewFund(
      signer,
      "WE FUND 1",
      denominationAsset,
      10000,
      feeArgsData!,
      policyManagerConfigData,
      "8000000",
      provider,
      USER_ADDRESS
    );

    console.log("FUND CREATED");
    console.log(fund);
  } catch (error) {
    console.log("ERROR:"+error);
  }
};
