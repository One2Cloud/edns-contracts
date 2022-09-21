/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Digest, DigestInterface } from "../Digest";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "hash",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class Digest__factory {
  static readonly abi = _abi;
  static createInterface(): DigestInterface {
    return new utils.Interface(_abi) as DigestInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Digest {
    return new Contract(address, _abi, signerOrProvider) as Digest;
  }
}
