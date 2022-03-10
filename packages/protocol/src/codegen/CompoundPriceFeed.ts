/* eslint-disable */
// @ts-nocheck
import { BytesLike, BigNumber, BigNumberish } from 'ethers';
import { contract, Call, Send, AddressLike, Contract } from '@enzymefinance/ethers';

export type CompoundPriceFeedArgs = [_fundDeployer: AddressLike, _weth: AddressLike, _ceth: AddressLike];

// prettier-ignore
export interface CompoundPriceFeed extends Contract<CompoundPriceFeed> {
  addCTokens: Send<(_cTokens: AddressLike[]) => void, CompoundPriceFeed>
  calcUnderlyingValues: Send<(_derivative: AddressLike, _derivativeAmount: BigNumberish) => { underlyings_: string[], underlyingAmounts_: BigNumber[] }, CompoundPriceFeed>
  getFundDeployer: Call<() => string, CompoundPriceFeed>
  getOwner: Call<() => string, CompoundPriceFeed>
  getTokenFromCToken: Call<(_cToken: AddressLike) => string, CompoundPriceFeed>
  isSupportedAsset: Call<(_asset: AddressLike) => boolean, CompoundPriceFeed>
}

let CompoundPriceFeedBytecode: string | undefined = undefined;
if (typeof window === 'undefined') {
  CompoundPriceFeedBytecode =
    '0x60a060405234801561001057600080fd5b50604051610af8380380610af88339818101604052606081101561003357600080fd5b508051602080830151604093840151606084901b6001600160601b0319166080526001600160a01b0380821660008181529485905286852080546001600160a01b031916928516928317905595519495929491939092917f7acf7482a03de3fea14ab9eb8fa6f7524bb1a61a24898d2337379a5cf7421d7e9190a350505060805160601c610a206100d860003980610675528061071d52806107445250610a206000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631d249354146100675780634cae3ad7146100d9578063727212f61461011b578063893d20e8146101e057806397c0ac87146101e85780639be918e6146101f0575b600080fd5b6100d76004803603602081101561007d57600080fd5b81019060208101813564010000000081111561009857600080fd5b8201836020820111156100aa57600080fd5b803590602001918460208302840111640100000000831117156100cc57600080fd5b50909250905061022a565b005b6100ff600480360360208110156100ef57600080fd5b50356001600160a01b03166104be565b604080516001600160a01b039092168252519081900360200190f35b6101476004803603604081101561013157600080fd5b506001600160a01b0381351690602001356104dc565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561018b578181015183820152602001610173565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156101ca5781810151838201526020016101b2565b5050505090500194505050505060405180910390f35b6100ff610671565b6100ff6106fd565b6102166004803603602081101561020657600080fd5b50356001600160a01b0316610766565b604080519115158252519081900360200190f35b610232610671565b6001600160a01b0316336001600160a01b0316146102815760405162461bcd60e51b815260040180806020018281038252604981526020018061092c6049913960600191505060405180910390fd5b806102d3576040805162461bcd60e51b815260206004820152601a60248201527f61646443546f6b656e733a20456d707479205f63546f6b656e73000000000000604482015290519081900360640190fd5b60005b818110156104b957600080808585858181106102ee57fe5b6001600160a01b0360209182029390930135831684528301939093526040909101600020541691909114905061036b576040805162461bcd60e51b815260206004820152601d60248201527f61646443546f6b656e733a2056616c756520616c726561647920736574000000604482015290519081900360640190fd5b600083838381811061037957fe5b905060200201356001600160a01b03166001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156103c357600080fd5b505af11580156103d7573d6000803e3d6000fd5b505050506040513d60208110156103ed57600080fd5b505190508060008086868681811061040157fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b031684848481811061046b57fe5b905060200201356001600160a01b03166001600160a01b03167f7acf7482a03de3fea14ab9eb8fa6f7524bb1a61a24898d2337379a5cf7421d7e60405160405180910390a3506001016102d6565b505050565b6001600160a01b039081166000908152602081905260409020541690565b604080516001808252818301909252606091829190602080830190803683375050506001600160a01b0385811660009081526020819052604081205483519395509091169184919061052a57fe5b60200260200101906001600160a01b031690816001600160a01b03168152505060006001600160a01b03168260008151811061056257fe5b60200260200101516001600160a01b031614156105b05760405162461bcd60e51b815260040180806020018281038252602c8152602001806109bf602c913960400191505060405180910390fd5b6040805160018082528183019092529060208083019080368337019050509050610651670de0b6b3a764000061064b866001600160a01b031663182df0f56040518163ffffffff1660e01b815260040160206040518083038186803b15801561061857600080fd5b505afa15801561062c573d6000803e3d6000fd5b505050506040513d602081101561064257600080fd5b50518690610786565b906107e8565b8160008151811061065e57fe5b6020026020010181815250509250929050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b1580156106cc57600080fd5b505afa1580156106e0573d6000803e3d6000fd5b505050506040513d60208110156106f657600080fd5b5051905090565b6000610741604051806060016040528060298152602001610975602991397f000000000000000000000000000000000000000000000000000000000000000061084f565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b0390811660009081526020819052604090205416151590565b600082610795575060006107e2565b828202828482816107a257fe5b04146107df5760405162461bcd60e51b815260040180806020018281038252602181526020018061099e6021913960400191505060405180910390fd5b90505b92915050565b600080821161083e576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161084757fe5b049392505050565b61090682826040516024018080602001836001600160a01b03168152602001828103825284818151815260200191508051906020019080838360005b838110156108a357818101518382015260200161088b565b50505050905090810190601f1680156108d05780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052935061090a92505050565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa505050505056fe6f6e6c7946756e644465706c6f7965724f776e65723a204f6e6c79207468652046756e644465706c6f796572206f776e65722063616e2063616c6c20746869732066756e6374696f6e46756e644465706c6f7965724f776e65724d6978696e3a67657446756e644465706c6f7965723a2573536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7763616c63556e6465726c79696e6756616c7565733a20556e737570706f727465642064657269766174697665a2646970667358221220eeb6cf266d032945eefd7bf25a2a16e34baad05be681074b8e8a0695836d79c664736f6c634300060c0033';
}

// prettier-ignore
export const CompoundPriceFeed = contract<CompoundPriceFeed, CompoundPriceFeedArgs>(CompoundPriceFeedBytecode)`
  constructor(address _fundDeployer, address _weth, address _ceth)
  event CTokenAdded(address indexed cToken, address indexed token)
  function addCTokens(address[] _cTokens)
  function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount) returns (address[] underlyings_, uint256[] underlyingAmounts_)
  function getFundDeployer() view returns (address fundDeployer_)
  function getOwner() view returns (address owner_)
  function getTokenFromCToken(address _cToken) view returns (address token_)
  function isSupportedAsset(address _asset) view returns (bool isSupported_)
`;
