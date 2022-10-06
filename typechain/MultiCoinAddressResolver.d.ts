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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MultiCoinAddressResolverInterface extends ethers.utils.Interface {
  functions: {
    "MAX_LABEL_LENGTH()": FunctionFragment;
    "MIN_LABEL_LENGTH()": FunctionFragment;
    "getMultiCoinAddress(bytes,bytes,bytes,uint256)": FunctionFragment;
    "setMultiCoinAddress(bytes,bytes,bytes,uint256,bytes)": FunctionFragment;
    "setMultiCoinAddress_SYNC(bytes,bytes,bytes,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "valid(string,string,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_LABEL_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_LABEL_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiCoinAddress",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMultiCoinAddress",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMultiCoinAddress_SYNC",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "valid",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_LABEL_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_LABEL_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiCoinAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMultiCoinAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMultiCoinAddress_SYNC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "valid", data: BytesLike): Result;

  events: {
    "SetMultiCoinAddress(bytes,bytes,bytes,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetMultiCoinAddress"): EventFragment;
}

export type SetMultiCoinAddressEvent = TypedEvent<
  [string, string, string, BigNumber, string] & {
    host: string;
    name: string;
    tld: string;
    coin: BigNumber;
    address_: string;
  }
>;

export class MultiCoinAddressResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MultiCoinAddressResolverInterface;

  functions: {
    MAX_LABEL_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_LABEL_LENGTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMultiCoinAddress_SYNC(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "valid(string,string,string)"(
      host: string,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "valid(string,string)"(
      name: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "valid(bytes,bytes)"(
      name: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "valid(bytes,bytes,bytes)"(
      host: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  MAX_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

  getMultiCoinAddress(
    host: BytesLike,
    name: BytesLike,
    tld: BytesLike,
    coin: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setMultiCoinAddress(
    host: BytesLike,
    name: BytesLike,
    tld: BytesLike,
    coin: BigNumberish,
    address_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMultiCoinAddress_SYNC(
    host: BytesLike,
    name: BytesLike,
    tld: BytesLike,
    coin: BigNumberish,
    address_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "valid(string,string,string)"(
    host: string,
    arg1: string,
    arg2: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "valid(string,string)"(
    name: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "valid(bytes,bytes)"(
    name: BytesLike,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "valid(bytes,bytes,bytes)"(
    host: BytesLike,
    arg1: BytesLike,
    arg2: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    MAX_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setMultiCoinAddress_SYNC(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "valid(string,string,string)"(
      host: string,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "valid(string,string)"(
      name: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "valid(bytes,bytes)"(
      name: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "valid(bytes,bytes,bytes)"(
      host: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "SetMultiCoinAddress(bytes,bytes,bytes,uint256,bytes)"(
      host?: null,
      name?: null,
      tld?: null,
      coin?: null,
      address_?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string],
      {
        host: string;
        name: string;
        tld: string;
        coin: BigNumber;
        address_: string;
      }
    >;

    SetMultiCoinAddress(
      host?: null,
      name?: null,
      tld?: null,
      coin?: null,
      address_?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, string],
      {
        host: string;
        name: string;
        tld: string;
        coin: BigNumber;
        address_: string;
      }
    >;
  };

  estimateGas: {
    MAX_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LABEL_LENGTH(overrides?: CallOverrides): Promise<BigNumber>;

    getMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMultiCoinAddress_SYNC(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "valid(string,string,string)"(
      host: string,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "valid(string,string)"(
      name: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "valid(bytes,bytes)"(
      name: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "valid(bytes,bytes,bytes)"(
      host: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_LABEL_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_LABEL_LENGTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMultiCoinAddress(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMultiCoinAddress_SYNC(
      host: BytesLike,
      name: BytesLike,
      tld: BytesLike,
      coin: BigNumberish,
      address_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "valid(string,string,string)"(
      host: string,
      arg1: string,
      arg2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "valid(string,string)"(
      name: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "valid(bytes,bytes)"(
      name: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "valid(bytes,bytes,bytes)"(
      host: BytesLike,
      arg1: BytesLike,
      arg2: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
