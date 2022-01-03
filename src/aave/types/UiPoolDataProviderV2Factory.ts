/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UiPoolDataProviderV2 } from "./UiPoolDataProviderV2";

export class UiPoolDataProviderV2Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _networkBaseTokenPriceInUsdProxyAggregator: string,
    _marketReferenceCurrencyPriceInUsdProxyAggregator: string,
    overrides?: Overrides
  ): Promise<UiPoolDataProviderV2> {
    return super.deploy(
      _networkBaseTokenPriceInUsdProxyAggregator,
      _marketReferenceCurrencyPriceInUsdProxyAggregator,
      overrides || {}
    ) as Promise<UiPoolDataProviderV2>;
  }
  getDeployTransaction(
    _networkBaseTokenPriceInUsdProxyAggregator: string,
    _marketReferenceCurrencyPriceInUsdProxyAggregator: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _networkBaseTokenPriceInUsdProxyAggregator,
      _marketReferenceCurrencyPriceInUsdProxyAggregator,
      overrides || {}
    );
  }
  attach(address: string): UiPoolDataProviderV2 {
    return super.attach(address) as UiPoolDataProviderV2;
  }
  connect(signer: Signer): UiPoolDataProviderV2Factory {
    return super.connect(signer) as UiPoolDataProviderV2Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UiPoolDataProviderV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UiPoolDataProviderV2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IChainlinkAggregator",
        name: "_networkBaseTokenPriceInUsdProxyAggregator",
        type: "address",
      },
      {
        internalType: "contract IChainlinkAggregator",
        name: "_marketReferenceCurrencyPriceInUsdProxyAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ETH_CURRENCY_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MKRAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_bytes32",
        type: "bytes32",
      },
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "decimals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseLTVasCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveLiquidationBonus",
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
          {
            internalType: "uint128",
            name: "liquidityIndex",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "variableBorrowIndex",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "liquidityRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "variableBorrowRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "stableBorrowRate",
            type: "uint128",
          },
          {
            internalType: "uint40",
            name: "lastUpdateTimestamp",
            type: "uint40",
          },
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
          {
            internalType: "address",
            name: "interestRateStrategyAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrincipalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averageStableRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableDebtLastUpdateTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalScaledVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceInMarketReferenceCurrency",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "variableRateSlope1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "variableRateSlope2",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableRateSlope1",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableRateSlope2",
            type: "uint256",
          },
        ],
        internalType: "struct IUiPoolDataProviderV2.AggregatedReserveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "marketReferenceCurrencyUnit",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "marketReferenceCurrencyPriceInUsd",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "networkBaseTokenPriceInUsd",
            type: "int256",
          },
          {
            internalType: "uint8",
            name: "networkBaseTokenPriceDecimals",
            type: "uint8",
          },
        ],
        internalType: "struct IUiPoolDataProviderV2.BaseCurrencyInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
    ],
    name: "getReservesList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReservesData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "scaledATokenBalance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "usageAsCollateralEnabledOnUser",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "stableBorrowRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "scaledVariableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "principalStableDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stableBorrowLastUpdateTimestamp",
            type: "uint256",
          },
        ],
        internalType: "struct IUiPoolDataProviderV2.UserReserveData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketReferenceCurrencyPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IChainlinkAggregator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkBaseTokenPriceInUsdProxyAggregator",
    outputs: [
      {
        internalType: "contract IChainlinkAggregator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620023ee380380620023ee833981016040819052620000349162000053565b6001600160601b0319606092831b8116608052911b1660a052620000aa565b6000806040838503121562000066578182fd5b8251620000738162000091565b6020840151909250620000868162000091565b809150509250929050565b6001600160a01b0381168114620000a757600080fd5b50565b60805160601c60a05160601c612306620000e8600039806109d152806112fc52806113ba52508061015f528061111352806111ad52506123066000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639201de551161005b5780639201de55146101005780639dd9e2ce14610120578063d22cf68a14610128578063ec489c211461013057610088565b80630496f53a1461008d5780633c1740ed146100ab57806351974cc0146100c0578063586c1442146100e0575b600080fd5b610095610151565b6040516100a29190612245565b60405180910390f35b6100b361015d565b6040516100a291906120b9565b6100d36100ce366004611b94565b610181565b6040516100a291906121a5565b6100f36100ee366004611b78565b6107be565b6040516100a291906120cd565b61011361010e366004611b48565b6108b1565b6040516100a29190612232565b6100b36109b7565b6100b36109cf565b61014361013e366004611b78565b6109f3565b6040516100a292919061211a565b670de0b6b3a764000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606000836001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101be57600080fd5b505afa1580156101d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f69190611a81565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b15801561023357600080fd5b505afa158015610247573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261026f9190810190611a9d565b905061027961178e565b604051634417a58360e01b81526001600160a01b03841690634417a583906102a59088906004016120b9565b604080518083038186803b1580156102bc57600080fd5b505afa1580156102d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f49190611d53565b905060606001600160a01b03861661030d576000610310565b82515b67ffffffffffffffff8111801561032657600080fd5b5060405190808252806020026020018201604052801561036057816020015b61034d6117a6565b8152602001906001900390816103455790505b50905060005b83518110156107b1576103776117ee565b856001600160a01b03166335ea6a7586848151811061039257fe5b60200260200101516040518263ffffffff1660e01b81526004016103b691906120b9565b6101806040518083038186803b1580156103cf57600080fd5b505afa1580156103e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104079190611c58565b905084828151811061041557fe5b602002602001015183838151811061042957fe5b60209081029190910101516001600160a01b03918216905260e0820151604051630ed1279f60e11b8152911690631da24f3e9061046a908b906004016120b9565b60206040518083038186803b15801561048257600080fd5b505afa158015610496573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ba9190611b60565b8383815181106104c657fe5b60209081029190910181015101526104de848361146d565b8383815181106104ea57fe5b602090810291909101015190151560409091015261050884836114f0565b156107a8578061012001516001600160a01b0316631da24f3e896040518263ffffffff1660e01b815260040161053e91906120b9565b60206040518083038186803b15801561055657600080fd5b505afa15801561056a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e9190611b60565b83838151811061059a57fe5b602002602001015160800181815250508061010001516001600160a01b031663c634dfaa896040518263ffffffff1660e01b81526004016105db91906120b9565b60206040518083038186803b1580156105f357600080fd5b505afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b9190611b60565b83838151811061063757fe5b602002602001015160a001818152505082828151811061065357fe5b602002602001015160a001516000146107a8578061010001516001600160a01b031663e78c9b3b896040518263ffffffff1660e01b815260040161069791906120b9565b60206040518083038186803b1580156106af57600080fd5b505afa1580156106c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e79190611b60565b8383815181106106f357fe5b602002602001015160600181815250508061010001516001600160a01b03166379ce6b8c896040518263ffffffff1660e01b815260040161073491906120b9565b60206040518083038186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107849190611e04565b64ffffffffff1683838151811061079757fe5b602002602001015160c00181815250505b50600101610366565b5093505050505b92915050565b60606000826001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107fb57600080fd5b505afa15801561080f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108339190611a81565b9050806001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b15801561086e57600080fd5b505afa158015610882573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108aa9190810190611a9d565b9392505050565b606060005b60208160ff161080156108e45750828160ff16602081106108d357fe5b1a60f81b6001600160f81b03191615155b156108f1576001016108b6565b60608160ff1667ffffffffffffffff8111801561090d57600080fd5b506040519080825280601f01601f191660200182016040528015610938576020820181803683370190505b509050600091505b60208260ff1610801561096e5750838260ff166020811061095d57fe5b1a60f81b6001600160f81b03191615155b156108aa57838260ff166020811061098257fe5b1a60f81b818360ff168151811061099557fe5b60200101906001600160f81b031916908160001a905350600190910190610940565b739f8f72aa9304c8b593d555f12ef6589cc3a579a281565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606109fd611859565b6000836001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b158015610a3857600080fd5b505afa158015610a4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a709190611a81565b90506000846001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610aad57600080fd5b505afa158015610ac1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae59190611a81565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b158015610b2257600080fd5b505afa158015610b36573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b5e9190810190611a9d565b90506060815167ffffffffffffffff81118015610b7a57600080fd5b50604051908082528060200260200182016040528015610bb457816020015b610ba1611884565b815260200190600190039081610b995790505b50905060005b825181101561110857610bcb611884565b828281518110610bd757fe5b60200260200101519050838281518110610bed57fe5b60209081029190910101516001600160a01b03168152610c0b6117ee565b81516040516335ea6a7560e01b81526001600160a01b038816916335ea6a7591610c3891906004016120b9565b6101806040518083038186803b158015610c5157600080fd5b505afa158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c899190611c58565b60208101516001600160801b039081166101a085015260408083015182166101c0860152606083015182166101e08601526080830151821661020086015260a083015190911661022085015260c082015164ffffffffff1661024085015260e08201516001600160a01b03908116610260860152610100830151811661028086015261012083015181166102a086015261014083015181166102c08601528451915163b3596f0760e01b815292935089169163b3596f0791610d4d916004016120b9565b60206040518083038186803b158015610d6557600080fd5b505afa158015610d79573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9d9190611b60565b61038083015281516102608301516040516370a0823160e01b81526001600160a01b03909216916370a0823191610dd6916004016120b9565b60206040518083038186803b158015610dee57600080fd5b505afa158015610e02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e269190611b60565b826102e00181815250508161028001516001600160a01b031663797743386040518163ffffffff1660e01b815260040160806040518083038186803b158015610e6e57600080fd5b505afa158015610e82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea69190611dc4565b64ffffffffff16610340860152610320850152506103008301526102a08201516040805163b1bf962d60e01b815290516001600160a01b039092169163b1bf962d91600480820192602092909190829003018186803b158015610f0857600080fd5b505afa158015610f1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f409190611b60565b61036083015281516001600160a01b0316739f8f72aa9304c8b593d555f12ef6589cc3a579a21415610ff957600082600001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160206040518083038186803b158015610fab57600080fd5b505afa158015610fbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe39190611b60565b9050610fee816108b1565b604084015250611078565b81600001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561103657600080fd5b505afa15801561104a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110729190810190611bcc565b60408301525b80516110839061154e565b60e0870152606086015260c085015260a0840152608083015280516110a790611579565b1515610140860152151561012085015215156101808401521515610160830152608082015115156101008301526102c08201516110e3906115b5565b6104008601526103e08501526103c08401526103a09092019190915250600101610bba565b50611111611859565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116a57600080fd5b505afa15801561117e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a29190611b60565b8160400181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561120457600080fd5b505afa158015611218573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123c9190611e20565b60ff16606082015260408051638c89b64f60e01b815290516001600160a01b03871691638c89b64f916004808301926020929190829003018186803b15801561128457600080fd5b505afa9250505080156112b4575060408051601f3d908101601f191682019092526112b191810190611b60565b60015b611396573d8080156112e2576040519150601f19603f3d011682016040523d82523d6000602084013e6112e7565b606091505b50670de0b6b3a76400008260000181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561135357600080fd5b505afa158015611367573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138b9190611b60565b602083015250611460565b80670de0b6b3a7640000141561145357670de0b6b3a76400008260000181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561141157600080fd5b505afa158015611425573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114499190611b60565b602083015261145e565b808252602082018190525b505b9095509350505050915091565b6000610100821060405180604001604052806002815260200161373760f01b815250906114b65760405162461bcd60e51b81526004016114ad9190612232565b60405180910390fd5b50600060808304905060808306925082600202600101846000015182600281106114dc57fe5b6020020151901c6001161515949350505050565b6000610100821060405180604001604052806002815260200161373760f01b815250906115305760405162461bcd60e51b81526004016114ad9190612232565b508251607f831692608090049060028085029190839081106114dc57fe5b5161ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b600080600080846001600160a01b0316637b832f586040518163ffffffff1660e01b815260040160206040518083038186803b1580156115f457600080fd5b505afa158015611608573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162c9190611b60565b856001600160a01b03166365614f816040518163ffffffff1660e01b815260040160206040518083038186803b15801561166557600080fd5b505afa158015611679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169d9190611b60565b866001600160a01b0316630bdf953f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116d657600080fd5b505afa1580156116ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170e9190611b60565b876001600160a01b031663ccab01a36040518163ffffffff1660e01b815260040160206040518083038186803b15801561174757600080fd5b505afa15801561175b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177f9190611b60565b93509350935093509193509193565b60405180602001604052806117a16119e3565b905290565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081525090565b604051806101800160405280611802611a01565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b60405180610420016040528060006001600160a01b031681526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160001515815260200160001515815260200160001515815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b0316815260200160006001600160801b03168152602001600064ffffffffff16815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806002906020820280368337509192915050565b6040518060200160405280600081525090565b80516107b8816122a5565b600060208284031215611a30578081fd5b611a3a602061224e565b9151825250919050565b80516001600160801b03811681146107b857600080fd5b805164ffffffffff811681146107b857600080fd5b805160ff811681146107b857600080fd5b600060208284031215611a92578081fd5b81516108aa816122a5565b60006020808385031215611aaf578182fd5b825167ffffffffffffffff80821115611ac6578384fd5b818501915085601f830112611ad9578384fd5b815181811115611ae7578485fd5b8381029150611af784830161224e565b8181528481019084860184860187018a1015611b11578788fd5b8795505b83861015611b3b57611b278a82611a14565b835260019590950194918601918601611b15565b5098975050505050505050565b600060208284031215611b59578081fd5b5035919050565b600060208284031215611b71578081fd5b5051919050565b600060208284031215611b89578081fd5b81356108aa816122a5565b60008060408385031215611ba6578081fd5b8235611bb1816122a5565b91506020830135611bc1816122a5565b809150509250929050565b600060208284031215611bdd578081fd5b815167ffffffffffffffff80821115611bf4578283fd5b818401915084601f830112611c07578283fd5b815181811115611c15578384fd5b611c28601f8201601f191660200161224e565b9150808252856020828501011115611c3e578384fd5b611c4f816020840160208601612275565b50949350505050565b6000610180808385031215611c6b578182fd5b611c748161224e565b9050611c808484611a1f565b8152611c8f8460208501611a44565b6020820152611ca18460408501611a44565b6040820152611cb38460608501611a44565b6060820152611cc58460808501611a44565b6080820152611cd78460a08501611a44565b60a0820152611ce98460c08501611a5b565b60c0820152611cfb8460e08501611a14565b60e0820152610100611d0f85828601611a14565b90820152610120611d2285858301611a14565b90820152610140611d3585858301611a14565b90820152610160611d4885858301611a70565b908201529392505050565b600060408284031215611d64578081fd5b6020611d6f8161224e565b84601f850112611d7d578283fd5b611d87604061224e565b808587604088011115611d98578586fd5b855b6002811015611db757815184529285019290850190600101611d9a565b5050825250949350505050565b60008060008060808587031215611dd9578182fd5b8451935060208501519250604085015191506060850151611df9816122bd565b939692955090935050565b600060208284031215611e15578081fd5b81516108aa816122bd565b600060208284031215611e31578081fd5b6108aa8383611a70565b6001600160a01b03169052565b15159052565b60008151808452611e66816020860160208601612275565b601f01601f19169290920160200192915050565b6000610420611e8a848451611e3b565b6020830151816020860152611ea182860182611e4e565b91505060408301518482036040860152611ebb8282611e4e565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151611f0382870182611e48565b505061012080840151611f1882870182611e48565b505061014080840151611f2d82870182611e48565b505061016080840151611f4282870182611e48565b505061018080840151611f5782870182611e48565b50506101a080840151611f6c828701826120a1565b50506101c080840151611f81828701826120a1565b50506101e080840151611f96828701826120a1565b505061020080840151611fab828701826120a1565b505061022080840151611fc0828701826120a1565b505061024080840151611fd5828701826120ae565b505061026080840151611fea82870182611e3b565b505061028080840151611fff82870182611e3b565b50506102a08084015161201482870182611e3b565b50506102c08084015161202982870182611e3b565b50506102e08381015190850152610300808401519085015261032080840151908501526103408084015190850152610360808401519085015261038080840151908501526103a080840151908501526103c080840151908501526103e080840151908501526104009283015192909301919091525090565b6001600160801b03169052565b64ffffffffff169052565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b8181101561210e5783516001600160a01b0316835292840192918401916001016120e9565b50909695505050505050565b600060a0820160a0835280855180835260c0850191506020925060c0838202860101838801855b8381101561216f5760bf1988840301855261215d838351611e7a565b94860194925090850190600101612141565b5050809450505050835181840152808401516040840152506040830151606083015260ff60608401511660808301529392505050565b602080825282518282018190526000919060409081850190868401855b8281101561222557815180516001600160a01b03168552868101518786015285810151151586860152606080820151908601526080808201519086015260a0808201519086015260c0908101519085015260e090930192908501906001016121c2565b5091979650505050505050565b6000602082526108aa6020830184611e4e565b90815260200190565b60405181810167ffffffffffffffff8111828210171561226d57600080fd5b604052919050565b60005b83811015612290578181015183820152602001612278565b8381111561229f576000848401525b50505050565b6001600160a01b03811681146122ba57600080fd5b50565b64ffffffffff811681146122ba57600080fdfea26469706673582212208ab51747ea6363c041211901a727c07b2f291f1ab1a03d0b224f72f3412ff3ed64736f6c634300060c0033";
