/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { GenericLogic } from "./GenericLogic";

export class GenericLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GenericLogic> {
    return super.deploy(overrides || {}) as Promise<GenericLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GenericLogic {
    return super.attach(address) as GenericLogic;
  }
  connect(signer: Signer): GenericLogicFactory {
    return super.connect(signer) as GenericLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericLogic {
    return new Contract(address, _abi, signerOrProvider) as GenericLogic;
  }
}

const _abi = [
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
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
];

const _bytecode =
  "0x610fa3610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063c3525c2814610045578063e617042414610063575b600080fd5b61004d610083565b60405161005a9190610f3d565b60405180910390f35b610076610071366004610d42565b61008f565b60405161005a9190610e67565b670de0b6b3a764000081565b60006100a86100a336879003870187610dca565b6102be565b15806100f057506001600160a01b0389166000908152602087905260409020600701546100ee90600160a01b900460ff166100e836889003880188610dca565b90610328565b155b156100fd575060016102b2565b610105610c3c565b6001600160a01b038a166000908152602088905260409020610126906103ad565b5084525060208301819052151590506101435760019150506102b2565b61015f8988610157368a90038a018a610dca565b8888886103d8565b506080850152506060830181905260408301919091526101835760019150506102b2565b61021a8160000151600a0a6102148a866001600160a01b031663b3596f078f6040518263ffffffff1660e01b81526004016101be9190610e53565b60206040518083038186803b1580156101d657600080fd5b505afa1580156101ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020e9190610e3b565b90610899565b906108da565b60a08201819052604082015161022f9161091c565b60c082018190526102445760009150506102b2565b6102838160c0015161021461026a84602001518560a0015161089990919063ffffffff16565b6080850151604086015161027d91610899565b9061091c565b60e0820181905260c082015160608301516000926102a292919061095e565b670de0b6b3a76400001115925050505b98975050505050505050565b6000805b600260ff8216101561031d5782517f55555555555555555555555555555555555555555555555555555555555555559060ff83166002811061030057fe5b60200201511615610315576001915050610323565b6001016102c2565b50600090505b919050565b6000610100821060405180604001604052806002815260200161373760f01b815250906103715760405162461bcd60e51b81526004016103689190610e72565b60405180910390fd5b506000608083049050608083069250826002026001018460000151826002811061039757fe5b60200201516001911c1615159150505b92915050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b60008060008060006103e8610c91565b6103f18a61098a565b1561040f57600080600080600019955095509550955095505061088b565b600060e08201525b878160e0015110156107ea5760e0810151610433908b906109cf565b61043c576107da565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d90529020610473816103ad565b506080860181905260c08601929092525060a0840191909152600a0a60208301526101e082015160405163b3596f0760e01b81526001600160a01b038a169163b3596f07916104c59190600401610e53565b60206040518083038186803b1580156104dd57600080fd5b505afa1580156104f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105159190610e3b565b825260c082015115801590610535575060e0820151610535908c90610328565b15610653578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040161057d9190610e53565b60206040518083038186803b15801561059557600080fd5b505afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd9190610e3b565b60408301819052602083015183516000926105ec929161021491610899565b6101208401519091506105ff9082610a41565b61012084015260a083015161062590610619908390610899565b61016085015190610a41565b61016084015260c083015161064b9061063f908390610899565b61018085015190610a41565b610180840152505b60e0820151610663908c90610a66565b156107d8578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016106ab9190610e53565b60206040518083038186803b1580156106c357600080fd5b505afa1580156106d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fb9190610e3b565b8260600181815250506107a58160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b815260040161074a9190610e53565b60206040518083038186803b15801561076257600080fd5b505afa158015610776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079a9190610e3b565b606084015190610a41565b60608301819052602083015183516107d1926107c5929161021491610899565b61014084015190610a41565b6101408301525b505b60e0810180516001019052610417565b6000816101200151116107fe576000610813565b610120810151610160820151610813916108da565b61016082015261012081015161082a57600061083f565b61012081015161018082015161083f916108da565b610180820181905261012082015161014083015161085c9261095e565b610100820181905261012082015161014083015161016084015161018090940151919850965091945090925090505b965096509650965096915050565b6000826108a8575060006103a7565b828202828482816108b557fe5b04146108d35760405162461bcd60e51b815260040161036890610efc565b9392505050565b60006108d383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610ac4565b60006108d383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610afb565b60008261096e57506000196108d3565b6109828361097c8685610b27565b90610b99565b949350505050565b6000805b600260ff821610156109c657825160ff8216600281106109aa57fe5b6020020151156109be576000915050610323565b60010161098e565b50600192915050565b6000610100821060405180604001604052806002815260200161373760f01b81525090610a0f5760405162461bcd60e51b81526004016103689190610e72565b508251607f83169260809004906002808502919083908110610a2d57fe5b6020020151901c6003161515949350505050565b6000828201838110156108d35760405162461bcd60e51b815260040161036890610ec5565b6000610100821060405180604001604052806002815260200161373760f01b81525090610aa65760405162461bcd60e51b81526004016103689190610e72565b508251607f8316926080900490600280850291908390811061039757fe5b60008183610ae55760405162461bcd60e51b81526004016103689190610e72565b506000838581610af157fe5b0495945050505050565b60008184841115610b1f5760405162461bcd60e51b81526004016103689190610e72565b505050900390565b6000821580610b34575081155b15610b41575060006103a7565b816113881981610b4d57fe5b0483111560405180604001604052806002815260200161068760f31b81525090610b8a5760405162461bcd60e51b81526004016103689190610e72565b50506127109102611388010490565b604080518082019091526002815261035360f41b602082015260009082610bd35760405162461bcd60e51b81526004016103689190610e72565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115610c1d5760405162461bcd60e51b81526004016103689190610e72565b508281670de0b6b3a764000086020181610c3357fe5b04949350505050565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b80356001600160a01b03811681146103a757600080fd5b600080600080600080600080888a03610120811215610d5f578485fd5b610d698b8b610d2b565b9850610d788b60208c01610d2b565b975060408a810135975060608b01359650607f1982011215610d98578485fd5b5060808901935060c0890135925060e08901359150610dbb8a6101008b01610d2b565b90509295985092959890939650565b600060408284031215610ddb578081fd5b6020610de681610f46565b84601f850112610df4578283fd5b610dfe6040610f46565b808587604088011115610e0f578586fd5b855b6002811015610e2e57813584529285019290850190600101610e11565b5050825250949350505050565b600060208284031215610e4c578081fd5b5051919050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610e9e57858101830151858201604001528201610e82565b81811115610eaf5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff81118282101715610f6557600080fd5b60405291905056fea2646970667358221220759fb51d322a1ef680ed573fa4fa64a0eb505dca6d0b626ed6494345bc6961f564736f6c634300060c0033";