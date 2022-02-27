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
  "0x6101006040523480156200001257600080fd5b5060405162002888380380620028888339810160408190526200003591620002af565b81818180806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb919062000267565b60601b6001600160601b03191660a052506000620000e862000263565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350806001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200016c57600080fd5b505afa15801562000181573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a7919062000267565b60601b6001600160601b03191660c0525060405163fb04e17b60e01b81526001600160a01b0382169063fb04e17b90620001e790600090600401620002ed565b60206040518083038186803b1580156200020057600080fd5b505afa15801562000215573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023b91906200028d565b156200024657600080fd5b60601b6001600160601b03191660e052505060018055506200031a565b3390565b60006020828403121562000279578081fd5b8151620002868162000301565b9392505050565b6000602082840312156200029f578081fd5b8151801515811462000286578182fd5b60008060408385031215620002c2578081fd5b8251620002cf8162000301565b6020840151909250620002e28162000301565b809150509250929050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146200031757600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6124eb6200039d600039806102f75280610d6e5250806102d352806114e65250806103dc5280610508528061068e52806106c352806106ff5280610953528061098852806109c45280610a605280610a8b5280610af45280610ca55250806102a952506124eb6000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c8063715018a611610071578063715018a6146101055780638da5cb5b1461010d578063920f5c8414610115578063b4dcfc7714610135578063d3454a351461013d578063f2fde38b14610150576100a8565b8062ae3bf8146100ad5780630542975c146100c257806332e4b286146100e057806338013f02146100f55780633a829867146100fd575b600080fd5b6100c06100bb3660046119f5565b610163565b005b6100ca6102a7565b6040516100d79190611e1f565b60405180910390f35b6100e86102cb565b6040516100d79190612424565b6100ca6102d1565b6100ca6102f5565b6100c0610319565b6100ca610398565b610128610123366004611a2d565b6103a7565b6040516100d79190611f1b565b6100ca610506565b6100c061014b366004611b23565b61052a565b6100c061015e3660046119f5565b61077e565b61016b610834565b6000546001600160a01b039081169116146101a15760405162461bcd60e51b815260040161019890612205565b60405180910390fd5b806001600160a01b031663a9059cbb6101b8610398565b6040516370a0823160e01b81526001600160a01b038516906370a08231906101e4903090600401611e1f565b60206040518083038186803b1580156101fc57600080fd5b505afa158015610210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102349190611dcf565b6040518363ffffffff1660e01b8152600401610251929190611eb2565b602060405180830381600087803b15801561026b57600080fd5b505af115801561027f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a39190611b03565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b610321610834565b6000546001600160a01b0390811691161461034e5760405162461bcd60e51b815260040161019890612205565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000600260015414156103cc5760405162461bcd60e51b8152600401610198906122bb565b6002600155336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104195760405162461bcd60e51b815260040161019890611f90565b6001891480156104295750600187145b80156104355750600185145b6104515760405162461bcd60e51b815260040161019890612044565b60008888600081811061046057fe5b90506020020135905060008787600081811061047857fe5b905060200201359050600086905060008d8d600081811061049557fe5b90506020020160208101906104aa91906119f5565b90506000806000606060006104bd6117e3565b6104c98c8e018e611bd4565b9550955095509550955095506104e7848484848e8e8e8e8e8e610838565b60019a5050505050505050505050600180559998505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6002600154141561054d5760405162461bcd60e51b8152600401610198906122bb565b6002600155600061055d8a610ad5565b60e001519050851561060d576040516370a0823160e01b81526000906001600160a01b038316906370a0823190610598903390600401611e1f565b60206040518083038186803b1580156105b057600080fd5b505afa1580156105c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e89190611dcf565b90508881111561060a5760405162461bcd60e51b81526004016101989061237f565b97505b6106288a82338b61062336889003880188611ca6565b610b80565b600061067d8787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050868e8e8e8e610d54565b90506106b46001600160a01b038b167f000000000000000000000000000000000000000000000000000000000000000060006112c5565b6106e86001600160a01b038b167f0000000000000000000000000000000000000000000000000000000000000000836112c5565b60405163e8eda9df60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df9061073b908d9085903390600090600401611eee565b600060405180830381600087803b15801561075557600080fd5b505af1158015610769573d6000803e3d6000fd5b50506001805550505050505050505050505050565b610786610834565b6000546001600160a01b039081169116146107b35760405162461bcd60e51b815260040161019890612205565b6001600160a01b0381166107d95760405162461bcd60e51b815260040161019890611fc7565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b600061084384610ad5565b60e001516040516370a0823160e01b815290915087906000906001600160a01b038416906370a082319061087b908a90600401611e1f565b60206040518083038186803b15801561089357600080fd5b505afa1580156108a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cb9190611dcf565b90508c156109085760006108df828a6113c4565b9050828111156109015760405162461bcd60e51b81526004016101989061237f565b9150610931565b610912828961140d565b8110156109315760405162461bcd60e51b815260040161019890611f59565b60006109428e8e8e8a8a888b610d54565b90506109796001600160a01b0387167f000000000000000000000000000000000000000000000000000000000000000060006112c5565b6109ad6001600160a01b0387167f0000000000000000000000000000000000000000000000000000000000000000836112c5565b60405163e8eda9df60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e8eda9df90610a0090899085908d90600090600401611eee565b600060405180830381600087803b158015610a1a57600080fd5b505af1158015610a2e573d6000803e3d6000fd5b50505050610a5187858a610a4b8d8861140d90919063ffffffff16565b8f610b80565b610a866001600160a01b0388167f000000000000000000000000000000000000000000000000000000000000000060006112c5565b610ac57f0000000000000000000000000000000000000000000000000000000000000000610ab48c8c61140d565b6001600160a01b038a1691906112c5565b5050505050505050505050505050565b610add611811565b6040516335ea6a7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a7590610b29908590600401611e1f565b6101a06040518083038186803b158015610b4257600080fd5b505afa158015610b56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7a9190611cc1565b92915050565b602081015115610c0957836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b8152600401610bd69796959493929190611e71565b600060405180830381600087803b158015610bf057600080fd5b505af1158015610c04573d6000803e3d6000fd5b505050505b6040516323b872dd60e01b81526001600160a01b038516906323b872dd90610c3990869030908790600401611e4d565b602060405180830381600087803b158015610c5357600080fd5b505af1158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190611b03565b50604051631a4ca37b60e21b815282906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec90610cde90899085903090600401611ecb565b602060405180830381600087803b158015610cf857600080fd5b505af1158015610d0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d309190611dcf565b14610d4d5760405162461bcd60e51b81526004016101989061218d565b5050505050565b60405163fb04e17b60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063fb04e17b90610da3908990600401611e1f565b60206040518083038186803b158015610dbb57600080fd5b505afa158015610dcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df39190611b03565b610e0f5760405162461bcd60e51b81526004016101989061208b565b6000610e1a86611432565b60ff1690506000610e2a86611432565b60ff1690506000610e3a886114cc565b90506000610e47886114cc565b90506000610e86611b58610e80610e6285600a8a900a61156b565b610e7a610e7388600a8b900a61156b565b8d9061156b565b906115a5565b906115e7565b905086811115610ea85760405162461bcd60e51b815260040161019890612156565b50506040516370a0823160e01b8152600093506001600160a01b03891692506370a082319150610edc903090600401611e1f565b60206040518083038186803b158015610ef457600080fd5b505afa158015610f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2c9190611dcf565b905083811015610f4e5760405162461bcd60e51b8152600401610198906120ea565b6040516370a0823160e01b81526000906001600160a01b038716906370a0823190610f7d903090600401611e1f565b60206040518083038186803b158015610f9557600080fd5b505afa158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcd9190611dcf565b90506000886001600160a01b031663d2c4b5986040518163ffffffff1660e01b815260040160206040518083038186803b15801561100a57600080fd5b505afa15801561101e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110429190611a11565b90506110596001600160a01b0389168260006112c5565b61106d6001600160a01b03891682886112c5565b8a156110b55760048b101580156110905750895161108c9060206113c4565b8b11155b6110ac5760405162461bcd60e51b8152600401610198906123b6565b8560208c018b01525b6000896001600160a01b03168b6040516110cf9190611e03565b6000604051808303816000865af19150503d806000811461110c576040519150601f19603f3d011682016040523d82523d6000602084013e611111565b606091505b5050905080611124573d6000803e3d6000fd5b6040516370a0823160e01b8152878503906001600160a01b038b16906370a0823190611154903090600401611e1f565b60206040518083038186803b15801561116c57600080fd5b505afa158015611180573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a49190611dcf565b146111c15760405162461bcd60e51b81526004016101989061223a565b61124783896001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016111f19190611e1f565b60206040518083038186803b15801561120957600080fd5b505afa15801561121d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112419190611dcf565b906113c4565b9450858510156112695760405162461bcd60e51b81526004016101989061211f565b876001600160a01b0316896001600160a01b03167fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb89886040516112ae92919061242d565b60405180910390a350505050979650505050505050565b80158061134d5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e906112fb9030908690600401611e33565b60206040518083038186803b15801561131357600080fd5b505afa158015611327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134b9190611dcf565b155b6113695760405162461bcd60e51b8152600401610198906122f2565b6113bf8363095ea7b360e01b8484604051602401611388929190611eb2565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611659565b505050565b600061140683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611744565b9392505050565b6000828201838110156114065760405162461bcd60e51b81526004016101989061200d565b600080826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561146e57600080fd5b505afa158015611482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a69190611de7565b9050604d8160ff161115610b7a5760405162461bcd60e51b8152600401610198906123ed565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f079061151b908590600401611e1f565b60206040518083038186803b15801561153357600080fd5b505afa158015611547573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7a9190611dcf565b60008261157a57506000610b7a565b8282028284828161158757fe5b04146114065760405162461bcd60e51b8152600401610198906121c4565b600061140683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611770565b60008215806115f4575081155b1561160157506000610b7a565b81611388198161160d57fe5b0483111560405180604001604052806002815260200161068760f31b8152509061164a5760405162461bcd60e51b81526004016101989190611f26565b50506127109102611388010490565b61166b826001600160a01b03166117a7565b6116875760405162461bcd60e51b815260040161019890612348565b60006060836001600160a01b0316836040516116a39190611e03565b6000604051808303816000865af19150503d80600081146116e0576040519150601f19603f3d011682016040523d82523d6000602084013e6116e5565b606091505b5091509150816117075760405162461bcd60e51b8152600401610198906120b5565b80511561173e57808060200190518101906117229190611b03565b61173e5760405162461bcd60e51b815260040161019890612271565b50505050565b600081848411156117685760405162461bcd60e51b81526004016101989190611f26565b505050900390565b600081836117915760405162461bcd60e51b81526004016101989190611f26565b50600083858161179d57fe5b0495945050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906117db57508115155b949350505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806101a00160405280611825611884565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201819052610140820181905261016082018190526101809091015290565b6040518060200160405280600081525090565b8051610b7a8161248e565b60008083601f8401126118b3578182fd5b50813567ffffffffffffffff8111156118ca578182fd5b60208301915083602080830285010111156118e457600080fd5b9250929050565b60008083601f8401126118fc578182fd5b50813567ffffffffffffffff811115611913578182fd5b6020830191508360208285010111156118e457600080fd5b8035610b7a8161248e565b600060a08284031215611947578081fd5b61195160a061243b565b90508135815260208201356020820152604082013561196f816124a6565b80604083015250606082013560608201526080820135608082015292915050565b6000602082840312156119a1578081fd5b6119ab602061243b565b9151825250919050565b80516fffffffffffffffffffffffffffffffff81168114610b7a57600080fd5b805164ffffffffff81168114610b7a57600080fd5b8051610b7a816124a6565b600060208284031215611a06578081fd5b81356114068161248e565b600060208284031215611a22578081fd5b81516114068161248e565b600080600080600080600080600060a08a8c031215611a4a578485fd5b893567ffffffffffffffff80821115611a61578687fd5b611a6d8d838e016118a2565b909b50995060208c0135915080821115611a85578687fd5b611a918d838e016118a2565b909950975060408c0135915080821115611aa9578687fd5b611ab58d838e016118a2565b909750955060608c01359150611aca8261248e565b90935060808b01359080821115611adf578384fd5b50611aec8c828d016118eb565b915080935050809150509295985092959850929598565b600060208284031215611b14578081fd5b81518015158114611406578182fd5b6000806000806000806000806000898b03610180811215611b42578384fd5b8a35611b4d8161248e565b995060208b0135611b5d8161248e565b985060408b0135975060608b0135965060808b0135955060a08b013567ffffffffffffffff811115611b8d578485fd5b611b998d828e016118eb565b90965094505060c08b0135611bad8161248e565b925060a060df1982011215611bc0578182fd5b5060e08a0190509295985092959850929598565b6000806000806000806101408789031215611bed578384fd5b8635611bf88161248e565b9550602087810135955060408801359450606088013567ffffffffffffffff80821115611c23578485fd5b818a0191508a601f830112611c36578485fd5b813581811115611c44578586fd5b611c56601f8201601f1916850161243b565b91508082528b84828501011115611c6b578586fd5b80848401858401378101909201849052509250611c8b886080890161192b565b9150611c9a8860a08901611936565b90509295509295509295565b600060a08284031215611cb7578081fd5b6114068383611936565b60006101a0808385031215611cd4578182fd5b611cdd8161243b565b9050611ce98484611990565b8152611cf884602085016119b5565b6020820152611d0a84604085016119b5565b6040820152611d1c84606085016119b5565b6060820152611d2e84608085016119b5565b6080820152611d408460a085016119b5565b60a0820152611d528460c085016119d5565b60c0820152611d648460e08501611897565b60e0820152610100611d7885828601611897565b90820152610120611d8b85858301611897565b90820152610140611d9e85858301611897565b90820152610160611db1858583016119ea565b90820152610180611dc485858301611897565b908201529392505050565b600060208284031215611de0578081fd5b5051919050565b600060208284031215611df8578081fd5b8151611406816124a6565b60008251611e15818460208701612462565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b901515815260200190565b6000602082528251806020840152611f45816040850160208701612462565b601f01601f19169190910160400192915050565b6020808252601b908201527f494e53554646494349454e545f41544f4b454e5f42414c414e43450000000000604082015260600190565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526027908201527f464c4153484c4f414e5f4d554c5449504c455f4153534554535f4e4f545f5355604082015266141413d495115160ca1b606082015260800190565b60208082526010908201526f494e56414c49445f415547555354555360801b604082015260600190565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b6020808252818101527f494e53554646494349454e545f42414c414e43455f4245464f52455f53574150604082015260600190565b6020808252601c908201527f494e53554646494349454e545f414d4f554e545f524543454956454400000000604082015260600190565b6020808252601f908201527f4d494e5f414d4f554e545f455843454544535f4d41585f534c49505041474500604082015260600190565b6020808252601b908201527f554e45585045435445445f414d4f554e545f57495448445241574e0000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f57524f4e475f42414c414e43455f41465445525f535741500000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b6020808252601b908201527f494e53554646494349454e545f414d4f554e545f544f5f535741500000000000604082015260600190565b6020808252601f908201527f46524f4d5f414d4f554e545f4f46465345545f4f55545f4f465f52414e474500604082015260600190565b6020808252601a908201527f544f4f5f4d414e595f444543494d414c535f4f4e5f544f4b454e000000000000604082015260600190565b90815260200190565b918252602082015260400190565b60405181810167ffffffffffffffff8111828210171561245a57600080fd5b604052919050565b60005b8381101561247d578181015183820152602001612465565b8381111561173e5750506000910152565b6001600160a01b03811681146124a357600080fd5b50565b60ff811681146124a357600080fdfea26469706673582212207e3beed59bbb36cc0fa1e2fad5ab667f52958169b781e087f85106f284131e1364736f6c634300060c0033";
