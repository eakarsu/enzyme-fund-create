/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type AllowedAdaptersPolicyArgs = [_policyManager: AddressLike, _addressListRegistry: AddressLike];

// prettier-ignore
export interface AllowedAdaptersPolicy extends Contract<AllowedAdaptersPolicy> {
  activateForFund: Send<(arg0: AddressLike) => void, AllowedAdaptersPolicy>
  addFundSettings: Send<(_comptrollerProxy: AddressLike, _encodedSettings: BytesLike) => void, AllowedAdaptersPolicy>
  canDisable: Call<() => boolean, AllowedAdaptersPolicy>
  getAddressListRegistry: Call<() => string, AllowedAdaptersPolicy>
  getListIdsForFund: Call<(_comptrollerProxy: AddressLike) => BigNumber[], AllowedAdaptersPolicy>
  getPolicyManager: Call<() => string, AllowedAdaptersPolicy>
  identifier: Call<() => string, AllowedAdaptersPolicy>
  implementedHooks: Call<() => BigNumber[], AllowedAdaptersPolicy>
  passesRule: Call<(_comptrollerProxy: AddressLike, _adapter: AddressLike) => boolean, AllowedAdaptersPolicy>
  updateFundSettings: Send<(arg0: AddressLike, arg1: BytesLike) => void, AllowedAdaptersPolicy>
  validateRule: Send<(_comptrollerProxy: AddressLike, arg1: BigNumberish, _encodedArgs: BytesLike) => boolean, AllowedAdaptersPolicy>
}

let AllowedAdaptersPolicyBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  AllowedAdaptersPolicyBytecode =
    '0x60c06040523480156200001157600080fd5b50604051620013ed380380620013ed833981016040819052620000349162000066565b6001600160601b0319606092831b8116608052911b1660a052620000d1565b80516200006081620000b7565b92915050565b600080604083850312156200007a57600080fd5b600062000088858562000053565b92505060206200009b8582860162000053565b9150509250929050565b60006001600160a01b03821662000060565b620000c281620000a5565b8114620000ce57600080fd5b50565b60805160601c60a05160601c6112ed62000100600039806102725250806101c052806103b252506112ed6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637998a1c4116100715780637998a1c41461011c578063b67cb40c14610131578063cbf54bb214610144578063ceb9a0ad14610159578063d44ad6cb1461016c578063dffd7c6f14610174576100a9565b80630d4d7510146100ae5780630f5f6b4f146100c35780631ef92578146100d6578063579be718146100f45780637470893414610107575b600080fd5b6100c16100bc366004610c4f565b610194565b005b6100c16100d1366004610c4f565b6101b5565b6100de61020d565b6040516100eb91906110ef565b60405180910390f35b6100de610102366004610ca4565b610212565b61010f610270565b6040516100eb919061106b565b610124610294565b6040516100eb91906110fd565b6100de61013f366004610c15565b6102be565b61014c610356565b6040516100eb91906110a6565b6100c1610167366004610ad9565b6103ad565b61010f6103b0565b610187610182366004610ad9565b6103d4565b6040516100eb91906110b7565b60405162461bcd60e51b81526004016101ac9061110e565b60405180910390fd5b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101fd5760405162461bcd60e51b81526004016101ac9061111e565b61020883838361043f565b505050565b600090565b60008061025484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061070192505050565b505050505091505061026686826102be565b9695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000090565b60408051808201909152601081526f414c4c4f5745445f414441505445525360801b602082015290565b60006102c8610270565b6001600160a01b03166375674f466102df856103d4565b846040518363ffffffff1660e01b81526004016102fd9291906110c8565b60206040518083038186803b15801561031557600080fd5b505afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d9190610d68565b90505b92915050565b6040805160018082528183019092526060916020808301908036833701905050905060018160008151811061038757fe5b6020026020010190600981111561039a57fe5b908160098111156103a757fe5b90525090565b50565b7f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b0381166000908152602081815260409182902080548351818402810184019094528084526060939283018282801561043257602002820191906000526020600020905b81548152602001906001019080831161041e575b505050505090505b919050565b60608061044e83850185610d0b565b91509150606081518351016001600160401b038111801561046e57600080fd5b50604051908082528060200260200182016040528015610498578160200160208202803683370190505b5090508051600014156104bd5760405162461bcd60e51b81526004016101ac9061112e565b6001600160a01b038616600090815260208190526040902054156104fc576001600160a01b03861660009081526020819052604081206104fc916107fc565b60005b835181101561058f5783818151811061051457fe5b602002602001015182828151811061052857fe5b602002602001018181525050600080886001600160a01b03166001600160a01b0316815260200190815260200160002084828151811061056457fe5b60209081029190910181015182546001818101855560009485529290932090920191909155016104ff565b508151156106b8576000866001600160a01b031663c98091876040518163ffffffff1660e01b815260040160206040518083038186803b1580156105d257600080fd5b505afa1580156105e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060a9190610aff565b905060005b83518110156106b557600081865101905061063d8386848151811061063057fe5b6020026020010151610737565b84828151811061064957fe5b6020026020010181815250506000808a6001600160a01b03166001600160a01b0316815260200190815260200160002084828151811061068557fe5b6020908102919091018101518254600181810185556000948552929093209092019190915591909101905061060f565b50505b856001600160a01b03167fd63f5b55f54cdda3234eab3aa26d85b99854a43efea66e0c459220fd7b3a332f826040516106f191906110b7565b60405180910390a2505050505050565b6000806000606080606080878060200190518101906107209190610b1d565b959e949d50929b5090995097509550909350915050565b6000806060610745846107db565b91509150610751610270565b6001600160a01b031663be68406e8684846040518463ffffffff1660e01b815260040161078093929190611079565b602060405180830381600087803b15801561079a57600080fd5b505af11580156107ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d29190610dcd565b95945050505050565b60006060828060200190518101906107f39190610d86565b91509150915091565b50805460008255906000526020600020908101906103ad91905b8082111561082a5760008155600101610816565b5090565b80356103508161126e565b80516103508161126e565b600082601f83011261085557600080fd5b815161086861086382611164565b61113e565b9150818183526020840193506020810190508385602084028201111561088d57600080fd5b60005b838110156108b957816108a38882610839565b8452506020928301929190910190600101610890565b5050505092915050565b600082601f8301126108d457600080fd5b81356108e261086382611164565b81815260209384019390925082018360005b838110156108b9578135860161090a8882610a5e565b84525060209283019291909101906001016108f4565b600082601f83011261093157600080fd5b813561093f61086382611164565b9150818183526020840193506020810190508385602084028201111561096457600080fd5b60005b838110156108b9578161097a8882610ac3565b8452506020928301929190910190600101610967565b600082601f8301126109a157600080fd5b81516109af61086382611164565b915081818352602084019350602081019050838560208402820111156109d457600080fd5b60005b838110156108b957816109ea8882610ace565b84525060209283019291909101906001016109d7565b805161035081611282565b80516103508161128b565b60008083601f840112610a2857600080fd5b5081356001600160401b03811115610a3f57600080fd5b602083019150836001820283011115610a5757600080fd5b9250929050565b600082601f830112610a6f57600080fd5b8135610a7d61086382611184565b91508082526020830160208301858383011115610a9957600080fd5b610aa4838284611214565b50505092915050565b803561035081611294565b8051610350816112a1565b8035610350816112ae565b8051610350816112ae565b600060208284031215610aeb57600080fd5b6000610af7848461082e565b949350505050565b600060208284031215610b1157600080fd5b6000610af78484610839565b600080600080600080600060e0888a031215610b3857600080fd5b6000610b448a8a610839565b9750506020610b558a828b01610839565b9650506040610b668a828b01610a0b565b95505060608801516001600160401b03811115610b8257600080fd5b610b8e8a828b01610844565b94505060808801516001600160401b03811115610baa57600080fd5b610bb68a828b01610990565b93505060a08801516001600160401b03811115610bd257600080fd5b610bde8a828b01610844565b92505060c08801516001600160401b03811115610bfa57600080fd5b610c068a828b01610990565b91505092959891949750929550565b60008060408385031215610c2857600080fd5b6000610c34858561082e565b9250506020610c458582860161082e565b9150509250929050565b600080600060408486031215610c6457600080fd5b6000610c70868661082e565b93505060208401356001600160401b03811115610c8c57600080fd5b610c9886828701610a16565b92509250509250925092565b60008060008060608587031215610cba57600080fd5b6000610cc6878761082e565b9450506020610cd787828801610aad565b93505060408501356001600160401b03811115610cf357600080fd5b610cff87828801610a16565b95989497509550505050565b60008060408385031215610d1e57600080fd5b82356001600160401b03811115610d3457600080fd5b610d4085828601610920565b92505060208301356001600160401b03811115610d5c57600080fd5b610c45858286016108c3565b600060208284031215610d7a57600080fd5b6000610af78484610a00565b60008060408385031215610d9957600080fd5b6000610da58585610ab8565b92505060208301516001600160401b03811115610dc157600080fd5b610c4585828601610844565b600060208284031215610ddf57600080fd5b6000610af78484610ace565b6000610df78383610e17565b505060200190565b6000610df78383610f24565b6000610df78383611062565b610e20816111be565b82525050565b6000610e31826111b1565b610e3b81856111b5565b9350610e46836111ab565b8060005b83811015610e74578151610e5e8882610deb565b9750610e69836111ab565b925050600101610e4a565b509495945050505050565b6000610e8a826111b1565b610e9481856111b5565b9350610e9f836111ab565b8060005b83811015610e74578151610eb78882610dff565b9750610ec2836111ab565b925050600101610ea3565b6000610ed8826111b1565b610ee281856111b5565b9350610eed836111ab565b8060005b83811015610e74578151610f058882610e0b565b9750610f10836111ab565b925050600101610ef1565b610e20816111c9565b610e20816111fe565b610e2081611209565b6000610f41826111b1565b610f4b81856111b5565b9350610f5b818560208601611220565b610f6481611250565b9093019392505050565b6000610f7b6037836111b5565b7f75706461746546756e6453657474696e67733a2055706461746573206e6f742081527f616c6c6f77656420666f72207468697320706f6c696379000000000000000000602082015260400192915050565b6000610fda6029836111b5565b7f4f6e6c792074686520506f6c6963794d616e616765722063616e206d616b65208152681d1a1a5cc818d85b1b60ba1b602082015260400192915050565b60006110256028836111b5565b7f5f5f7570646174654c69737473466f7246756e643a204e6f206c6973747320738152671c1958da599a595960c21b602082015260400192915050565b610e20816111fb565b602081016103508284610e17565b606081016110878286610e17565b6110946020830185610f2d565b81810360408301526107d28184610e26565b6020808252810161034d8184610e7f565b6020808252810161034d8184610ecd565b604080825281016110d98185610ecd565b90506110e86020830184610e17565b9392505050565b602081016103508284610f1b565b6020808252810161034d8184610f36565b6020808252810161035081610f6e565b6020808252810161035081610fcd565b6020808252810161035081611018565b6040518181016001600160401b038111828210171561115c57600080fd5b604052919050565b60006001600160401b0382111561117a57600080fd5b5060209081020190565b60006001600160401b0382111561119a57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b6000610350826111ef565b151590565b6001600160e01b03191690565b8061043a8161125a565b8061043a81611264565b6001600160a01b031690565b90565b6000610350826111db565b6000610350826111e5565b82818337506000910152565b60005b8381101561123b578181015183820152602001611223565b8381111561124a576000848401525b50505050565b601f01601f191690565b600a81106103ad57fe5b600481106103ad57fe5b611277816111be565b81146103ad57600080fd5b611277816111c9565b611277816111ce565b600a81106103ad57600080fd5b600481106103ad57600080fd5b611277816111fb56fea26469706673582212204a50b6ec30d4d6106423c493c7c549e94cf435ebc25f929cd9c967454191ffbc64736f6c634300060c0033';
}

// prettier-ignore
export const AllowedAdaptersPolicy = contract<AllowedAdaptersPolicy, AllowedAdaptersPolicyArgs>(AllowedAdaptersPolicyBytecode)`
  constructor(address _policyManager, address _addressListRegistry)
  event ListsSetForFund(address indexed comptrollerProxy, uint256[] listIds)
  function activateForFund(address)
  function addFundSettings(address _comptrollerProxy, bytes _encodedSettings)
  function canDisable() pure returns (bool canDisable_)
  function getAddressListRegistry() view returns (address addressListRegistry_)
  function getListIdsForFund(address _comptrollerProxy) view returns (uint256[] listIds_)
  function getPolicyManager() view returns (address policyManager_)
  function identifier() pure returns (string identifier_)
  function implementedHooks() pure returns (uint8[] implementedHooks_)
  function passesRule(address _comptrollerProxy, address _adapter) view returns (bool isValid_)
  function updateFundSettings(address, bytes)
  function validateRule(address _comptrollerProxy, uint8, bytes _encodedArgs) returns (bool isValid_)
`;
