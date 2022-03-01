/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ATokensAndRatesHelper } from "./ATokensAndRatesHelper";

export class ATokensAndRatesHelperFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _addressesProvider: string,
    _poolConfigurator: string,
    overrides?: Overrides
  ): Promise<ATokensAndRatesHelper> {
    return super.deploy(
      _pool,
      _addressesProvider,
      _poolConfigurator,
      overrides || {}
    ) as Promise<ATokensAndRatesHelper>;
  }
  getDeployTransaction(
    _pool: string,
    _addressesProvider: string,
    _poolConfigurator: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _addressesProvider,
      _poolConfigurator,
      overrides || {}
    );
  }
  attach(address: string): ATokensAndRatesHelper {
    return super.attach(address) as ATokensAndRatesHelper;
  }
  connect(signer: Signer): ATokensAndRatesHelperFactory {
    return super.connect(signer) as ATokensAndRatesHelperFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ATokensAndRatesHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ATokensAndRatesHelper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_addressesProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_poolConfigurator",
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
        indexed: false,
        internalType: "address",
        name: "aToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "strategy",
        type: "address",
      },
    ],
    name: "deployedContracts",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "baseLTV",
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
            name: "stableBorrowingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "borrowingEnabled",
            type: "bool",
          },
        ],
        internalType: "struct ATokensAndRatesHelper.ConfigureReserveInput[]",
        name: "inputParams",
        type: "tuple[]",
      },
    ],
    name: "configureReserves",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "asset",
            type: "address",
          },
          {
            internalType: "uint256[6]",
            name: "rates",
            type: "uint256[6]",
          },
        ],
        internalType: "struct ATokensAndRatesHelper.InitDeploymentInput[]",
        name: "inputParams",
        type: "tuple[]",
      },
    ],
    name: "initDeployment",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b506040516141ba3803806141ba83398101604081905261002f916100c9565b60006100396100c5565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b039485166001600160a01b03199182161790915560028054938516938216939093179092556003805491909316911617905561012d565b3390565b6000806000606084860312156100dd578283fd5b83516100e881610115565b60208501519093506100f981610115565b604085015190925061010a81610115565b809150509250925092565b6001600160a01b038116811461012a57600080fd5b50565b61407e8061013c6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638da5cb5b146100665780639dd8aad514610084578063f2fde38b14610097578063fc123602146100aa575b600080fd5b6100646100bd565b005b61006e610145565b60405161007b9190610786565b60405180910390f35b6100646100923660046106fe565b610154565b6100646100a53660046106d0565b6103da565b6100646100b836600461073e565b610490565b6100c5610666565b6000546001600160a01b039081169116146100fb5760405162461bcd60e51b81526004016100f29061088f565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b61015c610666565b6000546001600160a01b039081169116146101895760405162461bcd60e51b81526004016100f29061088f565b6003546001600160a01b031660005b828110156103d457816001600160a01b0316637c4e560b8585848181106101bb57fe5b6101d192602060e09092020190810191506106d0565b8686858181106101dd57fe5b905060e00201602001358787868181106101f357fe5b905060e002016040013588888781811061020957fe5b905060e00201606001356040518563ffffffff1660e01b815260040161023294939291906107e8565b600060405180830381600087803b15801561024c57600080fd5b505af1158015610260573d6000803e3d6000fd5b5050505083838281811061027057fe5b905060e0020160c00160208101906102889190610766565b1561033257816001600160a01b031663eede87c18585848181106102a857fe5b6102be92602060e09092020190810191506106d0565b8686858181106102ca57fe5b905060e0020160a00160208101906102e29190610766565b6040518363ffffffff1660e01b81526004016102ff9291906107b4565b600060405180830381600087803b15801561031957600080fd5b505af115801561032d573d6000803e3d6000fd5b505050505b816001600160a01b0316634b4e675385858481811061034d57fe5b61036392602060e09092020190810191506106d0565b86868581811061036f57fe5b905060e00201608001356040518363ffffffff1660e01b81526004016103969291906107cf565b600060405180830381600087803b1580156103b057600080fd5b505af11580156103c4573d6000803e3d6000fd5b5050600190920191506101989050565b50505050565b6103e2610666565b6000546001600160a01b0390811691161461040f5760405162461bcd60e51b81526004016100f29061088f565b6001600160a01b0381166104355760405162461bcd60e51b81526004016100f290610849565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b610498610666565b6000546001600160a01b039081169116146104c55760405162461bcd60e51b81526004016100f29061088f565b60005b81811015610661577f1c1768aab1796270c7034dc781c2951065e6afb7a946269746521002443b8ea46040516104fd9061066a565b604051809103906000f080158015610519573d6000803e3d6000fd5b506002546001600160a01b031685858581811061053257fe5b905060e0020160200160006006811061054757fe5b602002013586868681811061055857fe5b905060e0020160200160016006811061056d57fe5b602002013587878781811061057e57fe5b905060e0020160200160026006811061059357fe5b60200201358888888181106105a457fe5b905060e002016020016003600681106105b957fe5b60200201358989898181106105ca57fe5b905060e002016020016004600681106105df57fe5b60200201358a8a8a8181106105f057fe5b905060e0020160200160056006811061060557fe5b602002013560405161061690610678565b610626979695949392919061080e565b604051809103906000f080158015610642573d6000803e3d6000fd5b5060405161065192919061079a565b60405180910390a16001016104c8565b505050565b3390565b6127c980620008c583390190565b610fbb806200308e83390190565b60008083601f840112610697578182fd5b50813567ffffffffffffffff8111156106ae578182fd5b60208301915083602060e0830285010111156106c957600080fd5b9250929050565b6000602082840312156106e1578081fd5b81356001600160a01b03811681146106f7578182fd5b9392505050565b60008060208385031215610710578081fd5b823567ffffffffffffffff811115610726578182fd5b61073285828601610686565b90969095509350505050565b60008060208385031215610750578182fd5b823567ffffffffffffffff811115610726578283fd5b600060208284031215610777578081fd5b813580151581146106f7578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0394909416845260208401929092526040830152606082015260800190565b6001600160a01b03979097168752602087019590955260408601939093526060850191909152608084015260a083015260c082015260e00190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fe6080604052600080553480156200001557600080fd5b50604080518082018252600b8082526a105513d2d15397d253541360aa1b60208084018281528551808701909652928552840152815191929160009162000060916037919062000094565b5081516200007690603890602085019062000094565b506039805460ff191660ff9290921691909117905550620001309050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000d757805160ff191683800117855562000107565b8280016001018555821562000107579182015b8281111562000107578251825591602001919060010190620000ea565b506200011592915062000119565b5090565b5b808211156200011557600081556001016200011a565b61268980620001406000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637535d2461161010f578063ae167335116100a2578063d505accf11610071578063d505accf146106aa578063d7020d0a146106fb578063dd62ed3e14610737578063f866c31914610765576101e5565b8063ae1673351461066c578063b16a19de14610674578063b1bf962d1461067c578063b9844d8d14610684576101e5565b806388dd91a1116100de57806388dd91a1146105e057806395d89b411461060c578063a457c2d714610614578063a9059cbb14610640576101e5565b80637535d2461461058957806375d26413146105ad57806378160376146105b55780637df5bd3b146105bd576101e5565b80631da24f3e116101875780633644e515116101565780633644e51514610503578063395093511461050b5780634efecaa51461053757806370a0823114610563576101e5565b80631da24f3e1461048157806323b872dd146104a757806330adf81f146104dd578063313ce567146104e5576101e5565b80630bd7ad3b116101c35780630bd7ad3b146102e6578063156e29f61461030057806318160ddd14610332578063183fb4131461033a576101e5565b806306fdde03146101ea578063095ea7b3146102675780630afbcdc9146102a7575b600080fd5b6101f261079b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102936004803603604081101561027d57600080fd5b506001600160a01b038135169060200135610832565b604080519115158252519081900360200190f35b6102cd600480360360208110156102bd57600080fd5b50356001600160a01b0316610850565b6040805192835260208301919091528051918290030190f35b6102ee61086d565b60408051918252519081900360200190f35b6102936004803603606081101561031657600080fd5b506001600160a01b038135169060208101359060400135610872565b6102ee610a40565b61047f600480360361010081101561035157600080fd5b6001600160a01b038235811692602081013582169260408201358316926060830135169160ff6080820135169181019060c0810160a082013564010000000081111561039c57600080fd5b8201836020820111156103ae57600080fd5b803590602001918460018302840111640100000000831117156103d057600080fd5b9193909290916020810190356401000000008111156103ee57600080fd5b82018360208201111561040057600080fd5b8035906020019184600183028401116401000000008311171561042257600080fd5b91939092909160208101903564010000000081111561044057600080fd5b82018360208201111561045257600080fd5b8035906020019184600183028401116401000000008311171561047457600080fd5b509092509050610aea565b005b6102ee6004803603602081101561049757600080fd5b50356001600160a01b0316610e67565b610293600480360360608110156104bd57600080fd5b506001600160a01b03813581169160208101359091169060400135610e72565b6102ee610f32565b6104ed610f56565b6040805160ff9092168252519081900360200190f35b6102ee610f5f565b6102936004803603604081101561052157600080fd5b506001600160a01b038135169060200135610f65565b6102ee6004803603604081101561054d57600080fd5b506001600160a01b038135169060200135610fb3565b6102ee6004803603602081101561057957600080fd5b50356001600160a01b03166110c5565b610591611154565b604080516001600160a01b039092168252519081900360200190f35b610591611163565b6101f2611172565b61047f600480360360408110156105d357600080fd5b508035906020013561118f565b61047f600480360360408110156105f657600080fd5b506001600160a01b0381351690602001356112b6565b6101f2611340565b6102936004803603604081101561062a57600080fd5b506001600160a01b0381351690602001356113a1565b6102936004803603604081101561065657600080fd5b506001600160a01b038135169060200135611409565b610591611466565b610591611475565b6102ee611484565b6102ee6004803603602081101561069a57600080fd5b50356001600160a01b031661148e565b61047f600480360360e08110156106c057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356114a0565b61047f6004803603608081101561071157600080fd5b506001600160a01b038135811691602081013590911690604081013590606001356116e7565b6102ee6004803603604081101561074d57600080fd5b506001600160a01b03813581169160200135166118f7565b61047f6004803603606081101561077b57600080fd5b506001600160a01b03813581169160208101359091169060400135611922565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b820191906000526020600020905b81548152906001019060200180831161080a57829003601f168201915b505050505090505b90565b600061084661083f6119f3565b84846119f7565b5060015b92915050565b60008061085c83611ae3565b610864611afe565b91509150915091565b600181565b603c546000906001600160a01b03166108896119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906109375760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108fc5781810151838201526020016108e4565b50505050905090810190601f1680156109295780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600061094385611ae3565b905060006109518585611b04565b6040805180820190915260028152611a9b60f11b6020820152909150816109b95760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506109c48682611c0b565b6040805186815290516001600160a01b038816916000916000805160206125a58339815191529181900360200190a3604080518681526020810186905281516001600160a01b038916927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25015949350505050565b600080610a4b611afe565b905080610a5c57600091505061082f565b603c54603e546040805163d15e005360e01b81526001600160a01b0392831660048201529051610ae493929092169163d15e005391602480820192602092909190829003018186803b158015610ab157600080fd5b505afa158015610ac5573d6000803e3d6000fd5b505050506040513d6020811015610adb57600080fd5b50518290611d5c565b91505090565b6000610af4611e1a565b60015490915060ff1680610b0b5750610b0b611e1f565b80610b17575060005481115b610b525760405162461bcd60e51b815260040180806020018281038252602e815260200180612577602e913960400191505060405180910390fd5b60015460ff16158015610b71576001805460ff19168117905560008290555b60004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f89896040518083838082843780830192505050925050506040518091039020604051806040016040528060018152602001603160f81b81525080519060200120833060405160200180868152602001858152602001848152602001838152602001826001600160a01b031681526020019550505050505060405160208183030381529060405280519060200120603b81905550610c6989898080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e2592505050565b610ca887878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e3892505050565b610cb18a611e4b565b8d603c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508c603d60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508b603e60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508a603f60006101000a8154816001600160a01b0302191690836001600160a01b031602179055508d6001600160a01b03168c6001600160a01b03167fb19e051f8af41150ccccb3fc2c2d8d15f4a4cf434f32a559ba75fe73d6eea20b8f8e8e8e8e8e8e8e8e604051808a6001600160a01b03168152602001896001600160a01b031681526020018860ff16815260200180602001806020018060200184810384528a8a82818152602001925080828437600083820152601f01601f191690910185810384528881526020019050888880828437600083820152601f01601f191690910185810383528681526020019050868680828437600083820152604051601f909101601f19169092018290039e50909c50505050505050505050505050a3508015610e58576001805460ff191690555b50505050505050505050505050565b600061084a82611ae3565b6000610e7f848484611e61565b610eef84610e8b6119f3565b610eea8560405180606001604052806028815260200161254f602891396001600160a01b038a16600090815260356020526040812090610ec96119f3565b6001600160a01b031681526020810191909152604001600020549190611e6e565b6119f7565b826001600160a01b0316846001600160a01b03166000805160206125a5833981519152846040518082815260200191505060405180910390a35060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60395460ff1690565b603b5481565b6000610846610f726119f3565b84610eea8560356000610f836119f3565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611ec8565b603c546000906001600160a01b0316610fca6119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b8152509061103b5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50603e546040805163a9059cbb60e01b81526001600160a01b038681166004830152602482018690529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561109257600080fd5b505af11580156110a6573d6000803e3d6000fd5b505050506040513d60208110156110bc57600080fd5b50919392505050565b603c54603e546040805163d15e005360e01b81526001600160a01b039283166004820152905160009361084a93169163d15e0053916024808301926020929190829003018186803b15801561111957600080fd5b505afa15801561112d573d6000803e3d6000fd5b505050506040513d602081101561114357600080fd5b505161114e84611ae3565b90611d5c565b603c546001600160a01b031690565b600061116d611f29565b905090565b604051806040016040528060018152602001603160f81b81525081565b603c546001600160a01b03166111a36119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906112145760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b508161121f576112b2565b603d546001600160a01b031661123e816112398585611b04565b611c0b565b6040805184815290516001600160a01b038316916000916000805160206125a58339815191529181900360200190a3604080518481526020810184905281516001600160a01b038416927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a2505b5050565b603c546001600160a01b03166112ca6119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b8152509061133b5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b505050565b60388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108275780601f106107fc57610100808354040283529160200191610827565b60006108466113ae6119f3565b84610eea8560405180606001604052806025815260200161262f60259139603560006113d86119f3565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611e6e565b600061141d6114166119f3565b8484611e61565b826001600160a01b031661142f6119f3565b6001600160a01b03166000805160206125a5833981519152846040518082815260200191505060405180910390a350600192915050565b603d546001600160a01b031690565b603e546001600160a01b031690565b600061116d611afe565b603a6020526000908152604090205481565b6001600160a01b0387166114eb576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b83421115611535576040805162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604482015290519081900360640190fd5b6001600160a01b038088166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e08601835280519084012061190160f01b6101008701526101028601969096526101228086019690965281518086039096018652610142850180835286519684019690962093909552610162840180825283905260ff88166101828501526101a284018790526101c284018690525191926001926101e28083019392601f198301929081900390910190855afa15801561164a573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316146116ad576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b6116b8826001611ec8565b6001600160a01b038a166000908152603a60205260409020556116dc8989896119f7565b505050505050505050565b603c546001600160a01b03166116fb6119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b8152509061176c5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b5060006117798383611b04565b60408051808201909152600281526106a760f31b6020820152909150816117e15760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506117ec8582611f38565b603e546040805163a9059cbb60e01b81526001600160a01b038781166004830152602482018790529151919092169163a9059cbb9160448083019260209291908290030181600087803b15801561184257600080fd5b505af1158015611856573d6000803e3d6000fd5b505050506040513d602081101561186c57600080fd5b50506040805184815290516000916001600160a01b038816916000805160206125a58339815191529181900360200190a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051808381526020018281526020019250505060405180910390a35050505050565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b603c546001600160a01b03166119366119f3565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906119a75760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b506119b58383836000611fdc565b816001600160a01b0316836001600160a01b03166000805160206125a5833981519152836040518082815260200191505060405180910390a3505050565b3390565b6001600160a01b038316611a3c5760405162461bcd60e51b815260040180806020018281038252602481526020018061260b6024913960400191505060405180910390fd5b6001600160a01b038216611a815760405162461bcd60e51b81526004018080602001828103825260228152602001806125076022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b031660009081526034602052604090205490565b60365490565b604080518082019091526002815261035360f41b602082015260009082611b6c5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115611be85760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b5082816b033b2e3c9fd0803ce800000086020181611c0257fe5b04949350505050565b6001600160a01b038216611c66576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611c726000838361133b565b603654611c7f8183611ec8565b6036556001600160a01b038316600090815260346020526040902054611ca58184611ec8565b6001600160a01b038516600090815260346020526040812091909155611cc9611f29565b6001600160a01b031614611d5657611cdf611f29565b6001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b158015611d3d57600080fd5b505af1158015611d51573d6000803e3d6000fd5b505050505b50505050565b6000821580611d69575081155b15611d765750600061084a565b816b019d971e4fe8401e740000001981611d8c57fe5b0483111560405180604001604052806002815260200161068760f31b81525090611df75760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600190565b303b1590565b80516112b290603790602084019061242e565b80516112b290603890602084019061242e565b6039805460ff191660ff92909216919091179055565b61133b8383836001611fdc565b60008184841115611ec05760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156108fc5781810151838201526020016108e4565b505050900390565b600082820183811015611f22576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b603f546001600160a01b031690565b6001600160a01b038216611f7d5760405162461bcd60e51b81526004018080602001828103825260218152602001806125c56021913960400191505060405180910390fd5b611f898260008361133b565b603654611f968183612185565b6036556001600160a01b0383166000908152603460209081526040918290205482516060810190935260228084529092611ca5928692906124e590830139839190611e6e565b603e54603c546040805163d15e005360e01b81526001600160a01b03938416600482018190529151919390921691600091839163d15e0053916024808301926020929190829003018186803b15801561203457600080fd5b505afa158015612048573d6000803e3d6000fd5b505050506040513d602081101561205e57600080fd5b5051905060006120718261114e8a611ae3565b905060006120828361114e8a611ae3565b905061209889896120938a87611b04565b6121c7565b8515612127576040805163d5ed393360e01b81526001600160a01b0387811660048301528b811660248301528a81166044830152606482018a90526084820185905260a4820184905291519186169163d5ed39339160c48082019260009290919082900301818387803b15801561210e57600080fd5b505af1158015612122573d6000803e3d6000fd5b505050505b876001600160a01b0316896001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668986604051808381526020018281526020019250505060405180910390a3505050505050505050565b6000611f2283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611e6e565b6001600160a01b03831661220c5760405162461bcd60e51b81526004018080602001828103825260258152602001806125e66025913960400191505060405180910390fd5b6001600160a01b0382166122515760405162461bcd60e51b81526004018080602001828103825260238152602001806124c26023913960400191505060405180910390fd5b61225c83838361133b565b600060346000856001600160a01b03166001600160a01b031681526020019081526020016000205490506122ab8260405180606001604052806026815260200161252960269139839190611e6e565b6001600160a01b0380861660009081526034602052604080822093909355908516815220546122da8184611ec8565b6001600160a01b0385166000908152603460205260408120919091556122fe611f29565b6001600160a01b03161461242757603654612317611f29565b6001600160a01b03166331873e2e8783866040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561237557600080fd5b505af1158015612389573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b031614612425576123ae611f29565b6001600160a01b03166331873e2e8683856040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561240c57600080fd5b505af1158015612420573d6000803e3d6000fd5b505050505b505b5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061246f57805160ff191683800117855561249c565b8280016001018555821561249c579182015b8281111561249c578251825591602001919060010190612481565b506124a89291506124ac565b5090565b5b808211156124a857600081556001016124ad56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220aefcd53c39630fb77d2259cd6158b54bb392728e26035bdfdd9a22ee9e2dadf164736f6c634300060c003361018060405234801561001157600080fd5b50604051610fbb380380610fbb833981810160405260e081101561003457600080fd5b5080516020808301516040840151606085015160808087015160a088015160c0909801519185905295969395929491939161008e90879061007c906108526100c3821b17901c565b6100d360201b6108621790919060201c565b60a05260609690961b6001600160601b03191660c05260e09390935261010091909152610120526101405250610160526101b9565b6b033b2e3c9fd0803ce800000090565b600061011b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061012260201b60201c565b9392505050565b600081848411156101b15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561017657818101518382015260200161015e565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60805160a05160c05160601c60e05161010051610120516101405161016051610d4d61026e6000398061059752806108305250806101dd52806105c752806106b15250806102df528061032c52806105f852508061030352806103715280610643528061071b5250806103505280610622528061074152806107e8525080610400528061080c52508061020152806105315250806105055280610555528061067d52806106f552806107c45250610d4d6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806380031e371161007157806380031e37146101535780639584df281461015b578063a15f30ac1461019f578063b2589544146101a7578063c72c4d10146101af578063ccab01a3146101d3576100a9565b80630bdf953f146100ae57806317319873146100c857806329db497d146100d057806365614f81146101435780637b832f581461014b575b600080fd5b6100b66101db565b60408051918252519081900360200190f35b6100b66101ff565b61012560048036036101008110156100e757600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060808101359060a08101359060c08101359060e00135610223565b60408051938452602084019290925282820152519081900360600190f35b6100b66102dd565b6100b6610301565b6100b6610325565b610125600480360360c081101561017157600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a001356103a0565b6100b66107c2565b6100b66107e6565b6101b761080a565b604080516001600160a01b039092168252519081900360200190f35b6100b661082e565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806000808b6001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561027657600080fd5b505afa15801561028a573d6000803e3d6000fd5b505050506040513d60208110156102a057600080fd5b505190506102b8896102b2838d6108ad565b90610862565b90506102c88c828a8a8a8a6103a0565b93509350935050985098509895505050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b600061039b7f00000000000000000000000000000000000000000000000000000000000000006103957f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006108ad565b906108ad565b905090565b60008060006103ad610ce8565b6103b788886108ad565b808252600060208301819052604083018190526060830152156103f25780516103ed906103e5908b906108ad565b825190610907565b6103f5565b60005b8160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633618abba6040518163ffffffff1660e01b815260040160206040518083038186803b15801561045757600080fd5b505afa15801561046b573d6000803e3d6000fd5b505050506040513d602081101561048157600080fd5b50516040805163bb85c0bb60e01b81526001600160a01b038d811660048301529151919092169163bb85c0bb916024808301926020929190829003018186803b1580156104cd57600080fd5b505afa1580156104e1573d6000803e3d6000fd5b505050506040513d60208110156104f757600080fd5b5051604082015260808101517f0000000000000000000000000000000000000000000000000000000000000000101561067257600061058d7f00000000000000000000000000000000000000000000000000000000000000006105877f0000000000000000000000000000000000000000000000000000000000000000856080015161086290919063ffffffff16565b90610907565b90506105eb6105bc7f000000000000000000000000000000000000000000000000000000000000000083610a4b565b6040840151610395907f00000000000000000000000000000000000000000000000000000000000000006108ad565b604083015261066761061d7f000000000000000000000000000000000000000000000000000000000000000083610a4b565b6103957f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006108ad565b60208301525061076c565b6106e16106d66106af7f0000000000000000000000000000000000000000000000000000000000000000846080015161090790919063ffffffff16565b7f000000000000000000000000000000000000000000000000000000000000000090610a4b565b6040830151906108ad565b604082015260808101516107669061073f907f000000000000000000000000000000000000000000000000000000000000000090610587907f0000000000000000000000000000000000000000000000000000000000000000610a4b565b7f0000000000000000000000000000000000000000000000000000000000000000906108ad565b60208201525b61079f61077b61271087610862565b61079983608001516107938c8c87602001518d610b0c565b90610a4b565b90610b73565b606082018190526040820151602090920151909b919a5098509650505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000090565b6b033b2e3c9fd0803ce800000090565b60006108a483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610c10565b90505b92915050565b6000828201838110156108a4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080518082019091526002815261035360f41b6020820152600090826109ac5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610971578181015183820152602001610959565b50505050905090810190601f16801561099e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce8000000821904851115610a285760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b5082816b033b2e3c9fd0803ce800000086020181610a4257fe5b04949350505050565b6000821580610a58575081155b15610a65575060006108a7565b816b019d971e4fe8401e740000001981610a7b57fe5b0483111560405180604001604052806002815260200161068760f31b81525090610ae65760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b506b033b2e3c9fd0803ce80000006002815b048385020181610b0457fe5b049392505050565b600080610b1986866108ad565b905080610b2a576000915050610b6b565b6000610b398561079388610c6a565b90506000610b4a856107938a610c6a565b90506000610b64610b5a85610c6a565b61058785856108ad565b9450505050505b949350505050565b6000821580610b80575081155b15610b8d575060006108a7565b816113881981610b9957fe5b0483111560405180604001604052806002815260200161068760f31b81525090610c045760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b50612710600281610af8565b60008184841115610c625760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b505050900390565b6000633b9aca0082810290839082041460405180604001604052806002815260200161068760f31b81525090610ce15760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610971578181015183820152602001610959565b5092915050565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160008152509056fea26469706673582212202de93b4e5bd8eff563a6594cebe41ba1046984974b817cc22176094a2c3682bf64736f6c634300060c0033a2646970667358221220d8a19c843b164134989a7b055cc5f832a11a0edabc0a69eaef2546a1267984ee64736f6c634300060c0033";
