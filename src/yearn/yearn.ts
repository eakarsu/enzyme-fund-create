import type { SignerWithAddress } from '@enzymefinance/hardhat';
import type { ComptrollerLib, IntegrationManager, StandardToken, YearnVaultV2Adapter } from '@enzymefinance/protocol';
import {
    callOnIntegrationArgs,
    IntegrationManagerActionId,
    lendSelector,
    redeemSelector,
    yearnVaultV2LendArgs,
    yearnVaultV2RedeemArgs,
} from '@enzymefinance/protocol';

import { utils, ethers, BigNumberish ,BigNumber,constants as myconstants} from "ethers";
import {MintableERC20} from "../aave/types";

export async function yearnVaultV2Lend({
                                           signer,
                                           comptrollerProxy,
                                           integrationManager,
                                           yearnVaultV2Adapter,
                                           yVault,
                                           outgoingUnderlyingAmount,
                                           minIncomingYVaultSharesAmount = BigNumber.from(1),
                                       }: {
    signer: ethers.Wallet;
    comptrollerProxy: ComptrollerLib;
    integrationManager: IntegrationManager;
    yearnVaultV2Adapter: YearnVaultV2Adapter;
    yVault: MintableERC20;
    outgoingUnderlyingAmount: BigNumberish;
    minIncomingYVaultSharesAmount?: BigNumberish;
}) {
    const callArgs = callOnIntegrationArgs({
        adapter: yearnVaultV2Adapter,
        encodedCallArgs: yearnVaultV2LendArgs({
            minIncomingYVaultSharesAmount,
            outgoingUnderlyingAmount,
            yVault,
        }),
        selector: lendSelector,
    });

    return comptrollerProxy
        .connect(signer)
        .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}

export async function yearnVaultV2Redeem({
                                             signer,
                                             comptrollerProxy,
                                             integrationManager,
                                             yearnVaultV2Adapter,
                                             yVault,
                                             maxOutgoingYVaultSharesAmount,
                                             minIncomingUnderlyingAmount = BigNumber.from(1),
                                             slippageToleranceBps = 1,
                                         }: {
    signer: ethers.Wallet;
    comptrollerProxy: ComptrollerLib;
    integrationManager: IntegrationManager;
    yearnVaultV2Adapter: YearnVaultV2Adapter;
    yVault: StandardToken;
    maxOutgoingYVaultSharesAmount: BigNumberish;
    minIncomingUnderlyingAmount?: BigNumberish;
    slippageToleranceBps?: BigNumberish;
}) {
    const callArgs = callOnIntegrationArgs({
        adapter: yearnVaultV2Adapter,
        encodedCallArgs: yearnVaultV2RedeemArgs({
            maxOutgoingYVaultSharesAmount,
            minIncomingUnderlyingAmount,
            slippageToleranceBps,
            yVault,
        }),
        selector: redeemSelector,
    });

    return comptrollerProxy
        .connect(signer)
        .callOnExtension(integrationManager, IntegrationManagerActionId.CallOnIntegration, callArgs);
}
