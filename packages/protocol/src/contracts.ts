import type { AddressLike, Call, Contract, Send } from '@enzymefinance/ethers';
import { contract } from '@enzymefinance/ethers';
import type { BigNumber, BigNumberish } from 'ethers';

// Persistent core
export * from './codegen/Dispatcher';
export * from './codegen/VaultProxy';

// Persistent release interfaces
export * from './codegen/IMigrationHookHandler';

// Persistent
export * from './codegen/AddressListRegistry';
export * from './codegen/FundValueCalculatorRouter';
export * from './codegen/FundValueCalculatorUsdWrapper';

// Release core
export * from './codegen/FundDeployer';
export * from './codegen/ComptrollerLib';
export * from './codegen/ComptrollerProxy';
export * from './codegen/VaultLib';

// Infrastructure
export * from './codegen/AssetFinalityResolver';
export * from './codegen/ProtocolFeeReserveLib';
export * from './codegen/ProtocolFeeReserveProxy';
export * from './codegen/ProtocolFeeTracker';
export * from './codegen/ValueInterpreter';

// Extensions
export * from './codegen/IExtension';
export * from './codegen/IExternalPosition';
export * from './codegen/ExternalPositionFactory';
export * from './codegen/ExternalPositionManager';
export * from './codegen/IExternalPositionProxy';
export * from './codegen/FeeManager';
export * from './codegen/IntegrationManager';
export * from './codegen/PolicyManager';

// Derivative price feeds
export * from './codegen/IDerivativePriceFeed';
export * from './codegen/AavePriceFeed';
export * from './codegen/CompoundPriceFeed';
export * from './codegen/CurvePriceFeed';
export * from './codegen/IdlePriceFeed';
export * from './codegen/LidoStethPriceFeed';
export * from './codegen/PoolTogetherV4PriceFeed';
export * from './codegen/RevertingPriceFeed';
export * from './codegen/StakehoundEthPriceFeed';
export * from './codegen/SynthetixPriceFeed';
export * from './codegen/UniswapV2PoolPriceFeed';
export * from './codegen/YearnVaultV2PriceFeed';

// Integration adapters
export * from './codegen/AaveAdapter';
export * from './codegen/CompoundAdapter';
export * from './codegen/CurveExchangeAdapter';
export * from './codegen/CurveLiquidityAaveAdapter';
export * from './codegen/CurveLiquidityEursAdapter';
export * from './codegen/CurveLiquiditySethAdapter';
export * from './codegen/CurveLiquidityStethAdapter';
export * from './codegen/IdleAdapter';
export * from './codegen/ParaSwapV4Adapter';
export * from './codegen/ParaSwapV5Adapter';
export * from './codegen/PoolTogetherV4Adapter';
export * from './codegen/SynthetixAdapter';
export * from './codegen/UniswapV2ExchangeAdapter';
export * from './codegen/UniswapV2LiquidityAdapter';
export * from './codegen/UniswapV3Adapter';
export * from './codegen/YearnVaultV2Adapter';
export * from './codegen/ZeroExV2Adapter';

// External positions
export * from './codegen/CompoundDebtPositionParser';
export * from './codegen/CompoundDebtPositionLib';
export * from './codegen/IExternalPositionParser';
export * from './codegen/UniswapV3LiquidityPositionParser';
export * from './codegen/UniswapV3LiquidityPositionLib';

// Fees
export * from './codegen/IFee';
export * from './codegen/EntranceRateBurnFee';
export * from './codegen/EntranceRateDirectFee';
export * from './codegen/ExitRateBurnFee';
export * from './codegen/ExitRateDirectFee';
export * from './codegen/ManagementFee';
export * from './codegen/PerformanceFee';

// Policies
export * from './codegen/IPolicy';
export * from './codegen/AllowedAdapterIncomingAssetsPolicy';
export * from './codegen/AllowedAdaptersPolicy';
export * from './codegen/AllowedAssetsForRedemptionPolicy';
export * from './codegen/AllowedDepositRecipientsPolicy';
export * from './codegen/AllowedExternalPositionTypesPolicy';
export * from './codegen/AllowedSharesTransferRecipientsPolicy';
export * from './codegen/CumulativeSlippageTolerancePolicy';
export * from './codegen/GuaranteedRedemptionPolicy';
export * from './codegen/MinAssetBalancesPostRedemptionPolicy';
export * from './codegen/MinMaxInvestmentPolicy';
export * from './codegen/OnlyRemoveDustExternalPositionPolicy';
export * from './codegen/OnlyUntrackDustOrPricelessAssetsPolicy';

// Peripheral
export * from './codegen/DepositWrapper';
export * from './codegen/FundValueCalculator';
export * from './codegen/UnpermissionedActionsWrapper';

// Test contracts
export * from './codegen/TestAddressArrayLib';
export * from './codegen/TestPeggedDerivativesPriceFeed';
export * from './codegen/TestPricelessAssetBypassMixin';
export * from './codegen/TestSinglePeggedDerivativePriceFeed';
export * from './codegen/TestSingleUnderlyingDerivativeRegistry';
export * from './codegen/TestUpdatableFeeRecipientBase';

// Mocks
export * from './codegen/MockVaultLib';
export * from './codegen/MockGenericAdapter';
export * from './codegen/MockGenericIntegratee';
export * from './codegen/MockGenericExternalPositionLib';
export * from './codegen/MockGenericExternalPositionParser';
export * from './codegen/MockToken';
export * from './codegen/MockReentrancyToken';
export * from './codegen/MockChainlinkPriceSource';

// Gas relayer
export * from './codegen/GasRelayPaymasterFactory';
export * from './codegen/GasRelayPaymasterLib';

// External interfaces
export * from './codegen/ICERC20';
export * from './codegen/ICEther';
export * from './codegen/IChainlinkAggregator';
export * from './codegen/ICurveAddressProvider';
export * from './codegen/ICurveLiquidityGaugeV2';
export * from './codegen/ICurveLiquidityPool';
export * from './codegen/ICurveRegistry';
export * from './codegen/ICurveStableSwapSteth';
export * from './codegen/IGsnRelayHub';
export * from './codegen/IIdleTokenV4';
export * from './codegen/ISynthetixAddressResolver';
export * from './codegen/ISynthetixExchangeRates';
export * from './codegen/ISynthetixExchanger';
export * from './codegen/ISynthetixProxyERC20';
export * from './codegen/ISynthetixSynth';
export * from './codegen/IUniswapV2Factory';
export * from './codegen/IUniswapV2Pair';
export * from './codegen/IUniswapV2Router2';
export * from './codegen/IYearnVaultV2';

export interface StandardToken extends Contract<StandardToken> {
  allowance: Call<(owner: AddressLike, spender: AddressLike) => BigNumber, Contract<any>>;
  approve: Send<(spender: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
  balanceOf: Call<(account: AddressLike) => BigNumber, Contract<any>>;
  decimals: Call<() => BigNumber, Contract<any>>;
  symbol: Call<() => string, Contract<any>>;
  totalSupply: Call<() => BigNumber, Contract<any>>;
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
  transferFrom: Send<(sender: AddressLike, recipient: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
}

export const StandardToken = contract<StandardToken>()`
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event Transfer(address indexed from, address indexed to, uint256 value)
  function allowance(address owner, address spender) view returns (uint256)
  function approve(address spender, uint256 amount) returns (bool)
  function balanceOf(address account) view returns (uint256)
  function decimals() view returns (uint8)
  function symbol() view returns (string)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
`;

export interface WETH extends Contract<WETH> {
  allowance: Call<(owner: AddressLike, spender: AddressLike) => BigNumber, Contract<any>>;
  approve: Send<(spender: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
  balanceOf: Call<(account: AddressLike) => BigNumber, Contract<any>>;
  decimals: Call<() => BigNumber, Contract<any>>;
  symbol: Call<() => string, Contract<any>>;
  totalSupply: Call<() => BigNumber, Contract<any>>;
  transfer: Send<(recipient: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
  transferFrom: Send<(sender: AddressLike, recipient: AddressLike, amount: BigNumberish) => boolean, Contract<any>>;
  deposit: Send<() => void, Contract<any>>;
  withdraw: Send<(amount: BigNumberish) => void, Contract<any>>;
}

export const WETH = contract<WETH>()`
  event Approval(address indexed owner, address indexed spender, uint256 value)
  event Transfer(address indexed from, address indexed to, uint256 value)
  event Deposit(address indexed destination, uint256 value)
  event Withdrawal(address indexed source, uint256 value)
  function allowance(address owner, address spender) view returns (uint256)
  function approve(address spender, uint256 amount) returns (bool)
  function balanceOf(address account) view returns (uint256)
  function decimals() view returns (uint8)
  function symbol() view returns (string)
  function totalSupply() view returns (uint256)
  function transfer(address recipient, uint256 amount) returns (bool)
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool)
  function deposit()
  function withdraw(uint256 amount)
`;

export interface UniswapV2Router extends Contract<UniswapV2Router> {
  getAmountsOut: Call<(amountIn: BigNumberish, path: AddressLike[]) => BigNumber[], Contract<any>>;
  quote: Call<(amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish) => BigNumber, Contract<any>>;
  swapExactTokensForTokens: Send<
    (
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish,
    ) => BigNumber[],
    Contract<any>
  >;
}

export const UniswapV2Router = contract<UniswapV2Router>()`
  function getAmountsOut(uint256 amountIn, address[] path) view returns (uint256[])
  function quote(uint256 amountA, uint256 reserveA, uint256 reserveB) pure returns (uint256)
  function swapExactTokensForTokens(uint256 amountIn, uint256 amountOutMin, address[] path, address to, uint256 deadline) returns (uint256[])
`;
