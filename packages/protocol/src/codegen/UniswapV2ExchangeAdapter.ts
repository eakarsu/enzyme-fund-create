/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type UniswapV2ExchangeAdapterArgs = [_integrationManager: AddressLike, _router: AddressLike];

// prettier-ignore
export interface UniswapV2ExchangeAdapter extends Contract<UniswapV2ExchangeAdapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  LEND_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  REDEEM_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  STAKE_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  TAKE_ORDER_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  UNSTAKE_SELECTOR: Call<() => string, UniswapV2ExchangeAdapter>
  getIntegrationManager: Call<() => string, UniswapV2ExchangeAdapter>
  getUniswapV2Router2: Call<() => string, UniswapV2ExchangeAdapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, UniswapV2ExchangeAdapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, arg2: BytesLike) => void, UniswapV2ExchangeAdapter>
}

let UniswapV2ExchangeAdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  UniswapV2ExchangeAdapterBytecode =
    '0x60c060405234801561001057600080fd5b5060405161115d38038061115d8339818101604052604081101561003357600080fd5b5080516020909101516001600160601b0319606092831b8116608052911b1660a05260805160601c60a05160601c6110d061008d6000398061060e528061074e52806107755250806103df528061063252506110d06000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063863e5ad011610071578063863e5ad0146101ce578063b23228cf146101d6578063c54efee5146101de578063d1ded408146103a0578063e7c45690146103c4578063f7d882b5146103cc576100b4565b806303e38a2b146100b9578063080456c114610189578063131461c0146101ae578063257cb1a3146101b65780633ffc1591146101be57806340da225d146101c6575b600080fd5b610187600480360360608110156100cf57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156100f957600080fd5b82018360208201111561010b57600080fd5b803590602001918460018302840111600160201b8311171561012c57600080fd5b919390929091602081019035600160201b81111561014957600080fd5b82018360208201111561015b57600080fd5b803590602001918460018302840111600160201b8311171561017c57600080fd5b5090925090506103d4565b005b61019161049b565b604080516001600160e01b03199092168252519081900360200190f35b6101916104bf565b6101916104e3565b610191610507565b61019161052b565b61019161054f565b610191610573565b61026b600480360360608110156101f457600080fd5b6001600160a01b03823516916001600160e01b031960208201351691810190606081016040820135600160201b81111561022d57600080fd5b82018360208201111561023f57600080fd5b803590602001918460018302840111600160201b8311171561026057600080fd5b509092509050610597565b6040518086600281111561027b57fe5b815260200180602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b838110156102c85781810151838201526020016102b0565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156103075781810151838201526020016102ef565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561034657818101518382015260200161032e565b50505050905001858103825286818151815260200191508051906020019060200280838360005b8381101561038557818101518382015260200161036d565b50505050905001995050505050505050505060405180910390f35b6103a861060c565b604080516001600160a01b039092168252519081900360200190f35b6103a8610630565b610191610654565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461043b5760405162461bcd60e51b8152600401808060200182810382526032815260200180610fb56032913960400191505060405180910390fd5b606060008061047f87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061067892505050565b92509250925061049188838386610734565b5050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b600060608080806001600160e01b031988166303e38a2b60e01b146105ed5760405162461bcd60e51b81526004018080602001828103825260278152602001806110746027913960400191505060405180910390fd5b6105f78787610915565b94509450945094509450945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b606060008083806020019051606081101561069257600080fd5b8101908080516040519392919084600160201b8211156106b157600080fd5b9083019060208201858111156106c657600080fd5b82518660208202830111600160201b821117156106e257600080fd5b82525081516020918201928201910280838360005b8381101561070f5781810151838201526020016106f7565b5050505091909101604090815260208301519201519499919850939650945050505050565b6107738160008151811061074457fe5b60200260200101517f000000000000000000000000000000000000000000000000000000000000000085610ae1565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166338ed1739848484886107ae610b9f565b6040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b8381101561081e578181015183820152602001610806565b505050509050019650505050505050600060405180830381600087803b15801561084757600080fd5b505af115801561085b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561088457600080fd5b8101908080516040519392919084600160201b8211156108a357600080fd5b9083019060208201858111156108b857600080fd5b82518660208202830111600160201b821117156108d457600080fd5b82525081516020918201928201910280838360005b838110156109015781810151838201526020016108e9565b505050509050016040525050505050505050565b600060608060608060606000806109618a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061067892505050565b9250925092506002835110156109a85760405162461bcd60e51b815260040180806020018281038252602d815260200180610fe7602d913960400191505060405180910390fd5b6040805160018082528183019092529060208083019080368337019050509650826000815181106109d557fe5b6020026020010151876000815181106109ea57fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505095508186600081518110610a2e57fe5b60209081029190910101526040805160018082528183019092529081602001602082028036833701905050945082600184510381518110610a6b57fe5b602002602001015185600081518110610a8057fe5b6001600160a01b03929092166020928302919091018201526040805160018082528183019092529182810190803683370190505093508084600081518110610ac457fe5b602002602001018181525050600297505050509295509295909350565b60408051636eb1769f60e11b81523060048201526001600160a01b038481166024830152915160009286169163dd62ed3e916044808301926020929190829003018186803b158015610b3257600080fd5b505afa158015610b46573d6000803e3d6000fd5b505050506040513d6020811015610b5c57600080fd5b5051905081811015610b99578015610b8357610b836001600160a01b038516846000610ba6565b610b996001600160a01b03851684600019610ba6565b50505050565b6001420190565b801580610c2c575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015610bfe57600080fd5b505afa158015610c12573d6000803e3d6000fd5b505050506040513d6020811015610c2857600080fd5b5051155b610c675760405162461bcd60e51b815260040180806020018281038252603681526020018061103e6036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610cb9908490610cbe565b505050565b6060610d13826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610d6f9092919063ffffffff16565b805190915015610cb957808060200190516020811015610d3257600080fd5b5051610cb95760405162461bcd60e51b815260040180806020018281038252602a815260200180611014602a913960400191505060405180910390fd5b6060610d7e8484600085610d88565b90505b9392505050565b606082471015610dc95760405162461bcd60e51b8152600401808060200182810382526026815260200180610f8f6026913960400191505060405180910390fd5b610dd285610ee4565b610e23576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310610e625780518252601f199092019160209182019101610e43565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610ec4576040519150601f19603f3d011682016040523d82523d6000602084013e610ec9565b606091505b5091509150610ed9828286610eea565b979650505050505050565b3b151590565b60608315610ef9575081610d81565b825115610f095782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f53578181015183820152602001610f3b565b50505050905090810190601f168015610f805780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2063616c6c20746869732066756e6374696f6e5f5f7061727365417373657473466f7254616b654f726465723a205f70617468206d757374206265203e3d20325361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e63657061727365417373657473466f72416374696f6e3a205f73656c6563746f7220696e76616c6964a264697066735822122051f2c458046794b8a996587ff50246f6ed2433e513ead58f72f038de1849e3a164736f6c634300060c0033';
}

// prettier-ignore
export const UniswapV2ExchangeAdapter = contract<UniswapV2ExchangeAdapter, UniswapV2ExchangeAdapterArgs>(UniswapV2ExchangeAdapterBytecode)`
  constructor(address _integrationManager, address _router)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function getUniswapV2Router2() view returns (address router_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes)
`;
