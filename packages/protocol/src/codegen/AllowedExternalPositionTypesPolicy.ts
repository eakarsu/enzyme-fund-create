/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type AllowedExternalPositionTypesPolicyArgs = [_policyManager: AddressLike];

// prettier-ignore
export interface AllowedExternalPositionTypesPolicy extends Contract<AllowedExternalPositionTypesPolicy> {
  activateForFund: Send<(_comptrollerProxy: AddressLike) => void, AllowedExternalPositionTypesPolicy>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _encodedSettings: BytesLike) => void, AllowedExternalPositionTypesPolicy>
  canDisable: Call<() => boolean, AllowedExternalPositionTypesPolicy>
  externalPositionTypeIsAllowedForFund: Call<(_comptrollerProxy: AddressLike, _externalPositionTypeId: BigNumberish) => boolean, AllowedExternalPositionTypesPolicy>
  getPolicyManager: Call<() => string, AllowedExternalPositionTypesPolicy>
  identifier: Call<() => string, AllowedExternalPositionTypesPolicy>
  implementedHooks: Call<() => BigNumber[], AllowedExternalPositionTypesPolicy>
  updateFundSettings: Send<(arg0: AddressLike, arg1: BytesLike) => void, AllowedExternalPositionTypesPolicy>
  validateRule: Send<(_comptrollerProxy: AddressLike, _hook: BigNumberish, _encodedArgs: BytesLike) => boolean, AllowedExternalPositionTypesPolicy>
}

let AllowedExternalPositionTypesPolicyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  AllowedExternalPositionTypesPolicyBytecode =
    '0x60a060405234801561001057600080fd5b50604051610c96380380610c968339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b0316610c25610071600039806103c5528061078d5280610a325250610c256000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806373f8d40e1161006657806373f8d40e146102385780637998a1c414610264578063cbf54bb2146102e1578063ceb9a0ad14610339578063d44ad6cb1461035f57610093565b80630d4d7510146100985780630f5f6b4f146101185780631ef9257814610196578063579be718146101b2575b600080fd5b610116600480360360408110156100ae57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156100d857600080fd5b8201836020820111156100ea57600080fd5b803590602001918460018302840111600160201b8311171561010b57600080fd5b509092509050610383565b005b6101166004803603604081101561012e57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561015857600080fd5b82018360208201111561016a57600080fd5b803590602001918460018302840111600160201b8311171561018b57600080fd5b5090925090506103ba565b61019e610574565b604080519115158252519081900360200190f35b61019e600480360360608110156101c857600080fd5b6001600160a01b038235169160ff60208201351691810190606081016040820135600160201b8111156101fa57600080fd5b82018360208201111561020c57600080fd5b803590602001918460018302840111600160201b8311171561022d57600080fd5b509092509050610579565b61019e6004803603604081101561024e57600080fd5b506001600160a01b03813516906020013561069a565b61026c6106c3565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102a657818101518382015260200161028e565b50505050905090810190601f1680156102d35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e96106fa565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561032557818101518382015260200161030d565b505050509050019250505060405180910390f35b6101166004803603602081101561034f57600080fd5b50356001600160a01b0316610782565b610367610a30565b604080516001600160a01b039092168252519081900360200190f35b60405162461bcd60e51b8152600401808060200182810382526037815260200180610b606037913960400191505060405180910390fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104215760405162461bcd60e51b8152600401808060200182810382526029815260200180610b976029913960400191505060405180910390fd5b60608282602081101561043357600080fd5b810190602081018135600160201b81111561044d57600080fd5b82018360208201111561045f57600080fd5b803590602001918460208302840111600160201b8311171561048057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092018290525093975092955050505050505b815181101561056d576001600160a01b03851660009081526020819052604081208351600192908590859081106104ee57fe5b6020026020010151815260200190815260200160002060006101000a81548160ff02191690831515021790555081818151811061052757fe5b6020026020010151856001600160a01b03167f1a00471f7050c952312b148cb5d6f7bfab7e1f6909dcd0630a99e304dc8403fb60405160405180910390a36001016104bb565b5050505050565b600090565b600080600685600981111561058a57fe5b14156105d9576105cf84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5492505050565b5091506106869050565b600061061a85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b3492505050565b915050806001600160a01b03166312bc0a446040518163ffffffff1660e01b815260040160206040518083038186803b15801561065657600080fd5b505afa15801561066a573d6000803e3d6000fd5b505050506040513d602081101561068057600080fd5b50519150505b610690868261069a565b9695505050505050565b6001600160a01b0391909116600090815260208181526040808320938352929052205460ff1690565b60408051808201909152601f81527f414c4c4f5745445f45585445524e414c5f504f534954494f4e5f545950455300602082015290565b604080516002808252606080830184529260208301908036833701905050905060068160008151811061072957fe5b6020026020010190600981111561073c57fe5b9081600981111561074957fe5b8152505060098160018151811061075c57fe5b6020026020010190600981111561076f57fe5b9081600981111561077c57fe5b90525090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107e95760405162461bcd60e51b8152600401808060200182810382526029815260200180610b976029913960400191505060405180910390fd5b6060816001600160a01b031663c98091876040518163ffffffff1660e01b815260040160206040518083038186803b15801561082457600080fd5b505afa158015610838573d6000803e3d6000fd5b505050506040513d602081101561084e57600080fd5b50516040805163b8b7f14760e01b815290516001600160a01b039092169163b8b7f14791600480820192600092909190829003018186803b15801561089257600080fd5b505afa1580156108a6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156108cf57600080fd5b8101908080516040519392919084600160201b8211156108ee57600080fd5b90830190602082018581111561090357600080fd5b82518660208202830111600160201b8211171561091f57600080fd5b82525081516020918201928201910280838360005b8381101561094c578181015183820152602001610934565b50505050905001604052505050905060005b8151811015610a2b576109e88383838151811061097757fe5b60200260200101516001600160a01b03166312bc0a446040518163ffffffff1660e01b815260040160206040518083038186803b1580156109b757600080fd5b505afa1580156109cb573d6000803e3d6000fd5b505050506040513d60208110156109e157600080fd5b505161069a565b610a235760405162461bcd60e51b8152600401808060200182810382526030815260200180610bc06030913960400191505060405180910390fd5b60010161095e565b505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000806060838060200190516060811015610a6e57600080fd5b81516020830151604080850180519151939592948301929184600160201b821115610a9857600080fd5b908301906020820185811115610aad57600080fd5b8251600160201b811182820188101715610ac657600080fd5b82525081516020918201929091019080838360005b83811015610af3578181015183820152602001610adb565b50505050905090810190601f168015610b205780820380516001836020036101000a031916815260200191505b506040525050509250925092509193909250565b600080828060200190516040811015610b4c57600080fd5b508051602090910151909250905091509156fe75706461746546756e6453657474696e67733a2055706461746573206e6f7420616c6c6f77656420666f72207468697320706f6c6963794f6e6c792074686520506f6c6963794d616e616765722063616e206d616b6520746869732063616c6c6163746976617465466f7246756e643a20446973616c6c6f7765642045787465726e616c506f736974696f6e54797065a264697066735822122043585d9547877d63b00f6c41fdfe9d19060da4cb3095ec4fa11c0267996c751464736f6c634300060c0033';
}

// prettier-ignore
export const AllowedExternalPositionTypesPolicy = contract<AllowedExternalPositionTypesPolicy, AllowedExternalPositionTypesPolicyArgs>(AllowedExternalPositionTypesPolicyBytecode)`
  constructor(address _policyManager)
  event AllowedExternalPositionTypeAddedForFund(address indexed comptrollerProxy, uint256 indexed externalPositionTypeId)
  function activateForFund(address _comptrollerProxy)
  function addFundSettings(address _comptrollerProxy, bytes _encodedSettings)
  function canDisable() pure returns (bool canDisable_)
  function externalPositionTypeIsAllowedForFund(address _comptrollerProxy, uint256 _externalPositionTypeId) view returns (bool isAllowed_)
  function getPolicyManager() view returns (address policyManager_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() pure returns (uint8[] implementedHooks_)
  function updateFundSettings(address, bytes)
  function validateRule(address _comptrollerProxy, uint8 _hook, bytes _encodedArgs) returns (bool isValid_)
`;