/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UiPoolDataProviderV2V3 } from "./UiPoolDataProviderV2V3";

export class UiPoolDataProviderV2V3Factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _networkBaseTokenPriceInUsdProxyAggregator: string,
    _marketReferenceCurrencyPriceInUsdProxyAggregator: string,
    overrides?: Overrides
  ): Promise<UiPoolDataProviderV2V3> {
    return super.deploy(
      _networkBaseTokenPriceInUsdProxyAggregator,
      _marketReferenceCurrencyPriceInUsdProxyAggregator,
      overrides || {}
    ) as Promise<UiPoolDataProviderV2V3>;
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
  attach(address: string): UiPoolDataProviderV2V3 {
    return super.attach(address) as UiPoolDataProviderV2V3;
  }
  connect(signer: Signer): UiPoolDataProviderV2V3Factory {
    return super.connect(signer) as UiPoolDataProviderV2V3Factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UiPoolDataProviderV2V3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UiPoolDataProviderV2V3;
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
          {
            internalType: "bool",
            name: "isPaused",
            type: "bool",
          },
          {
            internalType: "uint128",
            name: "accruedToTreasury",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "unbacked",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "isolationModeTotalDebt",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "debtCeiling",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtCeilingDecimals",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "eModeCategoryId",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "borrowCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyCap",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "eModeLtv",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationThreshold",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "eModeLiquidationBonus",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "eModePriceSource",
            type: "address",
          },
          {
            internalType: "string",
            name: "eModeLabel",
            type: "string",
          },
          {
            internalType: "bool",
            name: "borrowableInIsolation",
            type: "bool",
          },
        ],
        internalType: "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
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
        internalType: "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
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
        internalType: "struct IUiPoolDataProviderV3.UserReserveData[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
  "0x60c06040523480156200001157600080fd5b506040516200255338038062002553833981016040819052620000349162000053565b6001600160601b0319606092831b8116608052911b1660a052620000aa565b6000806040838503121562000066578182fd5b8251620000738162000091565b6020840151909250620000868162000091565b809150509250929050565b6001600160a01b0381168114620000a757600080fd5b50565b60805160601c60a05160601c61246b620000e8600039806109d5528061130052806113be525080610160528061111752806111b1525061246b6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639201de551161005b5780639201de55146101015780639dd9e2ce14610121578063d22cf68a14610129578063ec489c211461013157610088565b80630496f53a1461008d5780633c1740ed146100ab57806351974cc0146100c0578063586c1442146100e1575b600080fd5b610095610152565b6040516100a291906123aa565b60405180910390f35b6100b361015e565b6040516100a2919061220f565b6100d36100ce366004611bc1565b610182565b6040516100a29291906122f9565b6100f46100ef366004611ba5565b6107c2565b6040516100a29190612223565b61011461010f366004611b75565b6108b5565b6040516100a29190612397565b6100b36109bb565b6100b36109d3565b61014461013f366004611ba5565b6109f7565b6040516100a2929190612270565b670de0b6b3a764000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060600080846001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101c057600080fd5b505afa1580156101d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f89190611aae565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b15801561023557600080fd5b505afa158015610249573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102719190810190611aca565b905061027b611794565b604051634417a58360e01b81526001600160a01b03841690634417a583906102a790899060040161220f565b604080518083038186803b1580156102be57600080fd5b505afa1580156102d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f69190611d80565b905060606001600160a01b03871661030f576000610312565b82515b67ffffffffffffffff8111801561032857600080fd5b5060405190808252806020026020018201604052801561036257816020015b61034f6117ac565b8152602001906001900390816103475790505b50905060005b83518110156107b3576103796117f4565b856001600160a01b03166335ea6a7586848151811061039457fe5b60200260200101516040518263ffffffff1660e01b81526004016103b8919061220f565b6101806040518083038186803b1580156103d157600080fd5b505afa1580156103e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104099190611c85565b905084828151811061041757fe5b602002602001015183838151811061042b57fe5b60209081029190910101516001600160a01b03918216905260e0820151604051630ed1279f60e11b8152911690631da24f3e9061046c908c9060040161220f565b60206040518083038186803b15801561048457600080fd5b505afa158015610498573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bc9190611b8d565b8383815181106104c857fe5b60209081029190910181015101526104e08483611471565b8383815181106104ec57fe5b602090810291909101015190151560409091015261050a84836114f6565b156107aa578061012001516001600160a01b0316631da24f3e8a6040518263ffffffff1660e01b8152600401610540919061220f565b60206040518083038186803b15801561055857600080fd5b505afa15801561056c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105909190611b8d565b83838151811061059c57fe5b602002602001015160800181815250508061010001516001600160a01b031663c634dfaa8a6040518263ffffffff1660e01b81526004016105dd919061220f565b60206040518083038186803b1580156105f557600080fd5b505afa158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d9190611b8d565b83838151811061063957fe5b602002602001015160a001818152505082828151811061065557fe5b602002602001015160a001516000146107aa578061010001516001600160a01b031663e78c9b3b8a6040518263ffffffff1660e01b8152600401610699919061220f565b60206040518083038186803b1580156106b157600080fd5b505afa1580156106c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e99190611b8d565b8383815181106106f557fe5b602002602001015160600181815250508061010001516001600160a01b03166379ce6b8c8a6040518263ffffffff1660e01b8152600401610736919061220f565b60206040518083038186803b15801561074e57600080fd5b505afa158015610762573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107869190611e31565b64ffffffffff1683838151811061079957fe5b602002602001015160c00181815250505b50600101610368565b50976000975095505050505050565b60606000826001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107ff57600080fd5b505afa158015610813573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108379190611aae565b9050806001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b15801561087257600080fd5b505afa158015610886573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108ae9190810190611aca565b9392505050565b606060005b60208160ff161080156108e85750828160ff16602081106108d757fe5b1a60f81b6001600160f81b03191615155b156108f5576001016108ba565b60608160ff1667ffffffffffffffff8111801561091157600080fd5b506040519080825280601f01601f19166020018201604052801561093c576020820181803683370190505b509050600091505b60208260ff161080156109725750838260ff166020811061096157fe5b1a60f81b6001600160f81b03191615155b156108ae57838260ff166020811061098657fe5b1a60f81b818360ff168151811061099957fe5b60200101906001600160f81b031916908160001a905350600190910190610944565b739f8f72aa9304c8b593d555f12ef6589cc3a579a281565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060610a0161185f565b6000836001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b158015610a3c57600080fd5b505afa158015610a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a749190611aae565b90506000846001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ab157600080fd5b505afa158015610ac5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae99190611aae565b90506060816001600160a01b031663d1946dbc6040518163ffffffff1660e01b815260040160006040518083038186803b158015610b2657600080fd5b505afa158015610b3a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b629190810190611aca565b90506060815167ffffffffffffffff81118015610b7e57600080fd5b50604051908082528060200260200182016040528015610bb857816020015b610ba561188a565b815260200190600190039081610b9d5790505b50905060005b825181101561110c57610bcf61188a565b828281518110610bdb57fe5b60200260200101519050838281518110610bf157fe5b60209081029190910101516001600160a01b03168152610c0f6117f4565b81516040516335ea6a7560e01b81526001600160a01b038816916335ea6a7591610c3c919060040161220f565b6101806040518083038186803b158015610c5557600080fd5b505afa158015610c69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8d9190611c85565b60208101516001600160801b039081166101a085015260408083015182166101c0860152606083015182166101e08601526080830151821661020086015260a083015190911661022085015260c082015164ffffffffff1661024085015260e08201516001600160a01b03908116610260860152610100830151811661028086015261012083015181166102a086015261014083015181166102c08601528451915163b3596f0760e01b815292935089169163b3596f0791610d519160040161220f565b60206040518083038186803b158015610d6957600080fd5b505afa158015610d7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da19190611b8d565b61038083015281516102608301516040516370a0823160e01b81526001600160a01b03909216916370a0823191610dda9160040161220f565b60206040518083038186803b158015610df257600080fd5b505afa158015610e06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2a9190611b8d565b826102e00181815250508161028001516001600160a01b031663797743386040518163ffffffff1660e01b815260040160806040518083038186803b158015610e7257600080fd5b505afa158015610e86573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eaa9190611df1565b64ffffffffff16610340860152610320850152506103008301526102a08201516040805163b1bf962d60e01b815290516001600160a01b039092169163b1bf962d91600480820192602092909190829003018186803b158015610f0c57600080fd5b505afa158015610f20573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f449190611b8d565b61036083015281516001600160a01b0316739f8f72aa9304c8b593d555f12ef6589cc3a579a21415610ffd57600082600001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160206040518083038186803b158015610faf57600080fd5b505afa158015610fc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe79190611b8d565b9050610ff2816108b5565b60408401525061107c565b81600001516001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561103a57600080fd5b505afa15801561104e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110769190810190611bf9565b60408301525b805161108790611554565b60e0870152606086015260c085015260a0840152608083015280516110ab9061157f565b1515610140860152151561012085015215156101808401521515610160830152608082015115156101008301526102c08201516110e7906115bb565b6104008601526103e08501526103c08401526103a09092019190915250600101610bbe565b5061111561185f565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116e57600080fd5b505afa158015611182573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a69190611b8d565b8160400181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561120857600080fd5b505afa15801561121c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112409190611e4d565b60ff16606082015260408051638c89b64f60e01b815290516001600160a01b03871691638c89b64f916004808301926020929190829003018186803b15801561128857600080fd5b505afa9250505080156112b8575060408051601f3d908101601f191682019092526112b591810190611b8d565b60015b61139a573d8080156112e6576040519150601f19603f3d011682016040523d82523d6000602084013e6112eb565b606091505b50670de0b6b3a76400008260000181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561135757600080fd5b505afa15801561136b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061138f9190611b8d565b602083015250611464565b80670de0b6b3a7640000141561145757670de0b6b3a76400008260000181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561141557600080fd5b505afa158015611429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144d9190611b8d565b6020830152611462565b808252602082018190525b505b9095509350505050915091565b6000610100821060405180604001604052806002815260200161373760f01b815250906114ba5760405162461bcd60e51b81526004016114b19190612397565b60405180910390fd5b50600060808304905060808306925082600202600101846000015182600281106114e057fe5b60200201516001911c1615159150505b92915050565b6000610100821060405180604001604052806002815260200161373760f01b815250906115365760405162461bcd60e51b81526004016114b19190612397565b508251607f831692608090049060028085029190839081106114e057fe5b5161ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b51670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b600080600080846001600160a01b0316637b832f586040518163ffffffff1660e01b815260040160206040518083038186803b1580156115fa57600080fd5b505afa15801561160e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116329190611b8d565b856001600160a01b03166365614f816040518163ffffffff1660e01b815260040160206040518083038186803b15801561166b57600080fd5b505afa15801561167f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a39190611b8d565b866001600160a01b0316630bdf953f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156116dc57600080fd5b505afa1580156116f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117149190611b8d565b876001600160a01b031663ccab01a36040518163ffffffff1660e01b815260040160206040518083038186803b15801561174d57600080fd5b505afa158015611761573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117859190611b8d565b93509350935093509193509193565b60405180602001604052806117a7611a10565b905290565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600015158152602001600081526020016000815260200160008152602001600081525090565b604051806101800160405280611808611a2e565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060800160405280600081526020016000815260200160008152602001600060ff1681525090565b604080516106008101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a082018190526101c082018190526101e08201819052610200820181905261022082018190526102408201819052610260820181905261028082018190526102a082018190526102c082018190526102e08201819052610300820181905261032082018190526103408201819052610360820181905261038082018190526103a082018190526103c082018190526103e08201819052610400820181905261042082018190526104408201819052610460820181905261048082018190526104a082018190526104c082018190526104e08201819052610500820181905261052082018190526105408201819052610560820181905261058082018190526105a082018190526105c08201929092526105e081019190915290565b60405180604001604052806002906020820280368337509192915050565b6040518060200160405280600081525090565b80516114f08161240a565b600060208284031215611a5d578081fd5b611a6760206123b3565b9151825250919050565b80516001600160801b03811681146114f057600080fd5b805164ffffffffff811681146114f057600080fd5b805160ff811681146114f057600080fd5b600060208284031215611abf578081fd5b81516108ae8161240a565b60006020808385031215611adc578182fd5b825167ffffffffffffffff80821115611af3578384fd5b818501915085601f830112611b06578384fd5b815181811115611b14578485fd5b8381029150611b248483016123b3565b8181528481019084860184860187018a1015611b3e578788fd5b8795505b83861015611b6857611b548a82611a41565b835260019590950194918601918601611b42565b5098975050505050505050565b600060208284031215611b86578081fd5b5035919050565b600060208284031215611b9e578081fd5b5051919050565b600060208284031215611bb6578081fd5b81356108ae8161240a565b60008060408385031215611bd3578081fd5b8235611bde8161240a565b91506020830135611bee8161240a565b809150509250929050565b600060208284031215611c0a578081fd5b815167ffffffffffffffff80821115611c21578283fd5b818401915084601f830112611c34578283fd5b815181811115611c42578384fd5b611c55601f8201601f19166020016123b3565b9150808252856020828501011115611c6b578384fd5b611c7c8160208401602086016123da565b50949350505050565b6000610180808385031215611c98578182fd5b611ca1816123b3565b9050611cad8484611a4c565b8152611cbc8460208501611a71565b6020820152611cce8460408501611a71565b6040820152611ce08460608501611a71565b6060820152611cf28460808501611a71565b6080820152611d048460a08501611a71565b60a0820152611d168460c08501611a88565b60c0820152611d288460e08501611a41565b60e0820152610100611d3c85828601611a41565b90820152610120611d4f85858301611a41565b90820152610140611d6285858301611a41565b90820152610160611d7585858301611a9d565b908201529392505050565b600060408284031215611d91578081fd5b6020611d9c816123b3565b84601f850112611daa578283fd5b611db460406123b3565b808587604088011115611dc5578586fd5b855b6002811015611de457815184529285019290850190600101611dc7565b5050825250949350505050565b60008060008060808587031215611e06578182fd5b8451935060208501519250604085015191506060850151611e2681612422565b939692955090935050565b600060208284031215611e42578081fd5b81516108ae81612422565b600060208284031215611e5e578081fd5b6108ae8383611a9d565b6000610600611e788484516121a9565b6020830151816020860152611e8f828601826121bc565b91505060408301518482036040860152611ea982826121bc565b915050606083015160608501526080830151608085015260a083015160a085015260c083015160c085015260e083015160e085015261010080840151611ef1828701826121b6565b505061012080840151611f06828701826121b6565b505061014080840151611f1b828701826121b6565b505061016080840151611f30828701826121b6565b505061018080840151611f45828701826121b6565b50506101a080840151611f5a828701826121e8565b50506101c080840151611f6f828701826121e8565b50506101e080840151611f84828701826121e8565b505061020080840151611f99828701826121e8565b505061022080840151611fae828701826121e8565b505061024080840151611fc3828701826121fd565b505061026080840151611fd8828701826121a9565b505061028080840151611fed828701826121a9565b50506102a080840151612002828701826121a9565b50506102c080840151612017828701826121a9565b50506102e08381015190850152610300808401519085015261032080840151908501526103408084015190850152610360808401519085015261038080840151908501526103a080840151908501526103c080840151908501526103e0808401519085015261040080840151908501526104208084015161209a828701826121b6565b5050610440808401516120af828701826121e8565b5050610460808401516120c4828701826121e8565b5050610480808401516120d9828701826121e8565b50506104a083810151908501526104c080840151908501526104e08084015161210482870182612208565b5050610500838101519085015261052080840151908501526105408084015161212f828701826121f5565b505061056080840151612144828701826121f5565b505061058080840151612159828701826121f5565b50506105a08084015161216e828701826121a9565b50506105c0808401518583038287015261218883826121bc565b925050506105e08084015161219f828701826121b6565b5090949350505050565b6001600160a01b03169052565b15159052565b600081518084526121d48160208601602086016123da565b601f01601f19169290920160200192915050565b6001600160801b03169052565b61ffff169052565b64ffffffffff169052565b60ff169052565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156122645783516001600160a01b03168352928401929184019160010161223f565b50909695505050505050565b600060a0820160a0835280855161228781846123aa565b915081925060208082028301818901865b848110156122c25786830386526122b0838351611e68565b95840195925090830190600101612298565b505080955050865181870152808701516040870152505050506040830151606083015260ff60608401511660808301529392505050565b6040808252835182820181905260009190606090818501906020808901865b8381101561237e57815161232d8682516121a9565b838101518487015287810151612345898801826121b6565b5080870151868801526080808201519087015260a0808201519087015260c0908101519086015260e09094019390820190600101612318565b505082955060ff88168188015250505050509392505050565b6000602082526108ae60208301846121bc565b90815260200190565b60405181810167ffffffffffffffff811182821017156123d257600080fd5b604052919050565b60005b838110156123f55781810151838201526020016123dd565b83811115612404576000848401525b50505050565b6001600160a01b038116811461241f57600080fd5b50565b64ffffffffff8116811461241f57600080fdfea2646970667358221220661bc3cdbbcc961c6175a8b954b8a89e9a002c690cb46c6bee675d19867bf81764736f6c634300060c0033";
