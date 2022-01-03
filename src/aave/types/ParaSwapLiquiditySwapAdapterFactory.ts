/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ParaSwapLiquiditySwapAdapter } from "./ParaSwapLiquiditySwapAdapter";

export class ParaSwapLiquiditySwapAdapterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    augustusRegistry: string,
    overrides?: Overrides
  ): Promise<ParaSwapLiquiditySwapAdapter> {
    return super.deploy(
      addressesProvider,
      augustusRegistry,
      overrides || {}
    ) as Promise<ParaSwapLiquiditySwapAdapter>;
  }
  getDeployTransaction(
    addressesProvider: string,
    augustusRegistry: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressesProvider,
      augustusRegistry,
      overrides || {}
    );
  }
  attach(address: string): ParaSwapLiquiditySwapAdapter {
    return super.attach(address) as ParaSwapLiquiditySwapAdapter;
  }
  connect(signer: Signer): ParaSwapLiquiditySwapAdapterFactory {
    return super.connect(signer) as ParaSwapLiquiditySwapAdapterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParaSwapLiquiditySwapAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ParaSwapLiquiditySwapAdapter;
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
      {
        internalType: "contract IParaSwapAugustusRegistry",
        name: "augustusRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "Swapped",
    type: "event",
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
    name: "AUGUSTUS_REGISTRY",
    outputs: [
      {
        internalType: "contract IParaSwapAugustusRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LENDING_POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SLIPPAGE_PERCENT",
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
    name: "ORACLE",
    outputs: [
      {
        internalType: "contract IPriceOracleGetter",
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
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Detailed",
        name: "assetToSwapFrom",
        type: "address",
      },
      {
        internalType: "contract IERC20Detailed",
        name: "assetToSwapTo",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountToSwap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountToReceive",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "swapAllBalanceOffset",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "swapCalldata",
        type: "bytes",
      },
      {
        internalType: "contract IParaSwapAugustus",
        name: "augustus",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct BaseParaSwapAdapter.PermitSignature",
        name: "permitParams",
        type: "tuple",
      },
    ],
    name: "swapAndDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620027d1380380620027d18339810160408190526200003591620002af565b81818180806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb919062000267565b60601b6001600160601b03191660a052506000620000e862000263565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350806001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200016c57600080fd5b505afa15801562000181573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a7919062000267565b60601b6001600160601b03191660c0525060405163fb04e17b60e01b81526001600160a01b0382169063fb04e17b90620001e790600090600401620002ed565b60206040518083038186803b1580156200020057600080fd5b505afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b91906200028d565b156200024657600080fd5b60601b6001600160601b03191660e052505060018055506200031a565b3390565b60006020828403121562000279578081fd5b8151620002868162000301565b9392505050565b6000602082840312156200029f578081fd5b8151801515811462000286578182fd5b60008060408385031215620002c2578081fd5b8251620002cf8162000301565b6020840151909250620002e28162000301565b809150509250929050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146200031757600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6124346200039d6000398061028c5280610cf05250806102685280611538525080610371528061049d5280610623528061065852806106945280610943528061097852806109b45280610a505280610a7b5280610ae45280610c2752508061023e52506124346000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101055780638da5cb5b1461010d578063920f5c8414610115578063b4dcfc7714610135578063d3454a351461013d578063f2fde38b14610150576100a8565b8062ae3bf8146100ad5780630542975c146100c257806332e4b286146100e057806338013f02146100f55780633a829867146100fd575b600080fd5b6100c06100bb366004611954565b610163565b005b6100ca61023c565b6040516100d79190611d6b565b60405180910390f35b6100e8610260565b6040516100d79190612370565b6100ca610266565b6100ca61028a565b6100c06102ae565b6100ca61032d565b61012861012336600461198c565b61033c565b6040516100d79190611e67565b6100ca61049b565b6100c061014b366004611a82565b6104bf565b6100c061015e366004611954565b610713565b61016b6107c9565b6000546001600160a01b039081169116146101a15760405162461bcd60e51b815260040161019890612151565b60405180910390fd5b6102396101ac61032d565b6040516370a0823160e01b81526001600160a01b038416906370a08231906101d8903090600401611d6b565b60206040518083038186803b1580156101f057600080fd5b505afa158015610204573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102289190611d1b565b6001600160a01b03841691906107cd565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102b66107c9565b6000546001600160a01b039081169116146102e35760405162461bcd60e51b815260040161019890612151565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000600260015414156103615760405162461bcd60e51b815260040161019890612207565b6002600155336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103ae5760405162461bcd60e51b815260040161019890611edc565b6001891480156103be5750600187145b80156103ca5750600185145b6103e65760405162461bcd60e51b815260040161019890611f90565b6000888860008181106103f557fe5b90506020020135905060008787600081811061040d57fe5b905060200201359050600086905060008d8d600081811061042a57fe5b905060200201602081019061043f9190611954565b905060008060006060600061045261174a565b61045e8c8e018e611b33565b95509550955095509550955061047c848484848e8e8e8e8e8e610828565b60019a5050505050505050505050600180559998505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600260015414156104e25760405162461bcd60e51b815260040161019890612207565b600260015560006104f28a610ac5565b60e00151905085156105a2576040516370a0823160e01b81526000906001600160a01b038316906370a082319061052d903390600401611d6b565b60206040518083038186803b15801561054557600080fd5b505afa158015610559573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057d9190611d1b565b90508881111561059f5760405162461bcd60e51b8152600401610198906122cb565b97505b6105bd8a82338b6105b836889003880188611c05565b610b70565b60006106128787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050868e8e8e8e610cd6565b90506106496001600160a01b038b167f00000000000000000000000000000000000000000000000000000000000000006000611247565b61067d6001600160a01b038b167f000000000000000000000000000000000000000000000000000000000000000083611247565b60405163e8eda9df60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df906106d0908d9085903390600090600401611e3a565b600060405180830381600087803b1580156106ea57600080fd5b505af11580156106fe573d6000803e3d6000fd5b50506001805550505050505050505050505050565b61071b6107c9565b6000546001600160a01b039081169116146107485760405162461bcd60e51b815260040161019890612151565b6001600160a01b03811661076e5760405162461bcd60e51b815260040161019890611f13565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6108238363a9059cbb60e01b84846040516024016107ec929190611dfe565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261130a565b505050565b600061083384610ac5565b60e001516040516370a0823160e01b815290915087906000906001600160a01b038416906370a082319061086b908a90600401611d6b565b60206040518083038186803b15801561088357600080fd5b505afa158015610897573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bb9190611d1b565b90508c156108f85760006108cf828a6113f5565b9050828111156108f15760405162461bcd60e51b8152600401610198906122cb565b9150610921565b610902828961143e565b8110156109215760405162461bcd60e51b815260040161019890611ea5565b60006109328e8e8e8a8a888b610cd6565b90506109696001600160a01b0387167f00000000000000000000000000000000000000000000000000000000000000006000611247565b61099d6001600160a01b0387167f000000000000000000000000000000000000000000000000000000000000000083611247565b60405163e8eda9df60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df906109f090899085908d90600090600401611e3a565b600060405180830381600087803b158015610a0a57600080fd5b505af1158015610a1e573d6000803e3d6000fd5b50505050610a4187858a610a3b8d8861143e90919063ffffffff16565b8f610b70565b610a766001600160a01b0388167f00000000000000000000000000000000000000000000000000000000000000006000611247565b610ab57f0000000000000000000000000000000000000000000000000000000000000000610aa48c8c61143e565b6001600160a01b038a169190611247565b5050505050505050505050505050565b610acd611778565b6040516335ea6a7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a7590610b19908590600401611d6b565b6101806040518083038186803b158015610b3257600080fd5b505afa158015610b46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6a9190611c20565b92915050565b602081015115610bf957836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b8152600401610bc69796959493929190611dbd565b600060405180830381600087803b158015610be057600080fd5b505af1158015610bf4573d6000803e3d6000fd5b505050505b610c0e6001600160a01b038516843085611463565b604051631a4ca37b60e21b815282906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec90610c6090899085903090600401611e17565b602060405180830381600087803b158015610c7a57600080fd5b505af1158015610c8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb29190611d1b565b14610ccf5760405162461bcd60e51b8152600401610198906120d9565b5050505050565b60405163fb04e17b60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063fb04e17b90610d25908990600401611d6b565b60206040518083038186803b158015610d3d57600080fd5b505afa158015610d51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d759190611a62565b610d915760405162461bcd60e51b815260040161019890611fd7565b6000610d9c86611484565b60ff1690506000610dac86611484565b60ff1690506000610dbc8861151e565b90506000610dc98861151e565b90506000610e08611b58610e02610de485600a8a900a6115bd565b610dfc610df588600a8b900a6115bd565b8d906115bd565b906115f7565b90611639565b905086811115610e2a5760405162461bcd60e51b8152600401610198906120a2565b50506040516370a0823160e01b8152600093506001600160a01b03891692506370a082319150610e5e903090600401611d6b565b60206040518083038186803b158015610e7657600080fd5b505afa158015610e8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eae9190611d1b565b905083811015610ed05760405162461bcd60e51b815260040161019890612036565b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190610eff903090600401611d6b565b60206040518083038186803b158015610f1757600080fd5b505afa158015610f2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4f9190611d1b565b90506000886001600160a01b031663d2c4b5986040518163ffffffff1660e01b815260040160206040518083038186803b158015610f8c57600080fd5b505afa158015610fa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc49190611970565b9050610fdb6001600160a01b038916826000611247565b610fef6001600160a01b0389168288611247565b8a156110375760048b101580156110125750895161100e9060206113f5565b8b11155b61102e5760405162461bcd60e51b815260040161019890612302565b8560208c018b01525b6000896001600160a01b03168b6040516110519190611d4f565b6000604051808303816000865af19150503d806000811461108e576040519150601f19603f3d011682016040523d82523d6000602084013e611093565b606091505b50509050806110a6573d6000803e3d6000fd5b6040516370a0823160e01b8152878503906001600160a01b038b16906370a08231906110d6903090600401611d6b565b60206040518083038186803b1580156110ee57600080fd5b505afa158015611102573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111269190611d1b565b146111435760405162461bcd60e51b815260040161019890612186565b6111c983896001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016111739190611d6b565b60206040518083038186803b15801561118b57600080fd5b505afa15801561119f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c39190611d1b565b906113f5565b9450858510156111eb5760405162461bcd60e51b81526004016101989061206b565b876001600160a01b0316896001600160a01b03167fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb8988604051611230929190612379565b60405180910390a350505050979650505050505050565b8015806112cf5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e9061127d9030908690600401611d7f565b60206040518083038186803b15801561129557600080fd5b505afa1580156112a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cd9190611d1b565b155b6112eb5760405162461bcd60e51b81526004016101989061223e565b6108238363095ea7b360e01b84846040516024016107ec929190611dfe565b61131c826001600160a01b03166116ab565b6113385760405162461bcd60e51b815260040161019890612294565b60006060836001600160a01b0316836040516113549190611d4f565b6000604051808303816000865af19150503d8060008114611391576040519150601f19603f3d011682016040523d82523d6000602084013e611396565b606091505b5091509150816113b85760405162461bcd60e51b815260040161019890612001565b8051156113ef57808060200190518101906113d39190611a62565b6113ef5760405162461bcd60e51b8152600401610198906121bd565b50505050565b600061143783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506116e7565b9392505050565b6000828201838110156114375760405162461bcd60e51b815260040161019890611f59565b6113ef846323b872dd60e01b8585856040516024016107ec93929190611d99565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156114c057600080fd5b505afa1580156114d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f89190611d33565b9050604d8160ff161115610b6a5760405162461bcd60e51b815260040161019890612339565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f079061156d908590600401611d6b565b60206040518083038186803b15801561158557600080fd5b505afa158015611599573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6a9190611d1b565b6000826115cc57506000610b6a565b828202828482816115d957fe5b04146114375760405162461bcd60e51b815260040161019890612110565b600061143783836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611713565b6000821580611646575081155b1561165357506000610b6a565b81611388198161165f57fe5b0483111560405180604001604052806002815260200161068760f31b8152509061169c5760405162461bcd60e51b81526004016101989190611e72565b50506127109102611388010490565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906116df57508115155b949350505050565b6000818484111561170b5760405162461bcd60e51b81526004016101989190611e72565b505050900390565b600081836117345760405162461bcd60e51b81526004016101989190611e72565b50600083858161174057fe5b0495945050505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60405180610180016040528061178c6117e3565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060200160405280600081525090565b8051610b6a816123da565b60008083601f840112611812578182fd5b50813567ffffffffffffffff811115611829578182fd5b602083019150836020808302850101111561184357600080fd5b9250929050565b60008083601f84011261185b578182fd5b50813567ffffffffffffffff811115611872578182fd5b60208301915083602082850101111561184357600080fd5b8035610b6a816123da565b600060a082840312156118a6578081fd5b6118b060a0612387565b9050813581526020820135602082015260408201356118ce816123ef565b80604083015250606082013560608201526080820135608082015292915050565b600060208284031215611900578081fd5b61190a6020612387565b9151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610b6a57600080fd5b805164ffffffffff81168114610b6a57600080fd5b8051610b6a816123ef565b600060208284031215611965578081fd5b8135611437816123da565b600060208284031215611981578081fd5b8151611437816123da565b600080600080600080600080600060a08a8c0312156119a9578485fd5b893567ffffffffffffffff808211156119c0578687fd5b6119cc8d838e01611801565b909b50995060208c01359150808211156119e4578687fd5b6119f08d838e01611801565b909950975060408c0135915080821115611a08578687fd5b611a148d838e01611801565b909750955060608c01359150611a29826123da565b90935060808b01359080821115611a3e578384fd5b50611a4b8c828d0161184a565b915080935050809150509295985092959850929598565b600060208284031215611a73578081fd5b81518015158114611437578182fd5b6000806000806000806000806000898b03610180811215611aa1578384fd5b8a35611aac816123da565b995060208b0135611abc816123da565b985060408b0135975060608b0135965060808b0135955060a08b013567ffffffffffffffff811115611aec578485fd5b611af88d828e0161184a565b90965094505060c08b0135611b0c816123da565b925060a060df1982011215611b1f578182fd5b5060e08a0190509295985092959850929598565b6000806000806000806101408789031215611b4c578384fd5b8635611b57816123da565b9550602087810135955060408801359450606088013567ffffffffffffffff80821115611b82578485fd5b818a0191508a601f830112611b95578485fd5b813581811115611ba3578586fd5b611bb5601f8201601f19168501612387565b91508082528b84828501011115611bca578586fd5b80848401858401378101909201849052509250611bea886080890161188a565b9150611bf98860a08901611895565b90509295509295509295565b600060a08284031215611c16578081fd5b6114378383611895565b6000610180808385031215611c33578182fd5b611c3c81612387565b9050611c4884846118ef565b8152611c578460208501611914565b6020820152611c698460408501611914565b6040820152611c7b8460608501611914565b6060820152611c8d8460808501611914565b6080820152611c9f8460a08501611914565b60a0820152611cb18460c08501611934565b60c0820152611cc38460e085016117f6565b60e0820152610100611cd7858286016117f6565b90820152610120611cea858583016117f6565b90820152610140611cfd858583016117f6565b90820152610160611d1085858301611949565b908201529392505050565b600060208284031215611d2c578081fd5b5051919050565b600060208284031215611d44578081fd5b8151611437816123ef565b60008251611d618184602087016123ae565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b901515815260200190565b6000602082528251806020840152611e918160408501602087016123ae565b601f01601f19169190910160400192915050565b6020808252601b908201527f494e53554646494349454e545f41544f4b454e5f42414c414e43450000000000604082015260600190565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526027908201527f464c4153484c4f414e5f4d554c5449504c455f4153534554535f4e4f545f5355604082015266141413d495115160ca1b606082015260800190565b60208082526010908201526f494e56414c49445f415547555354555360801b604082015260600190565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b6020808252818101527f494e53554646494349454e545f42414c414e43455f4245464f52455f53574150604082015260600190565b6020808252601c908201527f494e53554646494349454e545f414d4f554e545f524543454956454400000000604082015260600190565b6020808252601f908201527f4d494e5f414d4f554e545f455843454544535f4d41585f534c49505041474500604082015260600190565b6020808252601b908201527f554e45585045435445445f414d4f554e545f57495448445241574e0000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f57524f4e475f42414c414e43455f41465445525f535741500000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b6020808252601b908201527f494e53554646494349454e545f414d4f554e545f544f5f535741500000000000604082015260600190565b6020808252601f908201527f46524f4d5f414d4f554e545f4f46465345545f4f55545f4f465f52414e474500604082015260600190565b6020808252601a908201527f544f4f5f4d414e595f444543494d414c535f4f4e5f544f4b454e000000000000604082015260600190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff811182821017156123a657600080fd5b604052919050565b60005b838110156123c95781810151838201526020016123b1565b838111156113ef5750506000910152565b6001600160a01b038116811461023957600080fd5b60ff8116811461023957600080fdfea26469706673582212204901a567c19328c157ec85f4ef0259dffd9e25b753f6de4eb78082482842a42a64736f6c634300060c0033";
