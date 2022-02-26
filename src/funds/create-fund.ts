import { utils, ethers, BigNumberish ,BigNumber,constants as myconstants} from "ethers";
import { AddressLike,extractEvent } from "@enzymefinance/ethers";
import FundDeployerAbi from "./../abis/FundDeployer.json";
import { VaultLib as VaultLibAbi } from "./../prep-abis";
import { assertEvent } from './../utils/assertions';
import MintableERC20  from "../aave/abis/MintableERC20.json";

import {
  managementFeeConfigArgs,
  performanceFeeConfigArgs,
  feeManagerConfigArgs,
  convertRateToScaledPerSecondRate,
  encodeArgs,
} from "./../utils/fund";
import {
  AssetWhitelist,
  AssetBlacklist,
  AdapterBlacklist,
  AdapterWhitelist,
  PerformanceFee,
  MinMaxInvestment,
  FeeManager,
  ManagementFee,
  EntranceRateDirectFee,
} from "./../prep-abis";
import {
  ComptrollerLib,
  ComptrollerProxy,
  encodeFunctionData,
  VaultLib,
  VaultProxy,
  FundDeployer,
  FeeSettlementType
} from '@enzymefinance/protocol';

export {
  PerformanceFee,
  ManagementFee,
  EntranceRateDirectFee,
  MinMaxInvestment,
  AssetBlacklist,
  AssetWhitelist,
  AdapterBlacklist,
  AdapterWhitelist,
};

export const createNewFund = async (
  signer: ethers.Wallet,
  fundName: string,
  denominationAsset: string,
  timeLockInSeconds: number,
  feeManagerConfig: string,
  policyManagerConfigData: string,
  gaslimit: string,
  provider: any,
  address: string
) => {
  const nonce = await provider.getTransactionCount(address, "pending");
  console.log ("User nonce:"+nonce);

  // GET FundDeployer Interface Data
  let fundDeployer = new FundDeployer(FundDeployerAbi.address,signer);
  const receipt = await fundDeployer.connect(signer).createNewFund(
    address,
    fundName,
    denominationAsset,
    timeLockInSeconds.toString(),
    feeManagerConfig,
    policyManagerConfigData
  );
 
  console.log(receipt);
  let events = extractEvent(receipt, 'ComptrollerProxyDeployed');
  console.log (JSON.stringify(events));
  const comptrollerProxyIn = events[0].args.comptrollerProxy;
  const comptrollerProxy = new ComptrollerLib(comptrollerProxyIn, signer);
  console.log ("ComptrollerProxyDeployed Event Extracted:"+comptrollerProxy);

  events = extractEvent(receipt, 'NewFundCreated');
  console.log (JSON.stringify(events));

  const vaultProxyIn = events[0].args.vaultProxy;
  const vaultProxy = new VaultLib(vaultProxyIn, signer);
  console.log ("NewFundCreated Event Extracted:"+vaultProxy);

  return {
    comptrollerProxy,
    receipt,
    vaultProxy,
  };
};

export const getMintableToken = async (signer:ethers.Wallet) => {
   // GET Mintable Token Interface Data
   const MintableERC20Interface = new ethers.utils.Interface(
    JSON.parse(JSON.stringify(MintableERC20.abi))
  );
  // Mintable Token Contract
  const mintable = new ethers.Contract(
    MintableERC20.address,
    MintableERC20Interface,
    signer
  );

  return mintable;
}

/**
 * Rate is  number representing a 1%
 */
export const getManagementFees = (rate: any) => {
  // Must convert from rate to scaledPerSecondRate
  var scaledPerSecondRate = convertRateToScaledPerSecondRate(rate);
  console.log (`getManagementFees: ${rate} becomes ${scaledPerSecondRate}`);
  const fee =  managementFeeConfigArgs(scaledPerSecondRate);
  console.log ("getManagementFees rate="+scaledPerSecondRate+" is "+fee);
  return fee;
};

/**
 *
 * @param {*} rate Rate in percentage
 * @param {*} period Period at which it will be applied
 */
export const getPerformanceFees = (rate: any, period: any) => {
  // The period will default to 30 days
  const defaultPeriod = 2592000;
  // remove code

  // The rate must be (rate/100 * 10**18) or directly rate * 10**16;
  rate = utils.parseEther((rate / 100).toString());
  rate = "1000";
  const fee =  performanceFeeConfigArgs(rate, defaultPeriod);
  console.log ("getPerformanceFees rate="+rate+" is "+fee);
  return fee;
};

/**
 * Rate is  number representing a 1%
 */
export function getEntranceRateFeeConfigArgs(rate: BigNumberish) {
  // The rate must be (rate/100 * 10**18) or directly rate * 10**16;
  rate = utils.parseEther(rate.toString());
  console.log ("getEntranceRateFeeConfigArgs:Rate:"+rate+" reducing it 1000");
  rate = "1000";
  const fee = encodeArgs(["uint256","address"], [rate,myconstants.AddressZero]);
  console.log ("getEntranceRateFeeConfigArgs rate="+rate+" is "+fee);
  return fee;
}

export const getPolicyArgsData = (
  policies: AddressLike[],
  policySettings: AddressLike[]
) => {
  return encodeArgs(["address[]", "bytes[]"], [policies, policySettings]);
};

/**
 *
 * @param {*} fees
 * @param {*} feeManagerSettingsData
 * @param {*} _signer
 * @param {*} allow
 * @returns
 */

export const getFeesManagerConfigArgsData = async (
  fees: any,
  feeManagerSettingsData: any,
  _signer: any,
  allow: any
) => {
  // remove code
  // console.log(fees, feeManagerSettingsData, _signer, allow);
  const FeeManagerInterface = new ethers.utils.Interface(
    JSON.parse(JSON.stringify(FeeManager.abi))
  );

  // remove in mainnet
  const feeManager = new ethers.Contract(
    FeeManager.address,
    FeeManagerInterface
  );
  let fees_unregister = [];
  // end

  try {
    if (allow) {
      const registeredFees = await feeManager.getRegisteredFees();

      if (registeredFees.length === 0) {
        fees_unregister = [ManagementFee.address, PerformanceFee.address];
        await feeManager.registerFees(fees_unregister, { gasLimit: 300000 });
      } else {
        if (!registeredFees.includes(ManagementFee.address)) {
          fees_unregister.push(ManagementFee.address);
        }

        if (!registeredFees.includes(PerformanceFee.address)) {
          fees_unregister.push(PerformanceFee.address);
        }

        if (!registeredFees.includes(EntranceRateDirectFee.address)) {
          fees_unregister.push(EntranceRateDirectFee.address);
        }
      }
      // Register this fees for app use
      if (fees_unregister.length > 0) {
        await feeManager.registerFees(fees_unregister, { gasLimit: 300000 });
      }
    }

    // Convert Fees
  } catch (error) {}

  return feeManagerConfigArgs({
    fees: fees,
    settings: feeManagerSettingsData,
  });
};

/**
 *
 * @param assetAddress Asset address
 * @param signer
 * @returns
 */

export async function getAssetDecimals(assetAddress: string, signer: any) {
  try {
    // we use VaultLib as an interface because it has the `decimals()` getter
    const assetInterface = new ethers.utils.Interface(
      JSON.parse(JSON.stringify(VaultLibAbi.abi))
    );
    const asset = new ethers.Contract(assetAddress, assetInterface, signer);
    const decimals = await asset.decimals();
    return decimals;
  } catch (error) {
    return { error: false };
  }
}
