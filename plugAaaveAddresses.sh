#!/usr/bin/env bash
set -x
function plugData() {
   word1=$1
   word2=$2
   fileName=$3
   outFileName=$4
   address=`egrep -e "^$word1: " $fileName | sed "s/$word1: //"|tail -1`
   #echo "Word1:${word1} Word2:${word2} address:${address} fileName:${fileName} outFileName:${outFileName}"
   sed  -i "s/  $word2: '.*',/  $word2: '$address',/" $outFileName
   echo "Word1:${word1} Word2:${word2} address:${address}"
 }
function plugDataToken() {
  word1=$1
  word2=$2
  fileName=$3
  outFileName=$4
  address=`egrep -e "^$word1:" $fileName | sed "s/$word1://"|tail -1`
  sed  -i "s/  $word2: \['.*',/  $word2: \['$address',/" $outFileName
  echo "Word1:${word1} Word2:${word2} address:${address}"
}

consoleOut='aave.out'
mainnet='/home/eakarsu/Research/enzyme/protocol/deploy/scripts/config/Mainnet.ts'
#mainnet='Mainnet.ts'
plugData DAI dai $consoleOut $mainnet
plugData AAVE aave $consoleOut $mainnet
plugData ENJ enj $consoleOut $mainnet

plugData LendingPoolAddressesProvider lendingPoolAddressProvider $consoleOut $mainnet
plugData AaveProtocolDataProvider protocolDataProvider $consoleOut $mainnet

plugDataToken aDAI adai $consoleOut $mainnet
plugDataToken aAAVE aaave $consoleOut $mainnet
plugDataToken aENJ aenj $consoleOut $mainnet
