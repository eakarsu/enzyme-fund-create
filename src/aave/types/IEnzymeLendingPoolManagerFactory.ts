/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IEnzymeLendingPoolManager } from "./IEnzymeLendingPoolManager";

export class IEnzymeLendingPoolManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEnzymeLendingPoolManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IEnzymeLendingPoolManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
    ],
    name: "makeEnzymePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
