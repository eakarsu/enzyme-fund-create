/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type UnpermissionedActionsWrapperArgs = [_feeManager: AddressLike];

// prettier-ignore
export interface UnpermissionedActionsWrapper extends Contract<UnpermissionedActionsWrapper> {
  getContinuousFeesForFund: Call<(_comptrollerProxy: AddressLike) => string[], UnpermissionedActionsWrapper>
  getFeeManager: Call<() => string, UnpermissionedActionsWrapper>
  invokeContinuousFeeHookAndPayoutSharesOutstandingForFund: Send<(_comptrollerProxy: AddressLike, _fees: AddressLike[]) => void, UnpermissionedActionsWrapper>
}

let UnpermissionedActionsWrapperBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  UnpermissionedActionsWrapperBytecode =
    '0x60a060405234801561001057600080fd5b506040516107043803806107048339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031661069d61006760003980610645525061069d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630efe688014610046578063ace7cc9c146100bc578063f2d638261461013e575b600080fd5b61006c6004803603602081101561005c57600080fd5b50356001600160a01b0316610162565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156100a8578181015183820152602001610090565b505050509050019250505060405180910390f35b61013c600480360360408110156100d257600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100fd57600080fd5b82018360208201111561010f57600080fd5b8035906020019184602083028401116401000000008311171561013157600080fd5b509092509050610485565b005b610146610643565b604080516001600160a01b039092168252519081900360200190f35b6060600061016e610643565b90506060816001600160a01b031663a9f3b42f856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060006040518083038186803b1580156101bf57600080fd5b505afa1580156101d3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101fc57600080fd5b810190808051604051939291908464010000000082111561021c57600080fd5b90830190602082018581111561023157600080fd5b825186602082028301116401000000008211171561024e57600080fd5b82525081516020918201928201910280838360005b8381101561027b578181015183820152602001610263565b50505050905001604052505050905060006060825167ffffffffffffffff811180156102a657600080fd5b506040519080825280602002602001820160405280156102d0578160200160208202803683370190505b50905060005b83518110156103a75760008482815181106102ed57fe5b60200260200101516001600160a01b031663320f0ddd60006040518263ffffffff1660e01b81526004018082600381111561032457fe5b8152602001915050604080518083038186803b15801561034357600080fd5b505afa158015610357573d6000803e3d6000fd5b505050506040513d604081101561036d57600080fd5b50519050801561039e578380600101945050600183838151811061038d57fe5b911515602092830291909101909101525b506001016102d6565b50816103c85750506040805160008152602081019091529250610480915050565b8167ffffffffffffffff811180156103df57600080fd5b50604051908082528060200260200182016040528015610409578160200160208202803683370190505b5094506000805b84518110156104795782818151811061042557fe5b6020026020010151156104715784818151811061043e57fe5b602002602001015187838151811061045257fe5b6001600160a01b03909216602092830291909101909101526001909101905b600101610410565b5050505050505b919050565b826001600160a01b0381166339bf70d161049d610643565b604080516001600160e01b031960e085901b1681526001600160a01b0390921660048301526000602483018190526060604484015260648301819052905160a48084019382900301818387803b1580156104f657600080fd5b505af115801561050a573d6000803e3d6000fd5b50505050806001600160a01b03166339bf70d1610525610643565b6001868660405160200180806020018281038252848482818152602001925060200280828437600081840152601f19601f82011690508083019250505093505050506040516020818303038152906040526040518463ffffffff1660e01b815260040180846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105d75781810151838201526020016105bf565b50505050905090810190601f1680156106045780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15801561062557600080fd5b505af1158015610639573d6000803e3d6000fd5b5050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000009056fea2646970667358221220e2bb1221196aec49eca3dd56f7015f51c50a777fa3fe3c50b4d2a8c64718a60464736f6c634300060c0033';
}

// prettier-ignore
export const UnpermissionedActionsWrapper = contract<UnpermissionedActionsWrapper, UnpermissionedActionsWrapperArgs>(UnpermissionedActionsWrapperBytecode)`
  constructor(address _feeManager)
  function getContinuousFeesForFund(address _comptrollerProxy) view returns (address[] continuousFees_)
  function getFeeManager() view returns (address feeManager_)
  function invokeContinuousFeeHookAndPayoutSharesOutstandingForFund(address _comptrollerProxy, address[] _fees)
`;
