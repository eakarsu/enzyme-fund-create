/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LendingPoolCollateralManager } from "./LendingPoolCollateralManager";

export class LendingPoolCollateralManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolCollateralManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<LendingPoolCollateralManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolCollateralManager {
    return super.attach(address) as LendingPoolCollateralManager;
  }
  connect(signer: Signer): LendingPoolCollateralManagerFactory {
    return super.connect(signer) as LendingPoolCollateralManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolCollateralManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolCollateralManager;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "principal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatedCollateralAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "LiquidationCall",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "ReserveUsedAsCollateralEnabled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "debtAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "debtToCover",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "receiveAToken",
        type: "bool",
      },
    ],
    name: "liquidationCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b50612df9806100246000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c8062a718a91461002f575b600080fd5b610073600480360360a081101561004557600080fd5b506001600160a01b0381358116916020810135821691604082013516906060810135906080013515156100f2565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156100b657818101518382015260200161009e565b50505050905090810190601f1680156100e35780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6001600160a01b0380861660009081526035602090815260408083208885168452818420948816845260369092528220919260609261012f612b82565b60408051606081019091526101f6908a906035908581602081018260028282826020028201915b815481526020019060010190808311610156575050505050815250506037603854603460009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156101c557600080fd5b505afa1580156101d9573d6000803e3d6000fd5b505050506040513d60208110156101ef57600080fd5b5051610a21565b6101408601525061020d92508b9150859050611207565b604083018190526020830182905261014083015161023292879287928792909161130a565b6102008301526101e08201819052600090600981111561024e57fe5b600981111561025957fe5b1461027757806101e001518161020001519550955050505050610a17565b6004808501546001600160a01b039081166101808401819052604080516370a0823160e01b8152928d169383019390935291516370a0823191602480820192602092909190829003018186803b1580156102d057600080fd5b505afa1580156102e4573d6000803e3d6000fd5b505050506040513d60208110156102fa57600080fd5b505181526040810151602082015161031f91611388916103199161147b565b906114de565b6060820181905288116103325787610338565b80606001515b60808201819052815161035391869186918f918f91906115c8565b61012083018190526101008301919091526080820151111561037b5761012081015160808201525b8661043d5760008b6001600160a01b03166370a082318361018001516040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156103d457600080fd5b505afa1580156103e8573d6000803e3d6000fd5b505050506040513d60208110156103fe57600080fd5b505161010083015190915081101561043b57600560405180604001604052806002815260200161343560f01b815250965096505050505050610a17565b505b61044683611841565b80608001518160400151106104e95760068301546080820151600185015460408051637a94c56560e11b81526001600160a01b038e811660048301526024820194909452600160801b9092046001600160801b0316604483015251919092169163f5298aca91606480830192600092919082900301818387803b1580156104cc57600080fd5b505af11580156104e0573d6000803e3d6000fd5b5050505061060d565b60408101511561058257600683015460408281015160018601548251637a94c56560e11b81526001600160a01b038e811660048301526024820193909352600160801b9091046001600160801b03166044820152915192169163f5298aca9160648082019260009290919082900301818387803b15801561056957600080fd5b505af115801561057d573d6000803e3d6000fd5b505050505b6005830154604082015160808301516001600160a01b0390921691639dc29fac918c916105ae9161190b565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156105f457600080fd5b505af1158015610608573d6000803e3d6000fd5b505050505b600483015460808201516106309185918d916001600160a01b031690600061194d565b86156107ac578061018001516001600160a01b03166370a08231336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561068857600080fd5b505afa15801561069c573d6000803e3d6000fd5b505050506040513d60208110156106b257600080fd5b50516101608201526101808101516101008201516040805163f866c31960e01b81526001600160a01b038d8116600483015233602483015260448201939093529051919092169163f866c31991606480830192600092919082900301818387803b15801561071f57600080fd5b505af1158015610733573d6000803e3d6000fd5b50505050806101600151600014156107a7573360009081526036602052604090206007850154610770908290600160a01b900460ff166001611d80565b60405133906001600160a01b038e16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a3505b610864565b6107b584611841565b6101808101516101008201516107d29186918e919060009061194d565b610180810151610100820151600186015460408051636b81068560e11b81526001600160a01b038e8116600483015233602483015260448201949094526001600160801b03909216606483015251919092169163d7020d0a91608480830192600092919082900301818387803b15801561084b57600080fd5b505af115801561085f573d6000803e3d6000fd5b505050505b805161010082015114156108cf57600784015461088e908390600160a01b900460ff166000611d80565b886001600160a01b03168b6001600160a01b03167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b6004808401546080830151604080516323b872dd60e01b815233948101949094526001600160a01b039283166024850152604484019190915251908c16916323b872dd9160648083019260209291908290030181600087803b15801561093457600080fd5b505af1158015610948573d6000803e3d6000fd5b505050506040513d602081101561095e57600080fd5b810190808051906020019092919050505050886001600160a01b03168a6001600160a01b03168c6001600160a01b03167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e0052868460800151856101000151338d60405180858152602001848152602001836001600160a01b03168152602001821515815260200194505050505060405180910390a46000604051806040016040528060028152602001611a1b60f11b81525095509550505050505b9550959350505050565b6000806000806000610a31612c1c565b610a3a8a611e41565b15610a585760008060008060001995509550955095509550506111f9565b600060e08201525b878160e0015110156110dd5760e0810151610a7c908b90611e88565b610a85576110cd565b60e0810151600090815260208a81526040808320546001600160a01b03166101e085018190528352908d90529020610abc81611f28565b5060808601525060c0840190815260a084019190915260408051808201909152601881527f6c69717569646174696f6e5468726573686f6c643a202564000000000000000060208201529051610b129190611f53565b6080820151600a0a6020808401919091526101e08301516040805163b3596f0760e01b81526001600160a01b0392831660048201529051918b169263b3596f0792602480840193829003018186803b158015610b6d57600080fd5b505afa158015610b81573d6000803e3d6000fd5b505050506040513d6020811015610b9757600080fd5b5051825260408051808201909152601d81527f766172732e63757272656e7452657365727665416464726573733a257300000060208201526101e0830151610bdf9190612005565b610c19604051806040016040528060148152602001731c995cd95c9d99555b9a5d141c9a58d94e88095960621b8152508360000151611f53565b610c38610c338360e001518d6120bc90919063ffffffff16565b612164565b60c082015115801590610c56575060e0820151610c56908c906120bc565b15610e8b578060040160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610cbf57600080fd5b505afa158015610cd3573d6000803e3d6000fd5b505050506040513d6020811015610ce957600080fd5b505160408084019182528051808201909152601e81527f636f6d706f756e6465644c697175696469747942616c616e63653a202564000060208201529051610d319190611f53565b6000610d5c8360200151610d56856040015186600001516121ac90919063ffffffff16565b90612205565b9050610d9d6040518060400160405280601781526020017f6c697175696469747942616c616e63654554483a20256400000000000000000081525082611f53565b610120830151610dad908261147b565b610120840190815260408051808201909152601881527f746f74616c436f6c6c61746572616c496e4554483a202564000000000000000060208201529051610df59190611f53565b610e1b610e0f8460a00151836121ac90919063ffffffff16565b6101608501519061147b565b61016084015260c0830151610e4190610e359083906121ac565b6101808501519061147b565b610180840190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a202564000000000060208201529051610e899190611f53565b505b60e0820151610e9b908c90612247565b156110cb578060050160009054906101000a90046001600160a01b03166001600160a01b03166370a082318e6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610f0457600080fd5b505afa158015610f18573d6000803e3d6000fd5b505050506040513d6020811015610f2e57600080fd5b50516060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a202564000000000060208201529051610f779190611f53565b6110158160060160009054906101000a90046001600160a01b03166001600160a01b03166370a082318f6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610fde57600080fd5b505afa158015610ff2573d6000803e3d6000fd5b505050506040513d602081101561100857600080fd5b505160608401519061147b565b6060830190815260408051808201909152601b81527f636f6d706f756e646564426f72726f7742616c616e63653a20256400000000006020820152905161105c9190611f53565b61108e6110828360200151610d56856060015186600001516121ac90919063ffffffff16565b6101408401519061147b565b61014083019081526040805180820190915260128152711d1bdd185b1119589d125b9155120e88095960721b602082015290516110cb9190611f53565b505b60e0810180516001019052610a60565b6000816101200151116110f1576000611106565b61012081015161016082015161110691612205565b61016082015261012081015161111d576000611132565b61012081015161018082015161113291612205565b610180820190815260408051808201909152601b81527f6176674c69717569646174696f6e5468726573686f6c643a20256400000000006020820152905161117a9190611f53565b6111948161012001518261014001518361018001516122d3565b610100820190815260408051808201909152601081526f1a19585b1d1a119858dd1bdc8e88095960821b602082015290516111cf9190611f53565b80610120015181610140015182610160015183610180015184610100015195509550955095509550505b965096509650965096915050565b6005810154604080516370a0823160e01b81526001600160a01b0385811660048301529151600093849316916370a08231916024808301926020929190829003018186803b15801561125857600080fd5b505afa15801561126c573d6000803e3d6000fd5b505050506040513d602081101561128257600080fd5b50516006840154604080516370a0823160e01b81526001600160a01b038881166004830152915191909216916370a08231916024808301926020929190829003018186803b1580156112d357600080fd5b505afa1580156112e7573d6000803e3d6000fd5b505050506040513d60208110156112fd57600080fd5b5051909590945092505050565b6000606061131788612301565b1580611329575061132787612301565b155b156113505750506040805180820190915260018152601960f91b6020820152600690611470565b670de0b6b3a764000085106113825750506040805180820190915260028152611a1960f11b6020820152600490611470565b60008061138e8a612311565b1180156113f1575060078901546040805160608101918290526113f192600160a01b900460ff16918a9082906020820190839060029082845b8154815260200190600101908083116113c7575050505050815250506120bc90919063ffffffff16565b90508061141b57505060408051808201909152600280825261343360f01b60208301529150611470565b84158015611427575083155b156114505750506040805180820190915260028152610d0d60f21b602082015260039150611470565b50506040805180820190915260028152611a1b60f11b6020820152600091505b965096945050505050565b6000828201838110156114d5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b60008215806114eb575081155b156114f8575060006114d8565b81611388198161150457fe5b0483111560405180604001604052806002815260200161068760f31b815250906115ac5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611571578181015183820152602001611559565b50505050905090810190601f16801561159e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506127106002815b0483850201816115c057fe5b049392505050565b6000806000806000603460009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b15801561161e57600080fd5b505afa158015611632573d6000803e3d6000fd5b505050506040513d602081101561164857600080fd5b50519050611654612cb6565b816001600160a01b031663b3596f078b6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156116a157600080fd5b505afa1580156116b5573d6000803e3d6000fd5b505050506040513d60208110156116cb57600080fd5b5051604080830191909152805163b3596f0760e01b81526001600160a01b038b8116600483015291519184169163b3596f0791602480820192602092909190829003018186803b15801561171e57600080fd5b505afa158015611732573d6000803e3d6000fd5b505050506040513d602081101561174857600080fd5b505160608201526117588c611f28565b5060c085015260208401525061176f90508b61231c565b60a0820181905260408201516117bc9161178c9190600a0a6121ac565b610d5683602001516103198560c00151600a0a6117b68e88606001516121ac90919063ffffffff16565b906121ac565b608082018190528710156118255786935061181e81602001516118186117f68460c00151600a0a85606001516121ac90919063ffffffff16565b610d568560a00151600a0a6117b68a88604001516121ac90919063ffffffff16565b90612326565b9250611830565b806080015193508792505b50919a909950975050505050505050565b60068101546040805163b1bf962d60e01b815290516000926001600160a01b03169163b1bf962d916004808301926020929190829003018186803b15801561188857600080fd5b505afa15801561189c573d6000803e3d6000fd5b505050506040513d60208110156118b257600080fd5b505160018301546003840154919250600160801b8082046001600160801b03908116939216910464ffffffffff166000806118f08787868887612419565b915091506119028787878585886125d2565b50505050505050565b60006114d583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506127bb565b611955612cf3565b60058601546001600160a01b031680825260408051637b98f4df60e11b8152815163f731e9be92600480840193919291829003018186803b15801561199957600080fd5b505afa1580156119ad573d6000803e3d6000fd5b505050506040513d60408110156119c357600080fd5b50805160209182015160c084015260408084019190915260018801546006890154825163b1bf962d60e01b81529251611a6794600160801b9093046001600160801b0316936001600160a01b039092169263b1bf962d9260048082019391829003018186803b158015611a3557600080fd5b505afa158015611a49573d6000803e3d6000fd5b505050506040513d6020811015611a5f57600080fd5b505190612815565b60e082018190526007870154604083015160c08401516001600160a01b03909216926329db497d9289928992899289929190611aa28f6128c6565b6040518963ffffffff1660e01b815260040180896001600160a01b03168152602001886001600160a01b031681526020018781526020018681526020018581526020018481526020018381526020018281526020019850505050505050505060606040518083038186803b158015611b1957600080fd5b505afa158015611b2d573d6000803e3d6000fd5b505050506040513d6060811015611b4357600080fd5b50805160208083015160409384015160a086015260808501526060840182905282518084019093526002835261353360f01b908301526001600160801b031015611bce5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b506080810151604080518082019091526002815261353560f01b6020820152906001600160801b031015611c435760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5060a08101516040805180820190915260028152610d4d60f21b6020820152906001600160801b031015611cb85760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5060608181015160028801805460808086015160038c0180546001600160801b03199081166001600160801b038085169190911790925560a0808a015191909516828816178216600160801b82841681029190911790965560018e01546040805198895260208901949094528784019190915280821697870197909752939095049092169183019190915291516001600160a01b038816927f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a928290030190a2505050505050565b604080518082019091526002815261373760f01b60208201526101008310611de95760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b50607f821691608090046001600284020182611e06576000611e09565b60015b60ff16901b836002026001016001901b19856000018360028110611e2957fe5b01541617848260028110611e3957fe5b015550505050565b6000805b600260ff82161015611e7d57825160ff821660028110611e6157fe5b602002015115611e75576000915050611e83565b600101611e45565b50600190505b919050565b6000610100821060405180604001604052806002815260200161373760f01b81525090611ef65760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b508251607f83169260809004906002808502919083908110611f1457fe5b6020020151901c6003161515949350505050565b5461ffff80821692601083901c821692602081901c831692603082901c60ff169260409290921c1690565b61200182826040516024018080602001838152602001828103825284818151815260200191508051906020019080838360005b83811015611f9e578181015183820152602001611f86565b50505050905090810190601f168015611fcb5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b17905293506128d192505050565b5050565b61200182826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b83811015612059578181015183820152602001612041565b50505050905090810190601f1680156120865780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905293506128d192505050565b6000610100821060405180604001604052806002815260200161373760f01b8152509061212a5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b506000608083049050608083069250826002026001018460000151826002811061215057fe5b6020020151901c6001161515949350505050565b604080518215156024808301919091528251808303909101815260449091019091526020810180516001600160e01b03166332458eed60e01b1790526121a9906128d1565b50565b6000826121bb575060006114d8565b828202828482816121c857fe5b04146114d55760405162461bcd60e51b8152600401808060200182810382526021815260200180612da36021913960400191505060405180910390fd5b60006114d583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506128f2565b6000610100821060405180604001604052806002815260200161373760f01b815250906122b55760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b508251607f8316926080900490600280850291908390811061215057fe5b6000826122e357506000196122fa565b6122f7836122f186856114de565b90612957565b90505b9392505050565b5467010000000000000016151590565b5460101c61ffff1690565b5460301c60ff1690565b604080518082019091526002815261035360f41b60208201526000908261238e5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5060408051808201909152600280825261068760f31b60208301528304906127108219048511156124005760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5082816127108602018161241057fe5b04949350505050565b600285015460009081906001600160801b0316858582156125a35760006124408488612a4d565b905061244c818a612815565b604080518082019091526002815261353160f01b60208201529093506001600160801b038411156124be5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5060018b0180546001600160801b0319166001600160801b03851617905589156125a15760028b015460009061250490600160801b90046001600160801b031689612a93565b9050612510818a612815565b6040805180820190915260028152611a9960f11b60208201529093506001600160801b038411156125825760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b505060018b0180546001600160801b03808516600160801b0291161790555b505b600399909901805464ffffffffff60801b1916600160801b4264ffffffffff1602179055989650505050505050565b6125da612d41565b6125e3876128c6565b61012082018190526125f557506127b3565b8660050160009054906101000a90046001600160a01b03166001600160a01b031663797743386040518163ffffffff1660e01b815260040160806040518083038186803b15801561264557600080fd5b505afa158015612659573d6000803e3d6000fd5b505050506040513d608081101561266f57600080fd5b508051602080830151604084015160609094015164ffffffffff1661014086015260a0850193909352918352908201526126a98686612815565b60808201526126b88684612815565b606082015260a08101516101408201516126da919064ffffffffff8516612a9c565b60c0820181905260208201516126ef91612815565b6040820181905260808201518251606084015161271a9392612714929091839161147b565b9061190b565b60e0820181905261012082015161273191906114de565b6101008201819052156119025760048088015461010083015160408051637df5bd3b60e01b81529384019190915260248301879052516001600160a01b0390911691637df5bd3b91604480830192600092919082900301818387803b15801561279957600080fd5b505af11580156127ad573d6000803e3d6000fd5b50505050505b505050505050565b6000818484111561280d5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b505050900390565b6000821580612822575081155b1561282f575060006114d8565b816b019d971e4fe8401e74000000198161284557fe5b0483111560405180604001604052806002815260200161068760f31b815250906128b05760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b506b033b2e3c9fd0803ce80000006002816115b4565b5460401c61ffff1690565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600081836129415760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b50600083858161294d57fe5b0495945050505050565b604080518082019091526002815261035360f41b6020820152600090826129bf5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b5060408051808201909152600280825261068760f31b6020830152830490670de0b6b3a7640000821904851115612a375760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611571578181015183820152602001611559565b508281670de0b6b3a76400008602018161241057fe5b600080612a614264ffffffffff851661190b565b9050612a8b612a6e612b72565b6301e13380612a7d87856121ac565b81612a8457fe5b049061147b565b949350505050565b60006114d58383425b600080612ab08364ffffffffff861661190b565b905080612ac757612abf612b72565b9150506122fa565b6000198101600060028311612add576000612ae2565b600283035b90506301e1338087046000612af78280612815565b90506000612b058284612815565b905060006002612b19846117b68a8a6121ac565b81612b2057fe5b04905060006006612b37846117b689818d8d6121ac565b81612b3e57fe5b049050612b6281612b5c8481612b548a8e6121ac565b612b5c612b72565b9061147b565b9c9b505050505050505050505050565b6b033b2e3c9fd0803ce800000090565b60405180610220016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160001515815260200160006002811115612c0857fe5b815260200160008152602001606081525090565b604051806102400160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b031681526020016000151581526020016000151581525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600064ffffffffff168152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212201c53fe306fbd7cf09db4c21ac6a7f6f9a852dc3592621f2ef42ab144eaa6ab6f64736f6c634300060c0033";
