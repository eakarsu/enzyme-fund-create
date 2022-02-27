/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ValidationLogic } from "./ValidationLogic";

export class ValidationLogicFactory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ValidationLogicLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      ValidationLogicFactory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: ValidationLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$52a8a86ab43135662ff256bbc95497e8e3\\$__", "g"),
      linkLibraryAddresses["__$52a8a86ab43135662ff256bbc95497e8e3$__"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(overrides?: Overrides): Promise<ValidationLogic> {
    return super.deploy(overrides || {}) as Promise<ValidationLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ValidationLogic {
    return super.attach(address) as ValidationLogic;
  }
  connect(signer: Signer): ValidationLogicFactory {
    return super.connect(signer) as ValidationLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidationLogic {
    return new Contract(address, _abi, signerOrProvider) as ValidationLogic;
  }
}

const _abi = [
  {
    inputs: [],
    name: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
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
    name: "REBALANCE_UP_USAGE_RATIO_THRESHOLD",
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
  "0x612500610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063721a92f911610070578063721a92f9146100fb578063a8695b1d1461010e578063abfcc86a14610121578063d09db04a14610129578063fa0c21491461013c5761009d565b80630eca322b146100a2578063548cad09146100b75780635494eb8a146100ca5780635fa297e5146100e8575b600080fd5b6100b56100b0366004612282565b61014f565b005b6100b56100c53660046121da565b610217565b6100d261050d565b6040516100df919061249b565b60405180910390f35b6100b56100f6366004612170565b61051d565b6100b561010936600461203e565b6106c2565b6100b561011c366004612241565b610be9565b6100d2610eb2565b6100b56101373660046120e2565b610eb8565b6100b561014a3660046122a3565b611056565b60008061015b8461119c565b50506040805180820190915260018152603160f81b60208201529193509150836101a15760405162461bcd60e51b815260040161019891906123ee565b60405180910390fd5b506040805180820190915260018152601960f91b6020820152826101d85760405162461bcd60e51b815260040161019891906123ee565b506040805180820190915260018152603360f81b602082015281156102105760405162461bcd60e51b815260040161019891906123ee565b5050505050565b60006102228661119c565b505050905080604051806040016040528060018152602001601960f91b815250906102605760405162461bcd60e51b815260040161019891906123ee565b506000610356610351856001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a257600080fd5b505afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190612301565b876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561031357600080fd5b505afa158015610327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034b9190612301565b906111d4565b611202565b905060006103d9876001600160a01b03166370a08231866040518263ffffffff1660e01b81526004016103899190612364565b60206040518083038186803b1580156103a157600080fd5b505afa1580156103b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103519190612301565b9050600082156103fc576103f76103f083856111d4565b8490611254565b6103ff565b60005b60028a015460078b0154604080516380031e3760e01b815290519394506fffffffffffffffffffffffffffffffff909216926000926001600160a01b03909216916380031e37916004808301926020929190829003018186803b15801561046557600080fd5b505afa158015610479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049d9190612301565b90506b0311d253316c79d37600000083101580156104c657506104c281610fa06112ff565b8211155b60405180604001604052806002815260200161191960f11b815250906104ff5760405162461bcd60e51b815260040161019891906123ee565b505050505050505050505050565b6b0311d253316c79d37600000081565b6004808901546040516370a0823160e01b81526000926001600160a01b03909216916370a082319161055191339101612364565b60206040518083038186803b15801561056957600080fd5b505afa15801561057d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a19190612301565b90506000811160405180604001604052806002815260200161313960f01b815250906105e05760405162461bcd60e51b815260040161019891906123ee565b50868061067d5750604051633985c10960e21b815273__$52a8a86ab43135662ff256bbc95497e8e3$__9063e61704249061062d908b90339086908c908c908c908c908c90600401612378565b60206040518083038186803b15801561064557600080fd5b505af4158015610659573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067d9190612154565b60405180604001604052806002815260200161032360f41b815250906106b65760405162461bcd60e51b815260040161019891906123ee565b50505050505050505050565b6106ca611f42565b6106d38c61119c565b151561014085015215156101208401521515610100830152151560e082018190526040805180820190915260018152601960f91b60208201529061072a5760405162461bcd60e51b815260040161019891906123ee565b5080610100015115604051806040016040528060018152602001603360f81b8152509061076a5760405162461bcd60e51b815260040161019891906123ee565b506040805180820190915260018152603160f81b60208201528a6107a15760405162461bcd60e51b815260040161019891906123ee565b50806101200151604051806040016040528060018152602001603760f81b815250906107e05760405162461bcd60e51b815260040161019891906123ee565b5087600214806107f05750876001145b604051806040016040528060018152602001600760fb1b815250906108285760405162461bcd60e51b815260040161019891906123ee565b506040805160608101909152610873908c9088908881602081018260028282826020028201915b81548152602001906001019080831161084f57505050505081525050878787611371565b60c08601526020808601919091529084526080840191909152606083018290526040805180820190915260018152603960f81b91810191909152906108cb5760405162461bcd60e51b815260040161019891906123ee565b50670de0b6b3a76400008160c001511160405180604001604052806002815260200161031360f41b815250906109145760405162461bcd60e51b815260040161019891906123ee565b5080516080820151610931919061092b908c6111d4565b90611b01565b6040808301829052606083015181518083019092526002825261313160f01b6020830152909111156109765760405162461bcd60e51b815260040161019891906123ee565b506001881415610bda5780610140015160405180604001604052806002815260200161189960f11b815250906109bf5760405162461bcd60e51b815260040161019891906123ee565b5060078c0154604080516060810191829052610a1b92600160a01b900460ff1691889082906020820190839060029082845b8154815260200190600101908083116109f157505050505081525050611b8f90919063ffffffff16565b1580610a2d5750610a2b8c611c09565b155b80610ab757506004808d01546040516370a0823160e01b81526001600160a01b03909116916370a0823191610a64918f9101612364565b60206040518083038186803b158015610a7c57600080fd5b505afa158015610a90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab49190612301565b8a115b60405180604001604052806002815260200161313360f01b81525090610af05760405162461bcd60e51b815260040161019891906123ee565b508c6001600160a01b03166370a082318d60040160009054906101000a90046001600160a01b03166040518263ffffffff1660e01b8152600401610b349190612364565b60206040518083038186803b158015610b4c57600080fd5b505afa158015610b60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b849190612301565b60a08201819052600090610b9890896112ff565b9050808b1115604051806040016040528060028152602001610c4d60f21b81525090610bd75760405162461bcd60e51b815260040161019891906123ee565b50505b50505050505050505050505050565b60008080610bf68861119c565b9350509250925082604051806040016040528060018152602001601960f91b81525090610c365760405162461bcd60e51b815260040161019891906123ee565b506040805180820190915260018152603360f81b60208201528215610c6e5760405162461bcd60e51b815260040161019891906123ee565b506001846002811115610c7d57fe5b1415610cc057604080518082019091526002815261313760f01b602082015286610cba5760405162461bcd60e51b815260040161019891906123ee565b50610ea8565b6002846002811115610cce57fe5b1415610e7957604080518082019091526002815261062760f31b602082015285610d0b5760405162461bcd60e51b815260040161019891906123ee565b50604080518082019091526002815261189960f11b602082015281610d435760405162461bcd60e51b815260040161019891906123ee565b50600788015460408051606081018083528a5460208301908152610d9b94600160a01b900460ff16938c928492918491600291600184019086018083116109f157505050505081525050611b8f90919063ffffffff16565b1580610dad5750610dab88611c09565b155b80610e4057506004808901546040516370a0823160e01b81526001600160a01b03909116916370a0823191610de491339101612364565b60206040518083038186803b158015610dfc57600080fd5b505afa158015610e10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e349190612301565b610e3e87876111d4565b115b60405180604001604052806002815260200161313360f01b81525090610cba5760405162461bcd60e51b815260040161019891906123ee565b60408051808201825260018152600760fb1b6020820152905162461bcd60e51b815261019891906004016123ee565b5050505050505050565b610fa081565b6040805180820190915260018152603160f81b602082015287610eee5760405162461bcd60e51b815260040161019891906123ee565b506040805180820190915260018152603560f81b602082015286881115610f285760405162461bcd60e51b815260040161019891906123ee565b506001600160a01b0388166000908152602086905260408120610f4a9061119c565b505050905080604051806040016040528060018152602001601960f91b81525090610f885760405162461bcd60e51b815260040161019891906123ee565b50604051633985c10960e21b815273__$52a8a86ab43135662ff256bbc95497e8e3$__9063e617042490610fce908c9033908d908c908c908c908c908c90600401612378565b60206040518083038186803b158015610fe657600080fd5b505af4158015610ffa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101e9190612154565b604051806040016040528060018152602001601b60f91b815250906106b65760405162461bcd60e51b815260040161019891906123ee565b600061106187611c11565b905080604051806040016040528060018152602001601960f91b8152509061109c5760405162461bcd60e51b815260040161019891906123ee565b506040805180820190915260018152603160f81b6020820152866110d35760405162461bcd60e51b815260040161019891906123ee565b506000831180156110ef575060018560028111156110ed57fe5b145b8061111057506000821180156111105750600285600281111561110e57fe5b145b60405180604001604052806002815260200161313560f01b815250906111495760405162461bcd60e51b815260040161019891906123ee565b50600019861415806111635750336001600160a01b038516145b60405180604001604052806002815260200161189b60f11b81525090610ea85760405162461bcd60e51b815260040161019891906123ee565b54600160381b811615159167020000000000000082161515916704000000000000008116151591670800000000000000909116151590565b6000828201838110156111f95760405162461bcd60e51b815260040161019890612423565b90505b92915050565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b8152509061124b5760405162461bcd60e51b815260040161019891906123ee565b5090505b919050565b604080518082019091526002815261035360f41b60208201526000908261128e5760405162461bcd60e51b815260040161019891906123ee565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156112dc5760405162461bcd60e51b815260040161019891906123ee565b5082816b033b2e3c9fd0803ce8000000860201816112f657fe5b04949350505050565b600082158061130c575081155b15611319575060006111fc565b81611388198161132557fe5b0483111560405180604001604052806002815260200161068760f31b815250906113625760405162461bcd60e51b815260040161019891906123ee565b50506127109102611388010490565b6000806000806000611381611fa4565b61138a8a611c1d565b156113a8576000806000806000199550955095509550955050611af3565b600060e08201525b878160e0015110156119d75760e08101516113cc908b90611c62565b6113d5576119c7565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d9052902061140c81611cd4565b5060808601525060c0840190815260a084019190915260408051808201909152601881527f6c69717569646174696f6e5468726573686f6c643a2025640000000000000000602082015290516114629190611cff565b6080820151600a0a60208301526101e082015160405163b3596f0760e01b81526001600160a01b038a169163b3596f07916114a09190600401612364565b60206040518083038186803b1580156114b857600080fd5b505afa1580156114cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f09190612301565b82526040805180820190915260148152731c995cd95c9d99555b9a5d141c9a58d94e88095960621b602082015282516115299190611cff565b60c082015115801590611547575060e0820151611547908c90611b8f565b1561177f578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040161158f9190612364565b60206040518083038186803b1580156115a757600080fd5b505afa1580156115bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115df9190612301565b60408084019182528051808201909152601e81527f636f6d706f756e6465644c697175696469747942616c616e63653a2025640000602082015290516116259190611cff565b6000611650836020015161164a85604001518660000151611d4890919063ffffffff16565b90611d82565b90506116916040518060400160405280601781526020017f6c697175696469747942616c616e63654554483a20256400000000000000000081525082611cff565b6101208301516116a190826111d4565b610120840190815260408051808201909152601881527f746f74616c436f6c6c61746572616c496e4554483a2025640000000000000000602082015290516116e99190611cff565b61170f6117038460a0015183611d4890919063ffffffff16565b610160850151906111d4565b61016084015260c083015161173590611729908390611d48565b610180850151906111d4565b610180840190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a20256400000000006020820152905161177d9190611cff565b505b60e082015161178f908c90611dc4565b156119c5578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b81526004016117d79190612364565b60206040518083038186803b1580156117ef57600080fd5b505afa158015611803573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118279190612301565b6060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a20256400000000006020820152905161186e9190611cff565b61190f8160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b81526004016118b49190612364565b60206040518083038186803b1580156118cc57600080fd5b505afa1580156118e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119049190612301565b6060840151906111d4565b6060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a2025640000000000602082015290516119569190611cff565b61198861197c836020015161164a85606001518660000151611d4890919063ffffffff16565b610140840151906111d4565b61014083019081526040805180820190915260128152711d1bdd185b1119589d125b9155120e88095960721b602082015290516119c59190611cff565b505b60e08101805160010190526113b0565b6000816101200151116119eb576000611a00565b610120810151610160820151611a0091611d82565b610160820152610120810151611a17576000611a2c565b610120810151610180820151611a2c91611d82565b610180820190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a202564000000000060208201529051611a749190611cff565b611a8e816101200151826101400151836101800151611e22565b610100820190815260408051808201909152601081526f1a19585b1d1a119858dd1bdc8e88095960821b60208201529051611ac99190611cff565b80610120015181610140015182610160015183610180015184610100015195509550955095509550505b965096509650965096915050565b604080518082019091526002815261035360f41b602082015260009082611b3b5760405162461bcd60e51b815260040161019891906123ee565b5060408051808201909152600280825261068760f31b6020830152830490612710821904851115611b7f5760405162461bcd60e51b815260040161019891906123ee565b508281612710860201816112f657fe5b6000610100821060405180604001604052806002815260200161373760f01b81525090611bcf5760405162461bcd60e51b815260040161019891906123ee565b5060006080830490506080830692508260020260010184600001518260028110611bf557fe5b6020020151901c6001161515949350505050565b5461ffff1690565b54600160381b16151590565b6000805b600260ff82161015611c5957825160ff821660028110611c3d57fe5b602002015115611c5157600091505061124f565b600101611c21565b50600192915050565b6000610100821060405180604001604052806002815260200161373760f01b81525090611ca25760405162461bcd60e51b815260040161019891906123ee565b508251607f83169260809004906002808502919083908110611cc057fe5b6020020151901c6003161515949350505050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b611d448282604051602401611d15929190612401565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052611e50565b5050565b600082611d57575060006111fc565b82820282848281611d6457fe5b04146111f95760405162461bcd60e51b81526004016101989061245a565b60006111f983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611e71565b6000610100821060405180604001604052806002815260200161373760f01b81525090611e045760405162461bcd60e51b815260040161019891906123ee565b508251607f83169260809004906002808502919083908110611bf557fe5b600082611e325750600019611e49565b611e4683611e4086856112ff565b90611ea8565b90505b9392505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008183611e925760405162461bcd60e51b815260040161019891906123ee565b506000838581611e9e57fe5b0495945050505050565b604080518082019091526002815261035360f41b602082015260009082611ee25760405162461bcd60e51b815260040161019891906123ee565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115611f2c5760405162461bcd60e51b815260040161019891906123ee565b508281670de0b6b3a7640000860201816112f657fe5b604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581526020016000151581525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b6000806000806000806000806000806000806101808d8f031215612060578788fd5b8c3561206b816124a4565b9b5060208d01359a5060408d0135612082816124a4565b995060608d0135985060808d0135975060a08d0135965060c08d0135955060e08d013594506101008d013593506101208d013592506101408d013591506101608d01356120ce816124a4565b809150509295989b509295989b509295989b565b600080600080600080600080610100898b0312156120fe578384fd5b8835612109816124a4565b97506020890135965060408901359550606089013594506080890135935060a0890135925060c0890135915060e0890135612143816124a4565b809150509295985092959890939650565b600060208284031215612165578081fd5b81516111f9816124bc565b600080600080600080600080610100898b03121561218c578384fd5b88359750602089013561219e816124a4565b965060408901356121ae816124bc565b9550606089013594506080890135935060a0890135925060c0890135915060e0890135612143816124a4565b600080600080600060a086880312156121f1578081fd5b853594506020860135612203816124a4565b93506040860135612213816124a4565b92506060860135612223816124a4565b91506080860135612233816124a4565b809150509295509295909350565b600080600080600060a08688031215612258578081fd5b85359450602086013593506040860135925060608601359150608086013560038110612233578182fd5b60008060408385031215612294578182fd5b50508035926020909101359150565b60008060008060008060c087890312156122bb578384fd5b86359550602087013594506040870135600381106122d7578485fd5b935060608701356122e7816124a4565b9598949750929560808101359460a0909101359350915050565b600060208284031215612312578081fd5b5051919050565b60008151808452815b8181101561233e57602081850181015186830182015201612322565b8181111561234f5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b60006101208201905060018060a01b03808b1683526020818b1681850152896040850152886060850152608084018860005b60028110156123c7578154835291830191600191820191016123aa565b505050508560c08401528460e0840152808416610100840152509998505050505050505050565b6000602082526111f96020830184612319565b6000604082526124146040830185612319565b90508260208301529392505050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b90815260200190565b6001600160a01b03811681146124b957600080fd5b50565b80151581146124b957600080fdfea26469706673582212200da1f0b6909715356a65ad8faa7b8af4ac88ca4912ca535c9134d3772020573264736f6c634300060c0033";

export interface ValidationLogicLibraryAddresses {
  ["__$52a8a86ab43135662ff256bbc95497e8e3$__"]: string;
}
