/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type TestSinglePeggedDerivativePriceFeedArgs = [_derivative: AddressLike, _underlying: AddressLike];

// prettier-ignore
export interface TestSinglePeggedDerivativePriceFeed extends Contract<TestSinglePeggedDerivativePriceFeed> {
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, TestSinglePeggedDerivativePriceFeed>
  getDerivative: Call<() => string, TestSinglePeggedDerivativePriceFeed>
  getUnderlying: Call<() => string, TestSinglePeggedDerivativePriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, TestSinglePeggedDerivativePriceFeed>
}

let TestSinglePeggedDerivativePriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  TestSinglePeggedDerivativePriceFeedBytecode =
    '0x60c060405234801561001057600080fd5b5060405161050b38038061050b8339818101604052604081101561003357600080fd5b5080516020918201516040805163313ce56760e01b8152905192939192849284926001600160a01b0384169263313ce56792600480840193919291829003018186803b15801561008257600080fd5b505afa158015610096573d6000803e3d6000fd5b505050506040513d60208110156100ac57600080fd5b50516040805163313ce56760e01b8152905160ff909216916001600160a01b0385169163313ce567916004808301926020929190829003018186803b1580156100f457600080fd5b505afa158015610108573d6000803e3d6000fd5b505050506040513d602081101561011e57600080fd5b505160ff1614610175576040805162461bcd60e51b815260206004820152601d60248201527f636f6e7374727563746f723a20556e657175616c20646563696d616c73000000604482015290519081900360640190fd5b6001600160601b0319606092831b8116608052911b1660a052505060805160601c60a05160601c6103486101c360003980610209528061028e52508061017e52806102b252506103486000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80636d4a681a14610051578063727212f6146100755780639816f4731461013a5780639be918e614610142575b600080fd5b61005961017c565b604080516001600160a01b039092168252519081900360200190f35b6100a16004803603604081101561008b57600080fd5b506001600160a01b0381351690602001356101a0565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156100e55781810151838201526020016100cd565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561012457818101518382015260200161010c565b5050505090500194505050505060405180910390f35b61005961028c565b6101686004803603602081101561015857600080fd5b50356001600160a01b03166102b0565b604080519115158252519081900360200190f35b7f000000000000000000000000000000000000000000000000000000000000000090565b6060806101ac846102b0565b6101e75760405162461bcd60e51b81526004018080602001828103825260308152602001806102e36030913960400191505060405180910390fd5b60408051600180825281830190925290602080830190803683370190505091507f00000000000000000000000000000000000000000000000000000000000000008260008151811061023557fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509050828160008151811061027957fe5b6020026020010181815250509250929050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169116149056fe63616c63556e6465726c79696e6756616c7565733a204e6f74206120737570706f727465642064657269766174697665a26469706673582212208bfed95473bf3d0a45d000f5919d4dd90b4b4fa76186d6e9fbc5c780d891eb9d64736f6c634300060c0033';
}

// prettier-ignore
export const TestSinglePeggedDerivativePriceFeed = contract<TestSinglePeggedDerivativePriceFeed, TestSinglePeggedDerivativePriceFeedArgs>(TestSinglePeggedDerivativePriceFeedBytecode)`
  constructor(address _derivative, address _underlying)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getDerivative() view returns (address derivative_)
  function getUnderlying() view returns (address underlying_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
`;
