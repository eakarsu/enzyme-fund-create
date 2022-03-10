/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type VaultProxyArgs = [_constructData: BytesLike, _vaultLib: AddressLike];

// prettier-ignore
export interface VaultProxy extends Contract<VaultProxy> {
  // No external functions
}

let VaultProxyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  VaultProxyBytecode =
    '0x608060405234801561001057600080fd5b506040516103c13803806103c18339818101604052604081101561003357600080fd5b810190808051604051939291908464010000000082111561005357600080fd5b90830190602082018581111561006857600080fd5b825164010000000081118282018810171561008257600080fd5b82525081516020918201929091019080838360005b838110156100af578181015183820152602001610097565b50505050905090810190601f1680156100dc5780820380516001836020036101000a031916815260200191505b5060408181526020928301516352d1902d60e01b835290519094506001600160a01b03851693506352d1902d92600480840193919291829003018186803b15801561012657600080fd5b505afa15801561013a573d6000803e3d6000fd5b505050506040513d602081101561015057600080fd5b50517f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5146101af5760405162461bcd60e51b815260040180806020018281038252602581526020018061039c6025913960400191505060405180910390fd5b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5560006060826001600160a01b0316846040518082805190602001908083835b602083106102105780518252601f1990920191602091820191016101f1565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610270576040519150601f19603f3d011682016040523d82523d6000602084013e610275565b606091505b50915091508181906103055760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156102ca5781810151838201526020016102b2565b50505050905090810190601f1680156102f75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050506084806103186000396000f3fe60806040527f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc543660008037600080366000846127105a03f43d806000803e818015604957816000f35b816000fdfea2646970667358221220bbf55cdae3dc46d2a5e7b99766dd55ccf780257e97c67bd8075873f6748a939264736f6c634300060c0033636f6e7374727563746f723a205f7661756c744c6962206e6f7420636f6d70617469626c65';
}

// prettier-ignore
export const VaultProxy = contract<VaultProxy, VaultProxyArgs>(VaultProxyBytecode)`
  constructor(bytes _constructData, address _vaultLib)
`;