#!/usr/bin/env bash

set -x
function plugAaveData() {
   word1=$1
   fileName=$2
   address=`egrep -e "^$word1: " $fileName | sed "s/$word1: //"|tail -1`
   echo $address
 }

function pullData() {
  word=$1
  fileName=$2
  pulledData=`grep "deploying \"$word\"" $fileName  | sed "s/.*deployed at //g" | sed "s/ with.*//g"|tail -1`
  echo $pulledData
}
function plugData() {
  word=$1
  value=$2
  fileName=$3
  echo "Received $word $value $fileName"
  sed -i "s/let $word.*;/let $word = \"$value\";/" $fileName
}

enzymeConsoleOut="enzyme.out"
aaveConsoleOut="aave.out"
outFile="src/example/index.ts"
runFile="runtest.ts"
runFile2="runtest2.ts"
#outFile="index.ts"

integrationManagerAddress=$(pullData IntegrationManager $enzymeConsoleOut)
fundValueCalculatorAddress=$(pullData FundValueCalculator $enzymeConsoleOut)
fundDeployerAddress=$(pullData FundDeployer $enzymeConsoleOut)
fundValueCalculatorRouterAddress=$(pullData FundValueCalculatorRouter $enzymeConsoleOut)
valueInterpreterAddress=$(pullData ValueInterpreter $enzymeConsoleOut)
managementFeeAddress=$(pullData ManagementFee $enzymeConsoleOut)
entranceRateDirectFeeAddress=$(pullData EntranceRateDirectFee $enzymeConsoleOut)
performanceFeeAddress=$(pullData PerformanceFee $enzymeConsoleOut)
vaultLibAddress=$(pullData VaultLib $enzymeConsoleOut)
comptrollerLibAddress=$(pullData ComptrollerLib $enzymeConsoleOut);

enzymeBridgeAddress=$(plugAaveData EnzymeBridge $aaveConsoleOut)
lendingPoolAddressesProviderAddress=$(plugAaveData LendingPoolAddressesProvider $aaveConsoleOut)
aaveProtocolDataProviderAddress=$(plugAaveData AaveProtocolDataProvider $aaveConsoleOut)
lendingPoolAddress=$(plugAaveData LendingPool $aaveConsoleOut)

aaveAddress=$(plugAaveData AAVE $aaveConsoleOut)
daiAddress=$(plugAaveData DAI $aaveConsoleOut)
enjAddress=$(plugAaveData ENJ $aaveConsoleOut)

plugData integrationManagerAddress $integrationManagerAddress $outFile
plugData fundValueCalculatorAddress $fundValueCalculatorAddress $outFile
plugData fundDeployerAddress $fundDeployerAddress $outFile
plugData fundValueCalculatorRouterAddress $fundValueCalculatorRouterAddress $outFile
plugData valueInterpreterAddress $valueInterpreterAddress $outFile
plugData managementFeeAddress $managementFeeAddress $outFile
plugData entranceRateDirectFeeAddress $entranceRateDirectFeeAddress $outFile
plugData performanceFeeAddress $performanceFeeAddress $outFile
plugData vaultLibAddress $vaultLibAddress $outFile
plugData comptrollerLibAddress $comptrollerLibAddress $outFile

plugData lendingPoolAddressesProviderAddress $lendingPoolAddressesProviderAddress $outFile
plugData aaveProtocolDataProviderAddress $aaveProtocolDataProviderAddress $outFile
plugData enzymeBridgeAddress $enzymeBridgeAddress $outFile

plugData aaveAddress $aaveAddress $outFile
plugData daiAddress  $daiAddress $outFile
plugData enjAddress  $enjAddress $outFile

plugData aaveAddress $aaveAddress $runFile
plugData daiAddress  $daiAddress $runFile
plugData lendingPoolAddress  $lendingPoolAddress $runFile

plugData aaveAddress $aaveAddress $runFile2
plugData daiAddress  $daiAddress $runFile2
plugData lendingPoolAddress  $lendingPoolAddress $runFile2
