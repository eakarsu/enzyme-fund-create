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
  "0x611314610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063c3525c2814610045578063e617042414610063575b600080fd5b61004d610083565b60405161005a9190611296565b60405180910390f35b61007661007136600461105e565b61008f565b60405161005a91906111de565b670de0b6b3a764000081565b60006100a86100a3368790038701876110f6565b6102be565b15806100f057506001600160a01b0389166000908152602087905260409020600701546100ee90600160a01b900460ff166100e8368890038801886110f6565b90610328565b155b156100fd575060016102b2565b610105610f6f565b6001600160a01b038a166000908152602088905260409020610126906103ad565b5084525060208301819052151590506101435760019150506102b2565b61015f8988610157368a90038a018a6110f6565b8888886103d8565b506080850152506060830181905260408301919091526101835760019150506102b2565b61021a8160000151600a0a6102148a866001600160a01b031663b3596f078f6040518263ffffffff1660e01b81526004016101be91906111ca565b60206040518083038186803b1580156101d657600080fd5b505afa1580156101ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020e9190611167565b90610b62565b90610ba3565b60a08201819052604082015161022f91610be5565b60c082018190526102445760009150506102b2565b6102838160c0015161021461026a84602001518560a00151610b6290919063ffffffff16565b6080850151604086015161027d91610b62565b90610be5565b60e0820181905260c082015160608301516000926102a2929190610c27565b670de0b6b3a76400001115925050505b98975050505050505050565b6000805b600260ff8216101561031d5782517f55555555555555555555555555555555555555555555555555555555555555559060ff83166002811061030057fe5b60200201511615610315576001915050610323565b6001016102c2565b50600090505b919050565b6000610100821060405180604001604052806002815260200161373760f01b815250906103715760405162461bcd60e51b815260040161036891906111e9565b60405180910390fd5b506000608083049050608083069250826002026001018460000151826002811061039757fe5b60200201516001911c1615159150505b92915050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b60008060008060006103e8610fc4565b6103f18a610c53565b1561040f576000806000806000199550955095509550955050610b54565b600060e08201525b878160e001511015610a385760e0810151610433908b90610c98565b61043c57610a28565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d90529020610473816103ad565b5060808601525060c0840190815260a084019190915260408051808201909152601881527f6c69717569646174696f6e5468726573686f6c643a2025640000000000000000602082015290516104c99190610d0a565b6080820151600a0a60208301526101e082015160405163b3596f0760e01b81526001600160a01b038a169163b3596f079161050791906004016111ca565b60206040518083038186803b15801561051f57600080fd5b505afa158015610533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105579190611167565b82526040805180820190915260148152731c995cd95c9d99555b9a5d141c9a58d94e88095960621b602082015282516105909190610d0a565b60c0820151158015906105ae575060e08201516105ae908c90610328565b156107e0578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016105f691906111ca565b60206040518083038186803b15801561060e57600080fd5b505afa158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106469190611167565b60408084019182528051808201909152601e81527f636f6d706f756e6465644c697175696469747942616c616e63653a20256400006020820152905161068c9190610d0a565b60006106b1836020015161021485604001518660000151610b6290919063ffffffff16565b90506106f26040518060400160405280601781526020017f6c697175696469747942616c616e63654554483a20256400000000000000000081525082610d0a565b6101208301516107029082610d53565b610120840190815260408051808201909152601881527f746f74616c436f6c6c61746572616c496e4554483a20256400000000000000006020820152905161074a9190610d0a565b6107706107648460a0015183610b6290919063ffffffff16565b61016085015190610d53565b61016084015260c08301516107969061078a908390610b62565b61018085015190610d53565b610180840190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a2025640000000000602082015290516107de9190610d0a565b505b60e08201516107f0908c90610d78565b15610a26578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040161083891906111ca565b60206040518083038186803b15801561085057600080fd5b505afa158015610864573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108889190611167565b6060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a2025640000000000602082015290516108cf9190610d0a565b6109708160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b815260040161091591906111ca565b60206040518083038186803b15801561092d57600080fd5b505afa158015610941573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109659190611167565b606084015190610d53565b6060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a2025640000000000602082015290516109b79190610d0a565b6109e96109dd836020015161021485606001518660000151610b6290919063ffffffff16565b61014084015190610d53565b61014083019081526040805180820190915260128152711d1bdd185b1119589d125b9155120e88095960721b60208201529051610a269190610d0a565b505b60e0810180516001019052610417565b600081610120015111610a4c576000610a61565b610120810151610160820151610a6191610ba3565b610160820152610120810151610a78576000610a8d565b610120810151610180820151610a8d91610ba3565b610180820190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a202564000000000060208201529051610ad59190610d0a565b610aef816101200151826101400151836101800151610c27565b610100820190815260408051808201909152601081526f1a19585b1d1a119858dd1bdc8e88095960821b60208201529051610b2a9190610d0a565b80610120015181610140015182610160015183610180015184610100015195509550955095509550505b965096509650965096915050565b600082610b71575060006103a7565b82820282848281610b7e57fe5b0414610b9c5760405162461bcd60e51b815260040161036890611255565b9392505050565b6000610b9c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610dd6565b6000610b9c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610e0d565b600082610c375750600019610b9c565b610c4b83610c458685610e39565b90610eab565b949350505050565b6000805b600260ff82161015610c8f57825160ff821660028110610c7357fe5b602002015115610c87576000915050610323565b600101610c57565b50600192915050565b6000610100821060405180604001604052806002815260200161373760f01b81525090610cd85760405162461bcd60e51b815260040161036891906111e9565b508251607f83169260809004906002808502919083908110610cf657fe5b6020020151901c6003161515949350505050565b610d4f8282604051602401610d209291906111fc565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610f4e565b5050565b600082820183811015610b9c5760405162461bcd60e51b81526004016103689061121e565b6000610100821060405180604001604052806002815260200161373760f01b81525090610db85760405162461bcd60e51b815260040161036891906111e9565b508251607f8316926080900490600280850291908390811061039757fe5b60008183610df75760405162461bcd60e51b815260040161036891906111e9565b506000838581610e0357fe5b0495945050505050565b60008184841115610e315760405162461bcd60e51b815260040161036891906111e9565b505050900390565b6000821580610e46575081155b15610e53575060006103a7565b816113881981610e5f57fe5b0483111560405180604001604052806002815260200161068760f31b81525090610e9c5760405162461bcd60e51b815260040161036891906111e9565b50506127109102611388010490565b604080518082019091526002815261035360f41b602082015260009082610ee55760405162461bcd60e51b815260040161036891906111e9565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115610f2f5760405162461bcd60e51b815260040161036891906111e9565b508281670de0b6b3a764000086020181610f4557fe5b04949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6040518061014001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b600080600080600080600080888a0361012081121561107b578485fd5b8935611086816112c6565b985060208a0135611096816112c6565b975060408a810135975060608b01359650607f19820112156110b6578485fd5b5060808901935060c0890135925060e089013591506101008901356001600160a01b03811681146110e5578182fd5b809150509295985092959890939650565b600060408284031215611107578081fd5b60206111128161129f565b84601f850112611120578283fd5b61112a604061129f565b80858760408801111561113b578586fd5b855b600281101561115a5781358452928501929085019060010161113d565b5050825250949350505050565b600060208284031215611178578081fd5b5051919050565b60008151808452815b818110156111a457602081850181015186830182015201611188565b818111156111b55782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b901515815260200190565b600060208252610b9c602083018461117f565b60006040825261120f604083018561117f565b90508260208301529392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff811182821017156112be57600080fd5b604052919050565b6001600160a01b03811681146112db57600080fd5b5056fea26469706673582212203d8a1fad6b71617dd584533fca5d45ddbffa40e99e220caa727ca46d3b17746464736f6c634300060c0033";
