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

interface IMultiCoinAddressResolverInterface extends ethers.utils.Interface {
  functions: {
    "getMultiCoinAddress(bytes,bytes,bytes,uint256)": FunctionFragment;
    "setMultiCoinAddress(bytes,bytes,bytes,uint256,bytes)": FunctionFragment;
    "setMultiCoinAddress_SYNC(bytes,bytes,bytes,uint256,bytes)": FunctionFragment;
  };

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

export class IMultiCoinAddressResolver extends BaseContract {
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

  interface: IMultiCoinAddressResolverInterface;

  functions: {
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
  };

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

  callStatic: {
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
  };

  populateTransaction: {
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
  };
}
