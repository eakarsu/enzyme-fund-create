import type { AddressLike, Call, Contract, Send } from '@enzymefinance/ethers';
import { contract } from '@enzymefinance/ethers';
import type { SignerWithAddress } from '@enzymefinance/hardhat';
import type {
  ComptrollerLib,
  CurveExchangeAdapter,
  CurveLiquidityAaveAdapter,
  CurveLiquidityEursAdapter,
  CurveLiquiditySethAdapter,
  CurveLiquidityStethAdapter,
  IntegrationManager,
  StandardToken,
} from '@enzymefinance/protocol';
import {
  callOnIntegrationArgs,
  claimRewardsSelector,
  curveAaveLendAndStakeArgs,
  curveAaveLendArgs,
  curveAaveRedeemArgs,
  curveAaveStakeArgs,
  curveAaveUnstakeAndRedeemArgs,
  curveAaveUnstakeArgs,
  curveEursLendAndStakeArgs,
  curveEursLendArgs,
  curveEursRedeemArgs,
  curveEursStakeArgs,
  curveEursUnstakeAndRedeemArgs,
  curveEursUnstakeArgs,
  curveSethLendAndStakeArgs,
  curveSethLendArgs,
  curveSethRedeemArgs,
  curveSethStakeArgs,
  curveSethUnstakeAndRedeemArgs,
  curveSethUnstakeArgs,
  curveStethLendAndStakeArgs,
  curveStethLendArgs,
  curveStethRedeemArgs,
  curveStethStakeArgs,
  curveStethUnstakeAndRedeemArgs,
  curveStethUnstakeArgs,
  curveTakeOrderArgs,
  IntegrationManagerActionId,
  lendAndStakeSelector,
  lendSelector,
  redeemSelector,
  stakeSelector,
  takeOrderSelector,
  unstakeAndRedeemSelector,
  unstakeSelector,
} from '@enzymefinance/protocol';
import type { BigNumberish } from 'ethers';
import { BigNumber, constants, utils } from 'ethers';

export interface CurveLiquidityGaugeV2 extends Contract<CurveLiquidityGaugeV2> {
  claim_rewards: Send<(_addr: AddressLike) => void>;
  integrate_fraction: Call<(_for: AddressLike) => BigNumber, Contract<any>>;
}

export const CurveLiquidityGaugeV2 = contract<CurveLiquidityGaugeV2>()`
  function claim_rewards(address)
  function integrate_fraction(address) view returns (uint256)
`;

// prettier-ignore
export interface CurveSwaps extends Contract<CurveSwaps> {
  get_best_rate: Call<(_from: AddressLike, to: AddressLike, amount: BigNumberish) => { bestPool: AddressLike, amountReceived: BigNumber }, CurveSwaps>
}

export const CurveSwaps = contract<CurveSwaps>()`
  function get_best_rate(address _from, address to, uint256 amount) view returns (address bestPool, uint256 amountReceived)
`;

export interface CurveMinter extends Contract<CurveMinter> {
  mint_for: Send<(_gauge_address: AddressLike, _for: AddressLike) => void>;
}

export const CurveMinter = contract<CurveMinter>()`
  function mint_for(address,address)
`;

// exchanges

export async function curveTakeOrder({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveExchangeAdapter,
  pool,
  outgoingAsset,
  outgoingAssetAmount = utils.parseEther('1'),
  incomingAsset,
  minIncomingAssetAmount = utils.parseEther('1'),
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveExchangeAdapter: CurveExchangeAdapter;
  pool: AddressLike;
  outgoingAsset: StandardToken;
  outgoingAssetAmount?: BigNumberish;
  incomingAsset: StandardToken;
  minIncomingAssetAmount?: BigNumberish;
}) {
  const takeOrderArgs = curveTakeOrderArgs({
    incomingAsset,
    minIncomingAssetAmount,
    outgoingAsset,
    outgoingAssetAmount,
    pool,
  });

  const callArgs = callOnIntegrationArgs({
    adapter: curveExchangeAdapter,
    encodedCallArgs: takeOrderArgs,
    selector: takeOrderSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

// aave pool

export function curveAaveClaimRewards({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: constants.HashZero,
    selector: claimRewardsSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveLend({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingAaveDaiAmount = BigNumber.from(0),
  outgoingAaveUsdcAmount = BigNumber.from(0),
  outgoingAaveUsdtAmount = BigNumber.from(0),
  minIncomingLPTokenAmount = BigNumber.from(1),
  useUnderlyings = false,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingAaveDaiAmount?: BigNumberish;
  outgoingAaveUsdcAmount?: BigNumberish;
  outgoingAaveUsdtAmount?: BigNumberish;
  minIncomingLPTokenAmount?: BigNumberish;
  useUnderlyings?: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveLendArgs({
      minIncomingLPTokenAmount,
      outgoingAaveDaiAmount,
      outgoingAaveUsdcAmount,
      outgoingAaveUsdtAmount,
      useUnderlyings,
    }),
    selector: lendSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveLendAndStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingAaveDaiAmount = BigNumber.from(0),
  outgoingAaveUsdcAmount = BigNumber.from(0),
  outgoingAaveUsdtAmount = BigNumber.from(0),
  minIncomingLiquidityGaugeTokenAmount = BigNumber.from(1),
  useUnderlyings = false,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingAaveDaiAmount?: BigNumberish;
  outgoingAaveUsdcAmount?: BigNumberish;
  outgoingAaveUsdtAmount?: BigNumberish;
  minIncomingLiquidityGaugeTokenAmount?: BigNumberish;
  useUnderlyings?: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveLendAndStakeArgs({
      minIncomingLiquidityGaugeTokenAmount,
      outgoingAaveDaiAmount,
      outgoingAaveUsdcAmount,
      outgoingAaveUsdtAmount,
      useUnderlyings,
    }),
    selector: lendAndStakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingLPTokenAmount,
  minIncomingAaveDaiAmount = BigNumber.from(1),
  minIncomingAaveUsdcAmount = BigNumber.from(1),
  minIncomingAaveUsdtAmount = BigNumber.from(1),
  receiveSingleAsset = false,
  useUnderlyings = false,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingLPTokenAmount: BigNumberish;
  minIncomingAaveDaiAmount?: BigNumberish;
  minIncomingAaveUsdcAmount?: BigNumberish;
  minIncomingAaveUsdtAmount?: BigNumberish;
  receiveSingleAsset?: boolean;
  useUnderlyings?: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveRedeemArgs({
      minIncomingAaveDaiAmount,
      minIncomingAaveUsdcAmount,
      minIncomingAaveUsdtAmount,
      outgoingLPTokenAmount,
      receiveSingleAsset,
      useUnderlyings,
    }),
    selector: redeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveStakeArgs({
      outgoingLPTokenAmount,
    }),
    selector: stakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveUnstakeAndRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingLiquidityGaugeTokenAmount,
  minIncomingAaveDaiAmount = BigNumber.from(1),
  minIncomingAaveUsdcAmount = BigNumber.from(1),
  minIncomingAaveUsdtAmount = BigNumber.from(1),
  receiveSingleAsset = false,
  useUnderlyings = false,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
  minIncomingAaveDaiAmount?: BigNumberish;
  minIncomingAaveUsdcAmount?: BigNumberish;
  minIncomingAaveUsdtAmount?: BigNumberish;
  receiveSingleAsset?: boolean;
  useUnderlyings?: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveUnstakeAndRedeemArgs({
      minIncomingAaveDaiAmount,
      minIncomingAaveUsdcAmount,
      minIncomingAaveUsdtAmount,
      outgoingLiquidityGaugeTokenAmount,
      receiveSingleAsset,
      useUnderlyings,
    }),
    selector: unstakeAndRedeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveAaveUnstake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityAaveAdapter,
  outgoingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityAaveAdapter: CurveLiquidityAaveAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityAaveAdapter,
    encodedCallArgs: curveAaveUnstakeArgs({
      outgoingLiquidityGaugeTokenAmount,
    }),
    selector: unstakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

// eurs pool

export function curveEursClaimRewards({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: constants.HashZero,
    selector: claimRewardsSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursLend({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingEursAmount,
  outgoingSeurAmount,
  minIncomingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingEursAmount: BigNumberish;
  outgoingSeurAmount: BigNumberish;
  minIncomingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursLendArgs({
      minIncomingLPTokenAmount,
      outgoingEursAmount,
      outgoingSeurAmount,
    }),
    selector: lendSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursLendAndStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingEursAmount,
  outgoingSeurAmount,
  minIncomingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingEursAmount: BigNumberish;
  outgoingSeurAmount: BigNumberish;
  minIncomingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursLendAndStakeArgs({
      minIncomingLiquidityGaugeTokenAmount,
      outgoingEursAmount,
      outgoingSeurAmount,
    }),
    selector: lendAndStakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingLPTokenAmount,
  minIncomingEursAmount,
  minIncomingSeurAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingLPTokenAmount: BigNumberish;
  minIncomingEursAmount: BigNumberish;
  minIncomingSeurAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursRedeemArgs({
      minIncomingEursAmount,
      minIncomingSeurAmount,
      outgoingLPTokenAmount,
      receiveSingleAsset,
    }),
    selector: redeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursStakeArgs({
      outgoingLPTokenAmount,
    }),
    selector: stakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursUnstakeAndRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingLiquidityGaugeTokenAmount,
  minIncomingEursAmount,
  minIncomingSeurAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
  minIncomingEursAmount: BigNumberish;
  minIncomingSeurAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursUnstakeAndRedeemArgs({
      minIncomingEursAmount,
      minIncomingSeurAmount,
      outgoingLiquidityGaugeTokenAmount,
      receiveSingleAsset,
    }),
    selector: unstakeAndRedeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveEursUnstake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityEursAdapter,
  outgoingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityEursAdapter: CurveLiquidityEursAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityEursAdapter,
    encodedCallArgs: curveEursUnstakeArgs({
      outgoingLiquidityGaugeTokenAmount,
    }),
    selector: unstakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

// sETH pool

export function curveSethClaimRewards({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: constants.HashZero,
    selector: claimRewardsSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethLend({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingWethAmount,
  outgoingSethAmount,
  minIncomingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingWethAmount: BigNumberish;
  outgoingSethAmount: BigNumberish;
  minIncomingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethLendArgs({
      minIncomingLPTokenAmount,
      outgoingSethAmount,
      outgoingWethAmount,
    }),
    selector: lendSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethLendAndStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingWethAmount,
  outgoingSethAmount,
  minIncomingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingWethAmount: BigNumberish;
  outgoingSethAmount: BigNumberish;
  minIncomingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethLendAndStakeArgs({
      minIncomingLiquidityGaugeTokenAmount,
      outgoingSethAmount,
      outgoingWethAmount,
    }),
    selector: lendAndStakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingLPTokenAmount,
  minIncomingWethAmount,
  minIncomingSethAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingLPTokenAmount: BigNumberish;
  minIncomingWethAmount: BigNumberish;
  minIncomingSethAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethRedeemArgs({
      minIncomingSethAmount,
      minIncomingWethAmount,
      outgoingLPTokenAmount,
      receiveSingleAsset,
    }),
    selector: redeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethStakeArgs({
      outgoingLPTokenAmount,
    }),
    selector: stakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethUnstakeAndRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingLiquidityGaugeTokenAmount,
  minIncomingWethAmount,
  minIncomingSethAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
  minIncomingWethAmount: BigNumberish;
  minIncomingSethAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethUnstakeAndRedeemArgs({
      minIncomingSethAmount,
      minIncomingWethAmount,
      outgoingLiquidityGaugeTokenAmount,
      receiveSingleAsset,
    }),
    selector: unstakeAndRedeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveSethUnstake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquiditySethAdapter,
  outgoingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquiditySethAdapter: CurveLiquiditySethAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquiditySethAdapter,
    encodedCallArgs: curveSethUnstakeArgs({
      outgoingLiquidityGaugeTokenAmount,
    }),
    selector: unstakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

// stETH pool

export function curveStethClaimRewards({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: constants.HashZero,
    selector: claimRewardsSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethLend({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingWethAmount,
  outgoingStethAmount,
  minIncomingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingWethAmount: BigNumberish;
  outgoingStethAmount: BigNumberish;
  minIncomingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethLendArgs({
      minIncomingLPTokenAmount,
      outgoingStethAmount,
      outgoingWethAmount,
    }),
    selector: lendSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethLendAndStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingWethAmount,
  outgoingStethAmount,
  minIncomingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingWethAmount: BigNumberish;
  outgoingStethAmount: BigNumberish;
  minIncomingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethLendAndStakeArgs({
      minIncomingLiquidityGaugeTokenAmount,
      outgoingStethAmount,
      outgoingWethAmount,
    }),
    selector: lendAndStakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingLPTokenAmount,
  minIncomingWethAmount,
  minIncomingStethAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingLPTokenAmount: BigNumberish;
  minIncomingWethAmount: BigNumberish;
  minIncomingStethAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethRedeemArgs({
      minIncomingStethAmount,
      minIncomingWethAmount,
      outgoingLPTokenAmount,
      receiveSingleAsset,
    }),
    selector: redeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethStake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingLPTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingLPTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethStakeArgs({
      outgoingLPTokenAmount,
    }),
    selector: stakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethUnstakeAndRedeem({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingLiquidityGaugeTokenAmount,
  minIncomingWethAmount,
  minIncomingStethAmount,
  receiveSingleAsset,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
  minIncomingWethAmount: BigNumberish;
  minIncomingStethAmount: BigNumberish;
  receiveSingleAsset: boolean;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethUnstakeAndRedeemArgs({
      minIncomingStethAmount,
      minIncomingWethAmount,
      outgoingLiquidityGaugeTokenAmount,
      receiveSingleAsset,
    }),
    selector: unstakeAndRedeemSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export function curveStethUnstake({
  comptrollerProxy,
  integrationManager,
  fundOwner,
  curveLiquidityStethAdapter,
  outgoingLiquidityGaugeTokenAmount,
}: {
  comptrollerProxy: ComptrollerLib;
  integrationManager: IntegrationManager;
  fundOwner: SignerWithAddress;
  curveLiquidityStethAdapter: CurveLiquidityStethAdapter;
  outgoingLiquidityGaugeTokenAmount: BigNumberish;
}) {
  const callArgs = callOnIntegrationArgs({
    adapter: curveLiquidityStethAdapter,
    encodedCallArgs: curveStethUnstakeArgs({
      outgoingLiquidityGaugeTokenAmount,
    }),
    selector: unstakeSelector,
  });

  return comptrollerProxy
    .connect(fundOwner)
    .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}
