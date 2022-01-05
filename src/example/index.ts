import { listAllFunds } from "./../index";

import { createSomeNewFund } from "./create-fund";
import { ethers, utils } from "ethers";
import { StandardToken } from "@enzymefinance/protocol";
import {getMintableToken} from "../funds/create-fund";
import {MintableERC20Factory} from "../aave/types";
import {addNewAssetsToFundCustom} from "../utils/assets"
import {ComptrollerLib} from '@enzymefinance/protocol';

const provider = new ethers.providers.JsonRpcProvider(
  //"https://kovan.infura.io/v3/f7f0290fa86240888223b0ad599c71a1"
);
const USER_PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
let signer = new ethers.Wallet(USER_PRIVATE_KEY, provider);

const createFundWork = async (signer:ethers.Wallet,provider:ethers.providers.JsonRpcProvider) => {
  
  const triple = await createSomeNewFund(signer,provider);
  provider.waitForTransaction(triple.receipt.transactionHash);
  let comptrollerProxy = triple.comptrollerProxy;
  console.log ("Comptroller proxy adress:"+comptrollerProxy.address);
  const nonce = await provider.getTransactionCount(signer.address, "pending");
  console.log ("User nonce:"+nonce);
}
const createAssetsToFund = async (signer:ethers.Wallet,
  provider:ethers.providers.JsonRpcProvider,
  comptrollerProxyAsset:string,
  amountIn:number) => {
  await provider.send("hardhat_setNonce", [
    signer.address,
    "0x1B9",
  ]);

  const comptrollerProxy = new ComptrollerLib(comptrollerProxyAsset, signer);
  let integarationManagerAsset = "0x313F922BE1649cEc058EC0f076664500c78bdc0b";

  let amount:string = (amountIn*2).toString();
  const mintableToken = getMintableToken(signer);
  const wethAddress = "0xfaAddC93baf78e89DCf37bA67943E1bE8F37Bb8c";
  await MintableERC20Factory.connect(wethAddress,signer).mint(ethers.utils.parseUnits(amount, "18"));
  await addNewAssetsToFundCustom(signer,comptrollerProxy,integarationManagerAsset,[wethAddress],[amount]);
}
//createFundWork(signer,provider);
createAssetsToFund (signer,provider,"0xC6A0087C494640975D0711cc2F4A308bbd1c9019",1000000);

const SUB_GRAPH_ENDPOINT =
  "https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme";

const init = async () => {
  const funds = await listAllFunds(SUB_GRAPH_ENDPOINT);
  console.log(funds);
};

//init();
