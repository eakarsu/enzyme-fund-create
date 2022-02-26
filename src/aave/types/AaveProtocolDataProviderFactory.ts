/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AaveProtocolDataProvider } from "./AaveProtocolDataProvider";

export class AaveProtocolDataProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    overrides?: Overrides
  ): Promise<AaveProtocolDataProvider> {
    return super.deploy(
      addressesProvider,
      overrides || {}
    ) as Promise<AaveProtocolDataProvider>;
  }
  getDeployTransaction(
    addressesProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressesProvider, overrides || {});
  }
  attach(address: string): AaveProtocolDataProvider {
    return super.attach(address) as AaveProtocolDataProvider;
  }
  connect(signer: Signer): AaveProtocolDataProviderFactory {
    return super.connect(signer) as AaveProtocolDataProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveProtocolDataProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveProtocolDataProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "addressesProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllATokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct AaveProtocolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllReservesTokens",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "tokenAddress",
            type: "address",
          },
        ],
        internalType: "struct AaveProtocolDataProvider.TokenData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveConfigurationData",
    outputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "borrowingEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isFrozen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getReserveTokensAddresses",
    outputs: [
      {
        internalType: "address",
        name: "aTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "stableDebtTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "variableDebtTokenAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "currentATokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalStableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledVariableDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "stableRateLastUpdated",
        type: "uint40",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611cac380380611cac83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c611bfa6100b26000398061015b528061019552806102ac52806107a65280610b2a5280610c7a5280610ff852806111285250611bfa6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80633e1501411161005b5780633e150141146100f1578063b316ff891461011a578063d2493b6c1461012f578063f561ae41146101515761007d565b80630542975c1461008257806328dd2d01146100a057806335ea6a75146100c8575b600080fd5b61008a610159565b60405161009791906119ac565b60405180910390f35b6100b36100ae36600461164d565b61017d565b60405161009799989796959493929190611b0d565b6100db6100d636600461160e565b61078d565b6040516100979a99989796959493929190611ac1565b6101046100ff36600461160e565b610b11565b6040516100979a99989796959493929190611a72565b610122610c74565b60405161009791906119e3565b61014261013d36600461160e565b610fe9565b604051610097939291906119c0565b610122611122565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060008060008060008060006101936114d5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101ec57600080fd5b505afa158015610200573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102249190611631565b6001600160a01b03166335ea6a758d6040518263ffffffff1660e01b815260040161024f91906119ac565b6101806040518083038186803b15801561026857600080fd5b505afa15801561027c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a091906117d7565b90506102aa611540565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030357600080fd5b505afa158015610317573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033b9190611631565b6001600160a01b0316634417a5838d6040518263ffffffff1660e01b815260040161036691906119ac565b604080518083038186803b15801561037d57600080fd5b505afa158015610391573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b591906118d2565b60e08301516040516370a0823160e01b81529192506001600160a01b0316906370a08231906103e8908f906004016119ac565b60206040518083038186803b15801561040057600080fd5b505afa158015610414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104389190611943565b6101208301516040516370a0823160e01b8152919c506001600160a01b0316906370a082319061046c908f906004016119ac565b60206040518083038186803b15801561048457600080fd5b505afa158015610498573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bc9190611943565b6101008301516040516370a0823160e01b8152919a506001600160a01b0316906370a08231906104f0908f906004016119ac565b60206040518083038186803b15801561050857600080fd5b505afa15801561051c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105409190611943565b61010083015160405163631a6fd560e11b8152919b506001600160a01b03169063c634dfaa90610574908f906004016119ac565b60206040518083038186803b15801561058c57600080fd5b505afa1580156105a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c49190611943565b610120830151604051630ed1279f60e11b81529199506001600160a01b031690631da24f3e906105f8908f906004016119ac565b60206040518083038186803b15801561061057600080fd5b505afa158015610624573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106489190611943565b965081606001516001600160801b031694508161010001516001600160a01b031663e78c9b3b8d6040518263ffffffff1660e01b815260040161068b91906119ac565b60206040518083038186803b1580156106a357600080fd5b505afa1580156106b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106db9190611943565b610100830151604051631e739ae360e21b81529197506001600160a01b0316906379ce6b8c9061070f908f906004016119ac565b60206040518083038186803b15801561072757600080fd5b505afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f919061195b565b935061077c82610160015160ff16826113e990919063ffffffff16565b925050509295985092959850929598565b6000806000806000806000806000806107a46114d5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107fd57600080fd5b505afa158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190611631565b6001600160a01b03166335ea6a758d6040518263ffffffff1660e01b815260040161086091906119ac565b6101806040518083038186803b15801561087957600080fd5b505afa15801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b191906117d7565b60e08101516040516370a0823160e01b81529192506001600160a01b038e16916370a08231916108e3916004016119ac565b60206040518083038186803b1580156108fb57600080fd5b505afa15801561090f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109339190611943565b8161010001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097157600080fd5b505afa158015610985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a99190611943565b8261012001516001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109e757600080fd5b505afa1580156109fb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1f9190611943565b836060015184608001518560a001518661010001516001600160a01b03166390f6fcf26040518163ffffffff1660e01b815260040160206040518083038186803b158015610a6c57600080fd5b505afa158015610a80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa49190611943565b876020015188604001518960c00151866001600160801b03169650856001600160801b03169550846001600160801b03169450826001600160801b03169250816001600160801b031691509a509a509a509a509a509a509a509a509a509a50509193959799509193959799565b600080600080600080600080600080610b28611558565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8157600080fd5b505afa158015610b95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb99190611631565b6001600160a01b031663c44b11f78d6040518263ffffffff1660e01b8152600401610be491906119ac565b60206040518083038186803b158015610bfc57600080fd5b505afa158015610c10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3491906117bc565b9050610c3f8161146e565b909e50929c50909a5098509650610c5581611499565b9d9f9c9e509a9c999b989a8d15159a9099909850919650945092505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610cd157600080fd5b505afa158015610ce5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d099190611631565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b158015610d4657600080fd5b505afa158015610d5a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d829190810190611685565b90506060815167ffffffffffffffff81118015610d9e57600080fd5b50604051908082528060200260200182016040528015610dd857816020015b610dc561156b565b815260200190600190039081610dbd5790505b50905060005b8251811015610fe157739f8f72aa9304c8b593d555f12ef6589cc3a579a26001600160a01b0316838281518110610e1157fe5b60200260200101516001600160a01b03161415610e905760405180604001604052806040518060400160405280600381526020016226a5a960e91b8152508152602001848381518110610e6057fe5b60200260200101516001600160a01b0316815250828281518110610e8057fe5b6020026020010181905250610fd9565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316838281518110610eba57fe5b60200260200101516001600160a01b03161415610f095760405180604001604052806040518060400160405280600381526020016208aa8960eb1b8152508152602001848381518110610e6057fe5b6040518060400160405280848381518110610f2057fe5b60200260200101516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b158015610f6057600080fd5b505afa158015610f74573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f9c9190810190611730565b8152602001848381518110610fad57fe5b60200260200101516001600160a01b0316815250828281518110610fcd57fe5b60200260200101819052505b600101610dde565b509250505090565b6000806000610ff66114d5565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561104f57600080fd5b505afa158015611063573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110879190611631565b6001600160a01b03166335ea6a75866040518263ffffffff1660e01b81526004016110b291906119ac565b6101806040518083038186803b1580156110cb57600080fd5b505afa1580156110df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110391906117d7565b60e0810151610100820151610120909201519097919650945092505050565b606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561117f57600080fd5b505afa158015611193573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b79190611631565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b1580156111f457600080fd5b505afa158015611208573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112309190810190611685565b90506060815167ffffffffffffffff8111801561124c57600080fd5b5060405190808252806020026020018201604052801561128657816020015b61127361156b565b81526020019060019003908161126b5790505b50905060005b8251811015610fe15761129d6114d5565b846001600160a01b03166335ea6a758584815181106112b857fe5b60200260200101516040518263ffffffff1660e01b81526004016112dc91906119ac565b6101806040518083038186803b1580156112f557600080fd5b505afa158015611309573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132d91906117d7565b905060405180604001604052808260e001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561137757600080fd5b505afa15801561138b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113b39190810190611730565b81526020018260e001516001600160a01b03168152508383815181106113d557fe5b60209081029190910101525060010161128c565b6000610100821060405180604001604052806002815260200161373760f01b815250906114325760405162461bcd60e51b81526004016114299190611a5f565b60405180910390fd5b506000608083049050608083069250826002026001018460000151826002811061145857fe5b60200201516001911c1615159150505b92915050565b5161ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b6040518061018001604052806114e9611558565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060200160405280611553611583565b905290565b6040518060200160405280600081525090565b60408051808201909152606081526000602082015290565b60405180604001604052806002906020820280368337509192915050565b805161146881611bac565b6000602082840312156115bd578081fd5b6115c76020611b55565b9151825250919050565b80516001600160801b038116811461146857600080fd5b805164ffffffffff8116811461146857600080fd5b805160ff8116811461146857600080fd5b60006020828403121561161f578081fd5b813561162a81611bac565b9392505050565b600060208284031215611642578081fd5b815161162a81611bac565b6000806040838503121561165f578081fd5b823561166a81611bac565b9150602083013561167a81611bac565b809150509250929050565b60006020808385031215611697578182fd5b825167ffffffffffffffff808211156116ae578384fd5b818501915085601f8301126116c1578384fd5b8151818111156116cf578485fd5b83810291506116df848301611b55565b8181528481019084860184860187018a10156116f9578788fd5b8795505b838610156117235761170f8a826115a1565b8352600195909501949186019186016116fd565b5098975050505050505050565b600060208284031215611741578081fd5b815167ffffffffffffffff80821115611758578283fd5b818401915084601f83011261176b578283fd5b815181811115611779578384fd5b61178c601f8201601f1916602001611b55565b91508082528560208285010111156117a2578384fd5b6117b3816020840160208601611b7c565b50949350505050565b6000602082840312156117cd578081fd5b61162a83836115ac565b60006101808083850312156117ea578182fd5b6117f381611b55565b90506117ff84846115ac565b815261180e84602085016115d1565b602082015261182084604085016115d1565b604082015261183284606085016115d1565b606082015261184484608085016115d1565b60808201526118568460a085016115d1565b60a08201526118688460c085016115e8565b60c082015261187a8460e085016115a1565b60e082015261010061188e858286016115a1565b908201526101206118a1858583016115a1565b908201526101406118b4858583016115a1565b908201526101606118c7858583016115fd565b908201529392505050565b6000604082840312156118e3578081fd5b60206118ee81611b55565b84601f8501126118fc578283fd5b6119066040611b55565b808587604088011115611917578586fd5b855b600281101561193657815184529285019290850190600101611919565b5050825250949350505050565b600060208284031215611954578081fd5b5051919050565b60006020828403121561196c578081fd5b815164ffffffffff8116811461162a578182fd5b60008151808452611998816020860160208601611b7c565b601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60208082528251828201819052600091906040908185019080840286018301878501865b83811015611a5157888303603f1901855281518051878552611a2b88860182611980565b918901516001600160a01b03169489019490945294870194925090860190600101611a07565b509098975050505050505050565b60006020825261162a6020830184611980565b998a5260208a0198909852604089019690965260608801949094526080870192909252151560a0860152151560c0850152151560e0840152151561010083015215156101208201526101400190565b998a5260208a019890985260408901969096526060880194909452608087019290925260a086015260c085015260e084015261010083015264ffffffffff166101208201526101400190565b988952602089019790975260408801959095526060870193909352608086019190915260a085015260c084015264ffffffffff1660e083015215156101008201526101200190565b60405181810167ffffffffffffffff81118282101715611b7457600080fd5b604052919050565b60005b83811015611b97578181015183820152602001611b7f565b83811115611ba6576000848401525b50505050565b6001600160a01b0381168114611bc157600080fd5b5056fea2646970667358221220ed2c890399c2a64c19a8b1b1cb44dc316ea4428eae5f7cc1944671e44f794d9f64736f6c634300060c0033";
