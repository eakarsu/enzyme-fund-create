import type { AddressLike, ContractReceipt } from '@enzymefinance/ethers';
import type { ValueInterpreter } from '@enzymefinance/protocol';
import type { BigNumberish } from 'ethers';
import { BigNumber, utils } from 'ethers';

export async function transactionTimestamp(receipt: ContractReceipt<any>) {
  const block = await provider.getBlock(receipt.blockNumber);

  return block.timestamp;
}

export async function calcMlnValueAndBurnAmountForSharesBuyback({
  valueInterpreter,
  mln,
  denominationAsset,
  sharesSupply,
  gav,
  buybackSharesAmount,
}: {
  valueInterpreter: ValueInterpreter;
  mln: AddressLike;
  denominationAsset: AddressLike;
  sharesSupply: BigNumberish;
  gav: BigNumberish;
  buybackSharesAmount: BigNumberish;
}) {
  // Calculate expected mlnValue of shares to buyback
  // TODO: calcGrossShareValue can also be a helper util
  const grossShareValue = BigNumber.from(gav).mul(utils.parseEther('1')).div(sharesSupply);
  const denominationAssetValueOfBuyback = grossShareValue.mul(buybackSharesAmount).div(utils.parseEther('1'));
  const mlnValueOfBuyback = await valueInterpreter.calcCanonicalAssetValue
    .args(denominationAsset, denominationAssetValueOfBuyback, mln)
    .call();

  // 50% discount
  const mlnAmountToBurn = mlnValueOfBuyback.div(2);

  return { mlnAmountToBurn, mlnValue: mlnValueOfBuyback };
}
