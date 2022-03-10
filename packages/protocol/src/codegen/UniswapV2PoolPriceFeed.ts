/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type UniswapV2PoolPriceFeedArgs = [
  _fundDeployer: AddressLike,
  _valueInterpreter: AddressLike,
  _factory: AddressLike,
];

// prettier-ignore
export interface UniswapV2PoolPriceFeed extends Contract<UniswapV2PoolPriceFeed> {
  addPoolTokens: Send<(_poolTokens: AddressLike[]) => void, UniswapV2PoolPriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, UniswapV2PoolPriceFeed>
  getFactory: Call<() => string, UniswapV2PoolPriceFeed>
  getFundDeployer: Call<() => string, UniswapV2PoolPriceFeed>
  getOwner: Call<() => string, UniswapV2PoolPriceFeed>
  getPoolTokenInfo: Call<(_poolToken: AddressLike) => { token0: string, token1: string, token0Decimals: BigNumber, token1Decimals: BigNumber }, UniswapV2PoolPriceFeed>
  getPoolTokenUnderlyings: Call<(_poolToken: AddressLike) => { token0_: string, token1_: string }, UniswapV2PoolPriceFeed>
  getValueInterpreter: Call<() => string, UniswapV2PoolPriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, UniswapV2PoolPriceFeed>
}

let UniswapV2PoolPriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  UniswapV2PoolPriceFeedBytecode =
    '0x60e06040523480156200001157600080fd5b5060405162001e2a38038062001e2a83398101604081905262000034916200006e565b6001600160601b0319606093841b811660805290831b811660a052911b1660c052620000ee565b80516200006881620000d4565b92915050565b6000806000606084860312156200008457600080fd5b60006200009286866200005b565b9350506020620000a5868287016200005b565b9250506040620000b8868287016200005b565b9150509250925092565b60006001600160a01b03821662000068565b620000df81620000c2565b8114620000eb57600080fd5b50565b60805160601c60a05160601c60c05160601c611ce362000147600039806108445280610a005280610c435280610d005280610db0525080610783528061086852508061088e528061094252806109695250611ce36000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063875fb4b311610066578063875fb4b31461011857806388cc58e41461012d578063893d20e81461013557806397c0ac871461013d5780639be918e61461014557610093565b806301b453e51461009857806332db4ed5146100c257806367e0e076146100d7578063727212f6146100f7575b600080fd5b6100ab6100a6366004611502565b610165565b6040516100b9929190611a41565b60405180910390f35b6100d56100d0366004611580565b61018f565b005b6100ea6100e5366004611502565b610605565b6040516100b99190611b67565b61010a610105366004611546565b61066d565b6040516100b9929190611a84565b610120610842565b6040516100b99190611a33565b610120610866565b61012061088a565b610120610922565b610158610153366004611502565b61098b565b6040516100b99190611aa9565b6001600160a01b039081166000908152602081905260409020805460019091015490821692911690565b61019761088a565b6001600160a01b0316336001600160a01b0316146101d05760405162461bcd60e51b81526004016101c790611ad7565b60405180910390fd5b806101ed5760405162461bcd60e51b81526004016101c790611b47565b60005b8181101561060057600083838381811061020657fe5b905060200201602081019061021b9190611502565b6001600160a01b031614156102425760405162461bcd60e51b81526004016101c790611b57565b6000808085858581811061025257fe5b90506020020160208101906102679190611502565b6001600160a01b03908116825260208201929092526040016000205416146102a15760405162461bcd60e51b81526004016101c790611b37565b60008383838181106102af57fe5b90506020020160208101906102c49190611502565b90506000816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561030157600080fd5b505afa158015610315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103399190611528565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561037657600080fd5b505afa15801561038a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ae9190611528565b90506103ba82826109ab565b6103d65760405162461bcd60e51b81526004016101c790611b07565b6040518060800160405280836001600160a01b03168152602001826001600160a01b03168152602001836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561043857600080fd5b505afa15801561044c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610470919061164b565b60ff168152602001826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156104b157600080fd5b505afa1580156104c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e9919061164b565b60ff1690526000808888888181106104fd57fe5b90506020020160208101906105129190611502565b6001600160a01b0390811682526020808301939093526040918201600020845181546001600160a01b03199081169184169190911782559385015160019091018054938601516060909601519390941691161760ff60a01b1916600160a01b60ff948516021760ff60a81b1916600160a81b939091169290920291909117905585858581811061059e57fe5b90506020020160208101906105b39190611502565b6001600160a01b03167f2d64d749034284f79591001c60e51eeab7a396decc5296df21e417306e9d92bf83836040516105ed929190611a41565b60405180910390a25050506001016101f0565b505050565b61060d611441565b506001600160a01b038082166000908152602081815260409182902082516080810184528154851681526001909101549384169181019190915260ff600160a01b8404811692820192909252600160a81b9092041660608201525b919050565b606080610678611441565b506001600160a01b038481166000908152602081815260409182902082516080810184528154851681526001909101549384168183015260ff600160a01b8504811682850152600160a81b9094049093166060808501919091528251600280825291810184529290918301908036833701905050925080600001518360008151811061070057fe5b60200260200101906001600160a01b031690816001600160a01b03168152505080602001518360018151811061073257fe5b60200260200101906001600160a01b031690816001600160a01b03168152505060008061077783600001518460200151856040015160ff16866060015160ff16610c3e565b915091506000806107aa7f00000000000000000000000000000000000000000000000000000000000000008a8686610e47565b604080516002808252606082019092529294509092508160200160208202803683370190505095506107ee670de0b6b3a76400006107e88a85610e77565b90610eb8565b866000815181106107fb57fe5b602090810291909101015261081c670de0b6b3a76400006107e88a84610e77565b8660018151811061082957fe5b60200260200101818152505050505050505b9250929050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156108e557600080fd5b505afa1580156108f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091d9190611528565b905090565b6000610966604051806060016040528060298152602001611c3d602991397f0000000000000000000000000000000000000000000000000000000000000000610eea565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b0390811660009081526020819052604090205416151590565b60006109cf604051806060016040528060248152602001611c8a6024913984610eea565b6109f1604051806060016040528060248152602001611c666024913983610eea565b604051631892df1d60e31b81527f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b0382169063c496f8e890610a3f908790600401611a33565b60206040518083038186803b158015610a5757600080fd5b505afa158015610a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8f91906115c2565b15610b2457604051634df48c7360e11b81526001600160a01b03821690639be918e690610ac0908690600401611a33565b60206040518083038186803b158015610ad857600080fd5b505afa158015610aec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1091906115c2565b15610b1f576001915050610c38565b610c32565b6040516364b01dc160e01b81526001600160a01b038216906364b01dc190610b50908790600401611a33565b60206040518083038186803b158015610b6857600080fd5b505afa158015610b7c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba091906115c2565b8015610c235750604051631892df1d60e31b81526001600160a01b0382169063c496f8e890610bd3908690600401611a33565b60206040518083038186803b158015610beb57600080fd5b505afa158015610bff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2391906115c2565b15610c32576001915050610c38565b60009150505b92915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c496f8e8876040518263ffffffff1660e01b8152600401610c8d9190611a33565b60206040518083038186803b158015610ca557600080fd5b505afa158015610cb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cdd91906115c2565b15610d925750604051632633f08360e11b8152600a83900a906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634c67e10690610d3990889085908b90600401611a5c565b602060405180830381600087803b158015610d5357600080fd5b505af1158015610d67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8b919061162d565b9150610e3e565b604051632633f08360e11b8152600a85900a92506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634c67e10690610de990899086908a90600401611a5c565b602060405180830381600087803b158015610e0357600080fd5b505af1158015610e17573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3b919061162d565b90505b94509492505050565b600080600080610e58878787610f33565b91509150610e6888888484611042565b93509350505094509492505050565b600082610e8657506000610c38565b82820282848281610e9357fe5b0414610eb15760405162461bcd60e51b81526004016101c790611b27565b9392505050565b6000808211610ed95760405162461bcd60e51b81526004016101c790611b17565b818381610ee257fe5b049392505050565b610f2f8282604051602401610f00929190611ab7565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905261126f565b5050565b600080846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610f6f57600080fd5b505afa158015610f83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa791906115e0565b506001600160701b039182169350169050600080610fc786868686611290565b915091508060001415610fdb57505061103a565b811561100e576000610fee82868661135b565b9050610ffa85836113a3565b945061100684826113c8565b935050611037565b600061101b82858761135b565b905061102784836113a3565b935061103385826113c8565b9450505b50505b935093915050565b60008060008590506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561108557600080fd5b505afa158015611099573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bd919061162d565b905060006001600160a01b0316886001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b15801561110357600080fd5b505afa158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b9190611528565b6001600160a01b031614611243576000826001600160a01b0316637464fc3d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561118457600080fd5b505afa158015611198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111bc919061162d565b905080156112415760006111d86111d38989610e77565b6113f0565b905060006111e5836113f0565b90508082111561123e5760006112056111fe84846113c8565b8690610e77565b9050600061121e83611218866005610e77565b906113a3565b9050600061122c8383610eb8565b905061123887826113a3565b96505050505b50505b505b611259816107e888670de0b6b3a7640000610e77565b610e68826107e888670de0b6b3a7640000610e77565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600080856112a2846107e88789610e77565b10915060008083156112f3576112d86111d36112c0896103e5610e77565b6107e86103e86112d28d818d8d610e77565b90610e77565b91506112ec6103e56107e8886103e8610e77565b905061132e565b6113176111d36113058a6103e5610e77565b6107e86103e86112d28c818d8d610e77565b915061132b6103e56107e8876103e8610e77565b90505b8082101561134457600080935093505050610e3e565b61134e82826113c8565b9250505094509492505050565b60008061136a856103e5610e77565b905060006113788285610e77565b9050600061138c83611218886103e8610e77565b90506113988282610eb8565b979650505050505050565b600082820183811015610eb15760405162461bcd60e51b81526004016101c790611ae7565b6000828211156113ea5760405162461bcd60e51b81526004016101c790611af7565b50900390565b60006003821115611433575080600160028204015b8181101561142d5780915060028182858161141c57fe5b04018161142557fe5b049050611405565b50610668565b811561066857506001919050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b8035610c3881611bf8565b8051610c3881611bf8565b60008083601f84011261149057600080fd5b50813567ffffffffffffffff8111156114a857600080fd5b60208301915083602082028301111561083b57600080fd5b8051610c3881611c0f565b8051610c3881611c18565b8035610c3881611c21565b8051610c3881611c21565b8051610c3881611c2a565b8051610c3881611c33565b60006020828403121561151457600080fd5b60006115208484611468565b949350505050565b60006020828403121561153a57600080fd5b60006115208484611473565b6000806040838503121561155957600080fd5b60006115658585611468565b9250506020611576858286016114d6565b9150509250929050565b6000806020838503121561159357600080fd5b823567ffffffffffffffff8111156115aa57600080fd5b6115b68582860161147e565b92509250509250929050565b6000602082840312156115d457600080fd5b600061152084846114c0565b6000806000606084860312156115f557600080fd5b600061160186866114cb565b9350506020611612868287016114cb565b9250506040611623868287016114ec565b9150509250925092565b60006020828403121561163f57600080fd5b600061152084846114e1565b60006020828403121561165d57600080fd5b600061152084846114f7565b60006116758383611689565b505060200190565b60006116758383611a21565b61169281611b88565b82525050565b60006116a382611b7b565b6116ad8185611b7f565b93506116b883611b75565b8060005b838110156116e65781516116d08882611669565b97506116db83611b75565b9250506001016116bc565b509495945050505050565b60006116fc82611b7b565b6117068185611b7f565b935061171183611b75565b8060005b838110156116e6578151611729888261167d565b975061173483611b75565b925050600101611715565b61169281611b93565b600061175382611b7b565b61175d8185611b7f565b935061176d818560208601611bc2565b61177681611bee565b9093019392505050565b600061178d604983611b7f565b7f6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652081527f46756e644465706c6f796572206f776e65722063616e2063616c6c207468697360208201526810333ab731ba34b7b760b91b604082015260600192915050565b60006117fe601b83611b7f565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000611837601e83611b7f565b7f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815260200192915050565b6000611870602583611b7f565b7f616464506f6f6c546f6b656e733a20556e737570706f7274656420706f6f6c208152643a37b5b2b760d91b602082015260400192915050565b60006118b7601a83611b7f565b7f536166654d6174683a206469766973696f6e206279207a65726f000000000000815260200192915050565b60006118f0602183611b7f565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b6000611933602083611b7f565b7f616464506f6f6c546f6b656e733a2056616c756520616c726561647920736574815260200192915050565b600061196c602083611b7f565b7f616464506f6f6c546f6b656e733a20456d707479205f706f6f6c546f6b656e73815260200192915050565b60006119a5601e83611b7f565b7f616464506f6f6c546f6b656e733a20456d70747920706f6f6c546f6b656e0000815260200192915050565b805160808301906119e28482611689565b5060208201516119f56020850182611689565b506040820151611a086040850182611a2a565b506060820151611a1b6060850182611a2a565b50505050565b61169281611bb0565b61169281611bbc565b60208101610c388284611689565b60408101611a4f8285611689565b610eb16020830184611689565b60608101611a6a8286611689565b611a776020830185611a21565b6115206040830184611689565b60408082528101611a958185611698565b9050818103602083015261152081846116f1565b60208101610c38828461173f565b60408082528101611ac88185611748565b9050610eb16020830184611689565b60208082528101610c3881611780565b60208082528101610c38816117f1565b60208082528101610c388161182a565b60208082528101610c3881611863565b60208082528101610c38816118aa565b60208082528101610c38816118e3565b60208082528101610c3881611926565b60208082528101610c388161195f565b60208082528101610c3881611998565b60808101610c3882846119d1565b60200190565b5190565b90815260200190565b6000610c3882611ba4565b151590565b6001600160701b031690565b6001600160a01b031690565b90565b63ffffffff1690565b60ff1690565b60005b83811015611bdd578181015183820152602001611bc5565b83811115611a1b5750506000910152565b601f01601f191690565b611c0181611b88565b8114611c0c57600080fd5b50565b611c0181611b93565b611c0181611b98565b611c0181611bb0565b611c0181611bb3565b611c0181611bbc56fe46756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a25735f5f706f6f6c546f6b656e4973537570706f727461626c653a20746f6b656e313a2025735f5f706f6f6c546f6b656e4973537570706f727461626c653a20746f6b656e303a202573a26469706673582212204086879fda4d7168e30b68a319395f6aeee7917eaee6b2f7c794a22f4c0775c764736f6c634300060c0033';
}

// prettier-ignore
export const UniswapV2PoolPriceFeed = contract<UniswapV2PoolPriceFeed, UniswapV2PoolPriceFeedArgs>(UniswapV2PoolPriceFeedBytecode)`
  constructor(address _fundDeployer, address _valueInterpreter, address _factory)
  event PoolTokenAdded(address indexed poolToken, address token0, address token1)
  function addPoolTokens(address[] _poolTokens)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getFactory() view returns (address factory_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getPoolTokenInfo(address _poolToken) view returns (tuple(address token0, address token1, uint8 token0Decimals, uint8 token1Decimals) poolTokenInfo_)
  function getPoolTokenUnderlyings(address _poolToken) view returns (address token0_, address token1_)
  function getValueInterpreter() view returns (address valueInterpreter_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
`;