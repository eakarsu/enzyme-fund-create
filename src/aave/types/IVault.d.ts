/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IVaultInterface extends ethers.utils.Interface {
  functions: {
    "addTrackedAsset(address)": FunctionFragment;
    "burnShares(address,uint256)": FunctionFragment;
    "buyBackProtocolFeeShares(uint256,uint256,uint256)": FunctionFragment;
    "callOnContract(address,bytes)": FunctionFragment;
    "canManageAssets(address)": FunctionFragment;
    "canMigrate(address)": FunctionFragment;
    "canRelayCalls(address)": FunctionFragment;
    "getAccessor()": FunctionFragment;
    "getActiveExternalPositions()": FunctionFragment;
    "getExternalPositionLibForType(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getTrackedAssets()": FunctionFragment;
    "init(address,address,string)": FunctionFragment;
    "isActiveExternalPosition(address)": FunctionFragment;
    "isTrackedAsset(address)": FunctionFragment;
    "mintShares(address,uint256)": FunctionFragment;
    "payProtocolFee()": FunctionFragment;
    "receiveValidatedVaultAction(uint8,bytes)": FunctionFragment;
    "setAccessor(address)": FunctionFragment;
    "setAccessorForFundReconfiguration(address)": FunctionFragment;
    "setVaultLib(address)": FunctionFragment;
    "sharesAreFreelyTransferable()": FunctionFragment;
    "transferShares(address,address,uint256)": FunctionFragment;
    "withdrawAssetTo(address,address,uint256)": FunctionFragment;
    "withdrawAssetToVault(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addTrackedAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "burnShares",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyBackProtocolFeeShares",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "callOnContract",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canManageAssets",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "canMigrate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "canRelayCalls",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveExternalPositions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExternalPositionLibForType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTrackedAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isActiveExternalPosition",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrackedAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintShares",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveValidatedVaultAction",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setAccessor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAccessorForFundReconfiguration",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setVaultLib", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sharesAreFreelyTransferable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferShares",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAssetTo",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAssetToVault",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addTrackedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyBackProtocolFeeShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callOnContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canManageAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canMigrate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canRelayCalls",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccessor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveExternalPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExternalPositionLibForType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTrackedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isActiveExternalPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrackedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveValidatedVaultAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccessor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccessorForFundReconfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVaultLib",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesAreFreelyTransferable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAssetTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAssetToVault",
    data: BytesLike
  ): Result;

  events: {};
}

export class IVault extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IVaultInterface;

  functions: {
    addTrackedAsset(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addTrackedAsset(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    burnShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burnShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    buyBackProtocolFeeShares(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "buyBackProtocolFeeShares(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    callOnContract(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "callOnContract(address,bytes)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    canManageAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canManageAssets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    canMigrate(
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      canMigrate_: boolean;
      0: boolean;
    }>;

    "canMigrate(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      canMigrate_: boolean;
      0: boolean;
    }>;

    canRelayCalls(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "canRelayCalls(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    getAccessor(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getAccessor()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getActiveExternalPositions(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    "getActiveExternalPositions()"(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    getExternalPositionLibForType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getExternalPositionLibForType(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getOwner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getOwner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getTrackedAssets(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    "getTrackedAssets()"(overrides?: CallOverrides): Promise<{
      0: string[];
    }>;

    init(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "init(address,address,string)"(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isActiveExternalPosition(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isActiveExternalPosition(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isTrackedAsset(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isTrackedAsset(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    mintShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mintShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    payProtocolFee(overrides?: Overrides): Promise<ContractTransaction>;

    "payProtocolFee()"(overrides?: Overrides): Promise<ContractTransaction>;

    receiveValidatedVaultAction(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "receiveValidatedVaultAction(uint8,bytes)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAccessor(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAccessor(address)"(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setAccessorForFundReconfiguration(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAccessorForFundReconfiguration(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setVaultLib(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setVaultLib(address)"(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sharesAreFreelyTransferable(overrides?: CallOverrides): Promise<{
      sharesAreFreelyTransferable_: boolean;
      0: boolean;
    }>;

    "sharesAreFreelyTransferable()"(overrides?: CallOverrides): Promise<{
      sharesAreFreelyTransferable_: boolean;
      0: boolean;
    }>;

    transferShares(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferShares(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawAssetTo(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawAssetTo(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawAssetToVault(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawAssetToVault(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addTrackedAsset(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addTrackedAsset(address)"(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  burnShares(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burnShares(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  buyBackProtocolFeeShares(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "buyBackProtocolFeeShares(uint256,uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callOnContract(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "callOnContract(address,bytes)"(
    arg0: string,
    arg1: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  canManageAssets(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "canManageAssets(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canMigrate(_who: string, overrides?: CallOverrides): Promise<boolean>;

  "canMigrate(address)"(
    _who: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  canRelayCalls(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "canRelayCalls(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getAccessor(overrides?: CallOverrides): Promise<string>;

  "getAccessor()"(overrides?: CallOverrides): Promise<string>;

  getActiveExternalPositions(overrides?: CallOverrides): Promise<string[]>;

  "getActiveExternalPositions()"(overrides?: CallOverrides): Promise<string[]>;

  getExternalPositionLibForType(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getExternalPositionLibForType(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  "getOwner()"(overrides?: CallOverrides): Promise<string>;

  getTrackedAssets(overrides?: CallOverrides): Promise<string[]>;

  "getTrackedAssets()"(overrides?: CallOverrides): Promise<string[]>;

  init(
    _owner: string,
    _accessor: string,
    _fundName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "init(address,address,string)"(
    _owner: string,
    _accessor: string,
    _fundName: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isActiveExternalPosition(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isActiveExternalPosition(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTrackedAsset(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isTrackedAsset(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mintShares(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mintShares(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  payProtocolFee(overrides?: Overrides): Promise<ContractTransaction>;

  "payProtocolFee()"(overrides?: Overrides): Promise<ContractTransaction>;

  receiveValidatedVaultAction(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "receiveValidatedVaultAction(uint8,bytes)"(
    arg0: BigNumberish,
    arg1: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAccessor(
    _nextAccessor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAccessor(address)"(
    _nextAccessor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setAccessorForFundReconfiguration(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAccessorForFundReconfiguration(address)"(
    arg0: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setVaultLib(
    _nextVaultLib: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setVaultLib(address)"(
    _nextVaultLib: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sharesAreFreelyTransferable(overrides?: CallOverrides): Promise<boolean>;

  "sharesAreFreelyTransferable()"(overrides?: CallOverrides): Promise<boolean>;

  transferShares(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferShares(address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawAssetTo(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawAssetTo(address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawAssetToVault(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawAssetToVault(address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addTrackedAsset(arg0: string, overrides?: CallOverrides): Promise<void>;

    "addTrackedAsset(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    burnShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burnShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buyBackProtocolFeeShares(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyBackProtocolFeeShares(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    callOnContract(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "callOnContract(address,bytes)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    canManageAssets(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "canManageAssets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canMigrate(_who: string, overrides?: CallOverrides): Promise<boolean>;

    "canMigrate(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    canRelayCalls(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "canRelayCalls(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getAccessor(overrides?: CallOverrides): Promise<string>;

    "getAccessor()"(overrides?: CallOverrides): Promise<string>;

    getActiveExternalPositions(overrides?: CallOverrides): Promise<string[]>;

    "getActiveExternalPositions()"(
      overrides?: CallOverrides
    ): Promise<string[]>;

    getExternalPositionLibForType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getExternalPositionLibForType(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    "getOwner()"(overrides?: CallOverrides): Promise<string>;

    getTrackedAssets(overrides?: CallOverrides): Promise<string[]>;

    "getTrackedAssets()"(overrides?: CallOverrides): Promise<string[]>;

    init(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "init(address,address,string)"(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isActiveExternalPosition(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isActiveExternalPosition(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTrackedAsset(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isTrackedAsset(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mintShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mintShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    payProtocolFee(overrides?: CallOverrides): Promise<void>;

    "payProtocolFee()"(overrides?: CallOverrides): Promise<void>;

    receiveValidatedVaultAction(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "receiveValidatedVaultAction(uint8,bytes)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccessor(
      _nextAccessor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAccessor(address)"(
      _nextAccessor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAccessorForFundReconfiguration(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAccessorForFundReconfiguration(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVaultLib(
      _nextVaultLib: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setVaultLib(address)"(
      _nextVaultLib: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sharesAreFreelyTransferable(overrides?: CallOverrides): Promise<boolean>;

    "sharesAreFreelyTransferable()"(
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferShares(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferShares(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAssetTo(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawAssetTo(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawAssetToVault(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawAssetToVault(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addTrackedAsset(arg0: string, overrides?: Overrides): Promise<BigNumber>;

    "addTrackedAsset(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    burnShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burnShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    buyBackProtocolFeeShares(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "buyBackProtocolFeeShares(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    callOnContract(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "callOnContract(address,bytes)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    canManageAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canManageAssets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canMigrate(_who: string, overrides?: CallOverrides): Promise<BigNumber>;

    "canMigrate(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canRelayCalls(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "canRelayCalls(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccessor(overrides?: CallOverrides): Promise<BigNumber>;

    "getAccessor()"(overrides?: CallOverrides): Promise<BigNumber>;

    getActiveExternalPositions(overrides?: CallOverrides): Promise<BigNumber>;

    "getActiveExternalPositions()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getExternalPositionLibForType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getExternalPositionLibForType(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTrackedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    "getTrackedAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "init(address,address,string)"(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isActiveExternalPosition(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isActiveExternalPosition(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTrackedAsset(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isTrackedAsset(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mintShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    payProtocolFee(overrides?: Overrides): Promise<BigNumber>;

    "payProtocolFee()"(overrides?: Overrides): Promise<BigNumber>;

    receiveValidatedVaultAction(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "receiveValidatedVaultAction(uint8,bytes)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAccessor(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAccessor(address)"(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setAccessorForFundReconfiguration(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAccessorForFundReconfiguration(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setVaultLib(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setVaultLib(address)"(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sharesAreFreelyTransferable(overrides?: CallOverrides): Promise<BigNumber>;

    "sharesAreFreelyTransferable()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferShares(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferShares(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawAssetTo(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawAssetTo(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdrawAssetToVault(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawAssetToVault(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addTrackedAsset(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addTrackedAsset(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    burnShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burnShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    buyBackProtocolFeeShares(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "buyBackProtocolFeeShares(uint256,uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    callOnContract(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "callOnContract(address,bytes)"(
      arg0: string,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    canManageAssets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canManageAssets(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canMigrate(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canMigrate(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canRelayCalls(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canRelayCalls(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccessor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAccessor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActiveExternalPositions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getActiveExternalPositions()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getExternalPositionLibForType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getExternalPositionLibForType(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTrackedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTrackedAssets()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "init(address,address,string)"(
      _owner: string,
      _accessor: string,
      _fundName: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isActiveExternalPosition(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isActiveExternalPosition(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTrackedAsset(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isTrackedAsset(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintShares(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mintShares(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    payProtocolFee(overrides?: Overrides): Promise<PopulatedTransaction>;

    "payProtocolFee()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    receiveValidatedVaultAction(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "receiveValidatedVaultAction(uint8,bytes)"(
      arg0: BigNumberish,
      arg1: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAccessor(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAccessor(address)"(
      _nextAccessor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setAccessorForFundReconfiguration(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAccessorForFundReconfiguration(address)"(
      arg0: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setVaultLib(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setVaultLib(address)"(
      _nextVaultLib: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sharesAreFreelyTransferable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sharesAreFreelyTransferable()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferShares(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferShares(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawAssetTo(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawAssetTo(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawAssetToVault(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawAssetToVault(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
