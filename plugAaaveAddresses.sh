#!/usr/bin/env bash
set -x
function plugData() {
   word1=$1
   word2=$2
   fileName=$3
   outFileName=$4
   address=`egrep -e "^$word1: " $fileName | sed "s/$word1: //"|tail -1`
   #echo "Word1:${word1} Word2:${word2} address:${address} fileName:${fileName} outFileName:${outFileName}"
   sed  -i "s/  $word2: '.*',/  $word2: '$address',/g" $outFileName
   echo "Word1:${word1} Word2:${word2} address:${address}"
 }
function plugDataToken() {
  word1=$1
  word2=$2
  fileName=$3
  outFileName=$4
  address=`egrep -e "^$word1:" $fileName | sed "s/$word1://"|tail -1`
  sed  -i "s/  $word2: \['.*',/  $word2: \['$address',/g" $outFileName
  echo "Word1:${word1} Word2:${word2} address:${address}"
}
function plugIndividualToken() {
   word1=$1
   word2=$2
   fileName=$3
   outFileName=$4
   address=`egrep -e "^$word1: " $fileName | sed "s/$word1: //"|tail -1`
   sed  -i "s/const $word2 = '.*';/  $word2: '$address';/g" $outFileName
   echo "Word1:${word1} Word2:${word2} address:${address}"
 }

consoleOut='aave.out'
mainnet='/home/eakarsu/Research/enzyme/protocol/deploy/scripts/config/Mainnet.ts'
#mainnet='Mainnet.ts'

plugData LendingPoolAddressesProvider lendingPoolAddressProvider $consoleOut $mainnet
plugData AaveProtocolDataProvider protocolDataProvider $consoleOut $mainnet


#Skip snx, knc, weth,usdc and susd because enzyme is not able to deploy syntetix coins
for token in dai aave tusd bat usdt zrx mkr wbtc link mana ren  busd yfi uni enj; do
  upToken=$(echo $token | tr 'a-z' 'A-Z')
  plugData $upToken $token $consoleOut $mainnet
  plugDataToken a"$upToken" a"$token" $consoleOut $mainnet
done

plugIndividualToken weth WETH $consoleOut $mainnet
plugIndividualToken mln MLN $consoleOut $mainnet
