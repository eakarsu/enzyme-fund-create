

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
  FundValueCalculatorRouter,
  ValueInterpreter,
  FundValueCalculator,
  StandardToken
} from '@enzymefinance/protocol';
import { tStringTokenSmallUnits } from "../aave/helpers/types";


export async function getFundValue(
    signer:ethers.Wallet,
    provider: any,
    fundValueCalculatoreAddress:string,
    fundDeployerAddress:string,
    fundValueCalculatorRouterAddress:string,
    valueInterpreterAddress:string,
    comptrollerProxyAddress:string,
    aaveAddress:string
     )  {
  
        const fundValueCalculator = new FundValueCalculator(fundValueCalculatoreAddress,provider);
        const fundDeployer = new FundDeployer(fundDeployerAddress,provider);

        const fundValueCalculatorRouter = new FundValueCalculatorRouter(
            fundValueCalculatorRouterAddress,provider); 

        const valueInterpreter = new ValueInterpreter(valueInterpreterAddress,provider);

         // Warp a year in the future to easily predict accrued management fee and protocol fee
        //await provider.send('evm_increaseTime', [60 * 60 * 24 * 365]);
        //await provider.send('evm_mine', []);

        
        const comptrollerProxy = new ComptrollerLib(comptrollerProxyAddress, signer);
        let vaultProxyAddress = await comptrollerProxy.getVaultProxy();
        const vaultProxy = new VaultLib(vaultProxyAddress, signer);

        await fundValueCalculatorRouter.connect(signer).setFundValueCalculators([fundDeployer],
            [fundValueCalculator])

        const preTxGav = await comptrollerProxy.calcGav.args(true).call();
        console.log ("calcGav :"+preTxGav);
        const retVal =await fundValueCalculatorRouter.calcGav.args(vaultProxy).call();
        console.log ("CalcVal fundValueCalculatorRouter:"+ retVal);

        const actualGrossShareValue = await comptrollerProxy.calcGrossShareValue.args(false).call();
        console.log ("comptrollerProxy calcGrossShareValue:"+ actualGrossShareValue);

        let aaveAsset: StandardToken = new StandardToken(aaveAddress,signer)

        const netValue = await fundValueCalculatorRouter.calcNetValueForSharesHolderInAsset.args(vaultProxy, signer, aaveAsset).call()
        console.log ("Net Value for aave calcNetValueForSharesHolderInAsset:"+netValue);

        const result = await fundValueCalculator.connect(signer).calcGav.args(vaultProxy).call();
        console.log("Denomination Asset:"+result.denominationAsset_);
        console.log("Fund Value:"+result.gav_);

  }
