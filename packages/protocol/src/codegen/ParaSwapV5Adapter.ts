/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type ParaSwapV5AdapterArgs = [
  _integrationManager: AddressLike,
  _augustusSwapper: AddressLike,
  _tokenTransferProxy: AddressLike,
];

// prettier-ignore
export interface ParaSwapV5Adapter extends Contract<ParaSwapV5Adapter> {
  CLAIM_REWARDS_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  LEND_AND_STAKE_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  LEND_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  REDEEM_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  STAKE_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  TAKE_ORDER_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  UNSTAKE_AND_REDEEM_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  UNSTAKE_SELECTOR: Call<() => string, ParaSwapV5Adapter>
  getIntegrationManager: Call<() => string, ParaSwapV5Adapter>
  getParaSwapV5AugustusSwapper: Call<() => string, ParaSwapV5Adapter>
  getParaSwapV5TokenTransferProxy: Call<() => string, ParaSwapV5Adapter>
  parseAssetsForAction: Call<(arg0: AddressLike, _selector: BytesLike, _actionData: BytesLike) => { spendAssetsHandleType_: BigNumber, spendAssets_: string[], spendAssetAmounts_: BigNumber[], incomingAssets_: string[], minIncomingAssetAmounts_: BigNumber[] }, ParaSwapV5Adapter>
  takeOrder: Send<(_vaultProxy: AddressLike, _actionData: BytesLike, arg2: BytesLike) => void, ParaSwapV5Adapter>
}

let ParaSwapV5AdapterBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  ParaSwapV5AdapterBytecode =
    '0x60e06040523480156200001157600080fd5b5060405162001a5738038062001a5783398101604081905262000034916200006f565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000ef565b80516200006981620000d5565b92915050565b6000806000606084860312156200008557600080fd5b60006200009386866200005c565b9350506020620000a6868287016200005c565b9250506040620000b9868287016200005c565b9150509250925092565b60006001600160a01b03821662000069565b620000e081620000c3565b8114620000ec57600080fd5b50565b60805160601c60a05160601c60c05160601c61192d6200012a6000398061028352508061031352508061019352806104fd525061192d6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340da225d1161008c578063b23228cf11610066578063b23228cf1461014c578063c54efee514610154578063e7c4569014610178578063f7d882b514610180576100cf565b806340da225d14610134578063863e5ad01461013c57806391bc27dc14610144576100cf565b806303e38a2b146100d4578063080456c1146100e9578063131461c014610107578063257cb1a31461010f5780632c428679146101175780633ffc15911461012c575b600080fd5b6100e76100e2366004610e89565b610188565b005b6100f1610215565b6040516100fe91906116aa565b60405180910390f35b6100f1610239565b6100f161025d565b61011f610281565b6040516100fe9190611666565b6100f16102a5565b6100f16102c9565b6100f16102ed565b61011f610311565b6100f1610335565b610167610162366004610e21565b610359565b6040516100fe9594939291906116b8565b61011f6104fb565b6100f161051f565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101d95760405162461bcd60e51b81526004016101d090611735565b60405180910390fd5b600080600080600060606101ed8a8a610543565b955095509550955095509550610208848488888f878761056c565b5050505050505050505050565b7f8334eb99be0145865eba9889fca2ee920288090caefff4cc776038e20ad9259a81565b7f29fa046e79524c3c5ac4c01df692c35e217802b2b13b21121b76cf0ef02b138c81565b7f099f75155f0e997bf83a7993a71d5e7e7540bd386fe1e84643a09ce6b412521981565b7f000000000000000000000000000000000000000000000000000000000000000090565b7ffa7dd04da627f433da73c4355ead9c75682a67a8fc84d3f6170ef0922f402d2481565b7fb9dfbaccbe5cd2a84fdcf1d15f23ef25d23086f5afbaa99516065ed4a5bbc7a381565b7f03e38a2bd7063d45c897edeafc330e71657502dd86434d3c37a489caf116af6981565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f68e30677f607df46e87da13e15b637784cfa62374b653f35ab43d10361a2f83081565b600060608080806001600160e01b031988166303e38a2b60e01b146103905760405162461bcd60e51b81526004016101d090611775565b600080600060606103a18b8b610543565b95505094509450509350600167ffffffffffffffff811180156103c357600080fd5b506040519080825280602002602001820160405280156103ed578160200160208202803683370190505b50975082886000815181106103fe57fe5b6001600160a01b0392909216602092830291909101820152604080516001808252818301909252918281019080368337019050509650818760008151811061044257fe5b6020908102919091010152604080516001808252818301909252908160200160208202803683370190505095508060018251038151811061047f57fe5b6020026020010151600001518660008151811061049857fe5b6001600160a01b039290921660209283029190910182015260408051600180825281830190925291828101908036833701905050945083856000815181106104dc57fe5b6020026020010181815250506002985050505050945094509450945094565b7f000000000000000000000000000000000000000000000000000000000000000090565b7fc29fa9dde84204c2908778afd0613d802d31cf046179b88f6d2b4a4e507ea2d581565b600080808080606061055787890189610f54565b949d939c50919a509850965090945092505050565b61057e87610578610281565b8861069a565b610586610a07565b604051806101600160405280896001600160a01b03168152602001888152602001878152602001868152602001856001600160a01b0316815260200183815260200160006001600160a01b0316815260200160008152602001604051806020016040528060008152508152602001428152602001846001600160801b0319168152509050610612610311565b6001600160a01b0316632478ba3e826040518263ffffffff1660e01b815260040161063d9190611785565b602060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068f9190610f36565b505050505050505050565b604051636eb1769f60e11b81526000906001600160a01b0385169063dd62ed3e906106cb9030908790600401611674565b60206040518083038186803b1580156106e357600080fd5b505afa1580156106f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071b9190610f36565b905081811015610756578015610740576107406001600160a01b03851684600061075c565b6107566001600160a01b0385168460001961075c565b50505050565b8015806107e45750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e906107929030908690600401611674565b60206040518083038186803b1580156107aa57600080fd5b505afa1580156107be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e29190610f36565b155b6108005760405162461bcd60e51b81526004016101d090611765565b6108568363095ea7b360e01b848460405160240161081f92919061168f565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261085b565b505050565b60606108b0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108ea9092919063ffffffff16565b80519091501561085657808060200190518101906108ce9190610f10565b6108565760405162461bcd60e51b81526004016101d090611755565b60606108f98484600085610903565b90505b9392505050565b6060824710156109255760405162461bcd60e51b81526004016101d090611725565b61092e856109c4565b61094a5760405162461bcd60e51b81526004016101d090611745565b60006060866001600160a01b03168587604051610967919061165a565b60006040518083038185875af1925050503d80600081146109a4576040519150601f19603f3d011682016040523d82523d6000602084013e6109a9565b606091505b50915091506109b98282866109ce565b979650505050505050565b803b15155b919050565b606083156109dd5750816108fc565b8251156109ed5782518084602001fd5b8160405162461bcd60e51b81526004016101d09190611714565b60405180610160016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016060815260200160006001600160a01b0316815260200160008152602001606081526020016000815260200160006001600160801b03191681525090565b8035610a91816118bf565b92915050565b600082601f830112610aa857600080fd5b8135610abb610ab6826117bd565b611796565b81815260209384019390925082018360005b83811015610af95781358601610ae38882610c76565b8452506020928301929190910190600101610acd565b5050505092915050565b600082601f830112610b1457600080fd5b8135610b22610ab6826117bd565b81815260209384019390925082018360005b83811015610af95781358601610b4a8882610cfd565b8452506020928301929190910190600101610b34565b600082601f830112610b7157600080fd5b8135610b7f610ab6826117bd565b81815260209384019390925082018360005b83811015610af95781358601610ba78882610d70565b8452506020928301929190910190600101610b91565b8051610a91816118d3565b8035610a91816118dc565b8035610a91816118e5565b60008083601f840112610bf057600080fd5b50813567ffffffffffffffff811115610c0857600080fd5b602083019150836001820283011115610c2057600080fd5b9250929050565b600082601f830112610c3857600080fd5b8135610c46610ab6826117de565b91508082526020830160208301858383011115610c6257600080fd5b610c6d838284611870565b50505092915050565b600060808284031215610c8857600080fd5b610c926080611796565b90506000610ca08484610a86565b8252506020610cb184848301610e0b565b6020830152506040610cc584828501610e0b565b604083015250606082013567ffffffffffffffff811115610ce557600080fd5b610cf184828501610b60565b60608301525092915050565b600060608284031215610d0f57600080fd5b610d196060611796565b90506000610d278484610a86565b8252506020610d3884848301610e0b565b602083015250604082013567ffffffffffffffff811115610d5857600080fd5b610d6484828501610a97565b60408301525092915050565b600060a08284031215610d8257600080fd5b610d8c60a0611796565b90506000610d9a8484610e0b565b8252506020610dab84848301610a86565b6020830152506040610dbf84828501610e0b565b604083015250606082013567ffffffffffffffff811115610ddf57600080fd5b610deb84828501610c27565b6060830152506080610dff84828501610e0b565b60808301525092915050565b8035610a91816118ee565b8051610a91816118ee565b60008060008060608587031215610e3757600080fd5b6000610e438787610a86565b9450506020610e5487828801610bd3565b935050604085013567ffffffffffffffff811115610e7157600080fd5b610e7d87828801610bde565b95989497509550505050565b600080600080600060608688031215610ea157600080fd5b6000610ead8888610a86565b955050602086013567ffffffffffffffff811115610eca57600080fd5b610ed688828901610bde565b9450945050604086013567ffffffffffffffff811115610ef557600080fd5b610f0188828901610bde565b92509250509295509295909350565b600060208284031215610f2257600080fd5b6000610f2e8484610bbd565b949350505050565b600060208284031215610f4857600080fd5b6000610f2e8484610e16565b60008060008060008060c08789031215610f6d57600080fd5b6000610f798989610e0b565b9650506020610f8a89828a01610e0b565b9550506040610f9b89828a01610a86565b9450506060610fac89828a01610e0b565b9350506080610fbd89828a01610bc8565b92505060a087013567ffffffffffffffff811115610fda57600080fd5b610fe689828a01610b03565b9150509295509295509295565b6000610fff8383611037565b505060200190565b60006108fc8383611461565b60006108fc83836114bc565b60006108fc83836114fb565b6000610fff8383611651565b61104081611819565b82525050565b60006110518261180c565b61105b8185611810565b935061106683611806565b8060005b8381101561109457815161107e8882610ff3565b975061108983611806565b92505060010161106a565b509495945050505050565b60006110aa8261180c565b6110b48185611810565b9350836020820285016110c685611806565b8060005b8581101561110057848403895281516110e38582611007565b94506110ee83611806565b60209a909a01999250506001016110ca565b5091979650505050505050565b60006111188261180c565b6111228185611810565b93508360208202850161113485611806565b8060005b8581101561110057848403895281516111518582611013565b945061115c83611806565b60209a909a0199925050600101611138565b60006111798261180c565b6111838185611810565b93508360208202850161119585611806565b8060005b8581101561110057848403895281516111b2858261101f565b94506111bd83611806565b60209a909a0199925050600101611199565b60006111da8261180c565b6111e48185611810565b93506111ef83611806565b8060005b83811015611094578151611207888261102b565b975061121283611806565b9250506001016111f3565b61104081611829565b6110408161183f565b600061123a8261180c565b6112448185611810565b935061125481856020860161187c565b61125d816118a8565b9093019392505050565b60006112728261180c565b61127c81856109c9565b935061128c81856020860161187c565b9290920192915050565b61104081611865565b60006112ac602683611810565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f8152651c8818d85b1b60d21b602082015260400192915050565b60006112f4603283611810565b7f4f6e6c792074686520496e746567726174696f6e4d616e616765722063616e2081527131b0b636103a3434b990333ab731ba34b7b760711b602082015260400192915050565b6000611348601d83611810565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000815260200192915050565b6000611381602a83611810565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e8152691bdd081cdd58d8d9595960b21b602082015260400192915050565b60006113cd603683611810565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f81527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b602082015260400192915050565b6000611425602783611810565b7f7061727365417373657473466f72416374696f6e3a205f73656c6563746f72208152661a5b9d985b1a5960ca1b602082015260400192915050565b805160009060808401906114758582611037565b5060208301516114886020860182611651565b50604083015161149b6040860182611651565b50606083015184820360608601526114b3828261116e565b95945050505050565b805160009060608401906114d08582611037565b5060208301516114e36020860182611651565b50604083015184820360408601526114b3828261109f565b805160009060a084019061150f8582611651565b5060208301516115226020860182611037565b5060408301516115356040860182611651565b506060830151848203606086015261154d828261122f565b91505060808301516115626080860182611651565b509392505050565b805160009061016084019061157f8582611037565b5060208301516115926020860182611651565b5060408301516115a56040860182611651565b5060608301516115b86060860182611651565b5060808301516115cb6080860182611037565b5060a083015184820360a08601526115e3828261110d565b91505060c08301516115f860c0860182611037565b5060e083015161160b60e0860182611651565b50610100830151848203610100860152611625828261122f565b91505061012083015161163c610120860182611651565b5061014083015161156261014086018261121d565b61104081611862565b60006108fc8284611267565b60208101610a918284611037565b604081016116828285611037565b6108fc6020830184611037565b6040810161169d8285611037565b6108fc6020830184611651565b60208101610a918284611226565b60a081016116c68288611296565b81810360208301526116d88187611046565b905081810360408301526116ec81866111cf565b905081810360608301526117008185611046565b905081810360808301526109b981846111cf565b602080825281016108fc818461122f565b60208082528101610a918161129f565b60208082528101610a91816112e7565b60208082528101610a918161133b565b60208082528101610a9181611374565b60208082528101610a91816113c0565b60208082528101610a9181611418565b602080825281016108fc818461156a565b60405181810167ffffffffffffffff811182821017156117b557600080fd5b604052919050565b600067ffffffffffffffff8211156117d457600080fd5b5060209081020190565b600067ffffffffffffffff8211156117f557600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b6000610a9182611856565b151590565b6fffffffffffffffffffffffffffffffff191690565b6001600160e01b03191690565b806109c9816118b2565b6001600160a01b031690565b90565b6000610a918261184c565b82818337506000910152565b60005b8381101561189757818101518382015260200161187f565b838111156107565750506000910152565b601f01601f191690565b600381106118bc57fe5b50565b6118c881611819565b81146118bc57600080fd5b6118c881611824565b6118c881611829565b6118c88161183f565b6118c88161186256fea26469706673582212207762bff2e1118336e9aa9fa0658330717a7734d4e05b8fab5f48af83335a541364736f6c634300060c0033';
}

// prettier-ignore
export const ParaSwapV5Adapter = contract<ParaSwapV5Adapter, ParaSwapV5AdapterArgs>(ParaSwapV5AdapterBytecode)`
  constructor(address _integrationManager, address _augustusSwapper, address _tokenTransferProxy)
  function CLAIM_REWARDS_SELECTOR() view returns (bytes4)
  function LEND_AND_STAKE_SELECTOR() view returns (bytes4)
  function LEND_SELECTOR() view returns (bytes4)
  function REDEEM_SELECTOR() view returns (bytes4)
  function STAKE_SELECTOR() view returns (bytes4)
  function TAKE_ORDER_SELECTOR() view returns (bytes4)
  function UNSTAKE_AND_REDEEM_SELECTOR() view returns (bytes4)
  function UNSTAKE_SELECTOR() view returns (bytes4)
  function getIntegrationManager() view returns (address integrationManager_)
  function getParaSwapV5AugustusSwapper() view returns (address augustusSwapper_)
  function getParaSwapV5TokenTransferProxy() view returns (address tokenTransferProxy_)
  function parseAssetsForAction(address, bytes4 _selector, bytes _actionData) view returns (uint8 spendAssetsHandleType_, address[] spendAssets_, uint256[] spendAssetAmounts_, address[] incomingAssets_, uint256[] minIncomingAssetAmounts_)
  function takeOrder(address _vaultProxy, bytes _actionData, bytes)
`;
