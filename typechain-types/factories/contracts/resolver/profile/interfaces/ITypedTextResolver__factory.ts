/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITypedTextResolver,
  ITypedTextResolverInterface,
} from "../../../../../contracts/resolver/profile/interfaces/ITypedTextResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "type_",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "SetTypedText",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "type_",
        type: "bytes",
      },
    ],
    name: "UnsetTypedText",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "type_",
        type: "bytes",
      },
    ],
    name: "getTypedText",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "type_",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
    ],
    name: "setTypedText",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "host",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "type_",
        type: "bytes",
      },
    ],
    name: "unsetTypedText",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ITypedTextResolver__factory {
  static readonly abi = _abi;
  static createInterface(): ITypedTextResolverInterface {
    return new Interface(_abi) as ITypedTextResolverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITypedTextResolver {
    return new Contract(address, _abi, runner) as unknown as ITypedTextResolver;
  }
}