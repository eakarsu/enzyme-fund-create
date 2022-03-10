/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ProtocolFeeReserveProxyArgs = [_constructData: BytesLike, _protocolFeeReserveLib: AddressLike];

// prettier-ignore
export interface ProtocolFeeReserveProxy extends Contract<ProtocolFeeReserveProxy> {
  // No external functions
}

let ProtocolFeeReserveProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ProtocolFeeReserveProxyBytecode =
    '0x608060405234801561001057600080fd5b506040516103d13803806103d18339818101604052604081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b506040526020015191506100ed9050565b7fbc966524590ce702cc9340e80d86ea9095afa6b8eecbb5d6213f57633223918160001b816001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561014a57600080fd5b505afa15801561015e573d6000803e3d6000fd5b505050506040513d602081101561017457600080fd5b5051146101b25760405162461bcd60e51b815260040180806020018281038252603281526020018061039f6032913960400191505060405180910390fd5b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5560006060826001600160a01b0316846040518082805190602001908083835b602083106102135780518252601f1990920191602091820191016101f4565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610273576040519150601f19603f3d011682016040523d82523d6000602084013e610278565b606091505b50915091508181906103085760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156102cd5781810151838201526020016102b5565b50505050905090810190601f1680156102fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505060848061031b6000396000f3fe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc543660008037600080366000846127105a03f43d806000803e818015604957816000f35b816000fdfea26469706673582212206546d9db02a97fa8bfefacaf3ab76fd3a296019b999bd3e3b654a632a8d99eb764736f6c634300060c0033636f6e7374727563746f723a205f70726f746f636f6c466565526573657276654c6962206e6f7420636f6d70617469626c65';
}

// prettier-ignore
export const ProtocolFeeReserveProxy = contract<ProtocolFeeReserveProxy, ProtocolFeeReserveProxyArgs>(ProtocolFeeReserveProxyBytecode)`
  constructor(bytes _constructData, address _protocolFeeReserveLib)
`;
