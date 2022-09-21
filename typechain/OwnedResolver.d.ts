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

interface OwnedResolverInterface extends ethers.utils.Interface {
  functions: {
    "ABI(bytes32,uint256)": FunctionFragment;
    "addr(bytes32)": FunctionFragment;
    "clearDNSZone(bytes32)": FunctionFragment;
    "contenthash(bytes32)": FunctionFragment;
    "dnsRecord(bytes32,bytes32,uint16)": FunctionFragment;
    "hasDNSRecords(bytes32,bytes32)": FunctionFragment;
    "interfaceImplementer(bytes32,bytes4)": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "pubkey(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setABI(bytes32,uint256,bytes)": FunctionFragment;
    "setAddr(bytes32,uint256,bytes)": FunctionFragment;
    "setContenthash(bytes32,bytes)": FunctionFragment;
    "setDNSRecords(bytes32,bytes)": FunctionFragment;
    "setInterface(bytes32,bytes4,address)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
    "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
    "setText(bytes32,string,string)": FunctionFragment;
    "setZonehash(bytes32,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "text(bytes32,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "zonehash(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ABI",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "clearDNSZone",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contenthash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dnsRecord",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasDNSRecords",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "interfaceImplementer",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setABI",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddr",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setContenthash",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDNSRecords",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterface",
    values: [BytesLike, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPubkey",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setText",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setZonehash",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "text",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "zonehash", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "ABI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "clearDNSZone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contenthash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dnsRecord", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasDNSRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interfaceImplementer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setABI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContenthash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDNSRecords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setZonehash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zonehash", data: BytesLike): Result;

  events: {
    "ABIChanged(bytes32,uint256)": EventFragment;
    "AddrChanged(bytes32,address)": EventFragment;
    "AddressChanged(bytes32,uint256,bytes)": EventFragment;
    "ContenthashChanged(bytes32,bytes)": EventFragment;
    "DNSRecordChanged(bytes32,bytes,uint16,bytes)": EventFragment;
    "DNSRecordDeleted(bytes32,bytes,uint16)": EventFragment;
    "DNSZoneCleared(bytes32)": EventFragment;
    "DNSZonehashChanged(bytes32,bytes,bytes)": EventFragment;
    "InterfaceChanged(bytes32,bytes4,address)": EventFragment;
    "NameChanged(bytes32,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PubkeyChanged(bytes32,bytes32,bytes32)": EventFragment;
    "TextChanged(bytes32,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ABIChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContenthashChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DNSRecordChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DNSRecordDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DNSZoneCleared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DNSZonehashChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InterfaceChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PubkeyChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TextChanged"): EventFragment;
}

export type ABIChangedEvent = TypedEvent<
  [string, BigNumber] & { node: string; contentType: BigNumber }
>;

export type AddrChangedEvent = TypedEvent<
  [string, string] & { node: string; a: string }
>;

export type AddressChangedEvent = TypedEvent<
  [string, BigNumber, string] & {
    node: string;
    coinType: BigNumber;
    newAddress: string;
  }
>;

export type ContenthashChangedEvent = TypedEvent<
  [string, string] & { node: string; hash: string }
>;

export type DNSRecordChangedEvent = TypedEvent<
  [string, string, number, string] & {
    node: string;
    name: string;
    resource: number;
    record: string;
  }
>;

export type DNSRecordDeletedEvent = TypedEvent<
  [string, string, number] & { node: string; name: string; resource: number }
>;

export type DNSZoneClearedEvent = TypedEvent<[string] & { node: string }>;

export type DNSZonehashChangedEvent = TypedEvent<
  [string, string, string] & {
    node: string;
    lastzonehash: string;
    zonehash: string;
  }
>;

export type InterfaceChangedEvent = TypedEvent<
  [string, string, string] & {
    node: string;
    interfaceID: string;
    implementer: string;
  }
>;

export type NameChangedEvent = TypedEvent<
  [string, string] & { node: string; name: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PubkeyChangedEvent = TypedEvent<
  [string, string, string] & { node: string; x: string; y: string }
>;

export type TextChangedEvent = TypedEvent<
  [string, string, string] & { node: string; indexedKey: string; key: string }
>;

export class OwnedResolver extends BaseContract {
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

  interface: OwnedResolverInterface;

  functions: {
    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    clearDNSZone(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contenthash(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    dnsRecord(
      node: BytesLike,
      name: BytesLike,
      resource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasDNSRecords(
      node: BytesLike,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    interfaceImplementer(
      node: BytesLike,
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      a: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContenthash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDNSRecords(
      node: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setInterface(
      node: BytesLike,
      interfaceID: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setName(
      node: BytesLike,
      newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setZonehash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    zonehash(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  ABI(
    node: BytesLike,
    contentTypes: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string]>;

  "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addr(bytes32,uint256)"(
    node: BytesLike,
    coinType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  clearDNSZone(
    node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contenthash(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  dnsRecord(
    node: BytesLike,
    name: BytesLike,
    resource: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  hasDNSRecords(
    node: BytesLike,
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  interfaceImplementer(
    node: BytesLike,
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pubkey(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { x: string; y: string }>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setABI(
    node: BytesLike,
    contentType: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,uint256,bytes)"(
    node: BytesLike,
    coinType: BigNumberish,
    a: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,address)"(
    node: BytesLike,
    a: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContenthash(
    node: BytesLike,
    hash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDNSRecords(
    node: BytesLike,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setInterface(
    node: BytesLike,
    interfaceID: BytesLike,
    implementer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setName(
    node: BytesLike,
    newName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPubkey(
    node: BytesLike,
    x: BytesLike,
    y: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setText(
    node: BytesLike,
    key: string,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setZonehash(
    node: BytesLike,
    hash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  text(
    node: BytesLike,
    key: string,
    overrides?: CallOverrides
  ): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  zonehash(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    clearDNSZone(node: BytesLike, overrides?: CallOverrides): Promise<void>;

    contenthash(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    dnsRecord(
      node: BytesLike,
      name: BytesLike,
      resource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    hasDNSRecords(
      node: BytesLike,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    interfaceImplementer(
      node: BytesLike,
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      a: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      a: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setContenthash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setDNSRecords(
      node: BytesLike,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setInterface(
      node: BytesLike,
      interfaceID: BytesLike,
      implementer: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setName(
      node: BytesLike,
      newName: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setZonehash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    zonehash(node: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ABIChanged(bytes32,uint256)"(
      node?: BytesLike | null,
      contentType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { node: string; contentType: BigNumber }
    >;

    ABIChanged(
      node?: BytesLike | null,
      contentType?: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber],
      { node: string; contentType: BigNumber }
    >;

    "AddrChanged(bytes32,address)"(
      node?: BytesLike | null,
      a?: null
    ): TypedEventFilter<[string, string], { node: string; a: string }>;

    AddrChanged(
      node?: BytesLike | null,
      a?: null
    ): TypedEventFilter<[string, string], { node: string; a: string }>;

    "AddressChanged(bytes32,uint256,bytes)"(
      node?: BytesLike | null,
      coinType?: null,
      newAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { node: string; coinType: BigNumber; newAddress: string }
    >;

    AddressChanged(
      node?: BytesLike | null,
      coinType?: null,
      newAddress?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { node: string; coinType: BigNumber; newAddress: string }
    >;

    "ContenthashChanged(bytes32,bytes)"(
      node?: BytesLike | null,
      hash?: null
    ): TypedEventFilter<[string, string], { node: string; hash: string }>;

    ContenthashChanged(
      node?: BytesLike | null,
      hash?: null
    ): TypedEventFilter<[string, string], { node: string; hash: string }>;

    "DNSRecordChanged(bytes32,bytes,uint16,bytes)"(
      node?: BytesLike | null,
      name?: null,
      resource?: null,
      record?: null
    ): TypedEventFilter<
      [string, string, number, string],
      { node: string; name: string; resource: number; record: string }
    >;

    DNSRecordChanged(
      node?: BytesLike | null,
      name?: null,
      resource?: null,
      record?: null
    ): TypedEventFilter<
      [string, string, number, string],
      { node: string; name: string; resource: number; record: string }
    >;

    "DNSRecordDeleted(bytes32,bytes,uint16)"(
      node?: BytesLike | null,
      name?: null,
      resource?: null
    ): TypedEventFilter<
      [string, string, number],
      { node: string; name: string; resource: number }
    >;

    DNSRecordDeleted(
      node?: BytesLike | null,
      name?: null,
      resource?: null
    ): TypedEventFilter<
      [string, string, number],
      { node: string; name: string; resource: number }
    >;

    "DNSZoneCleared(bytes32)"(
      node?: BytesLike | null
    ): TypedEventFilter<[string], { node: string }>;

    DNSZoneCleared(
      node?: BytesLike | null
    ): TypedEventFilter<[string], { node: string }>;

    "DNSZonehashChanged(bytes32,bytes,bytes)"(
      node?: BytesLike | null,
      lastzonehash?: null,
      zonehash?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; lastzonehash: string; zonehash: string }
    >;

    DNSZonehashChanged(
      node?: BytesLike | null,
      lastzonehash?: null,
      zonehash?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; lastzonehash: string; zonehash: string }
    >;

    "InterfaceChanged(bytes32,bytes4,address)"(
      node?: BytesLike | null,
      interfaceID?: BytesLike | null,
      implementer?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; interfaceID: string; implementer: string }
    >;

    InterfaceChanged(
      node?: BytesLike | null,
      interfaceID?: BytesLike | null,
      implementer?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; interfaceID: string; implementer: string }
    >;

    "NameChanged(bytes32,string)"(
      node?: BytesLike | null,
      name?: null
    ): TypedEventFilter<[string, string], { node: string; name: string }>;

    NameChanged(
      node?: BytesLike | null,
      name?: null
    ): TypedEventFilter<[string, string], { node: string; name: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PubkeyChanged(bytes32,bytes32,bytes32)"(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; x: string; y: string }
    >;

    PubkeyChanged(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; x: string; y: string }
    >;

    "TextChanged(bytes32,string,string)"(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; indexedKey: string; key: string }
    >;

    TextChanged(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TypedEventFilter<
      [string, string, string],
      { node: string; indexedKey: string; key: string }
    >;
  };

  estimateGas: {
    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    clearDNSZone(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contenthash(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    dnsRecord(
      node: BytesLike,
      name: BytesLike,
      resource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasDNSRecords(
      node: BytesLike,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interfaceImplementer(
      node: BytesLike,
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      a: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContenthash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDNSRecords(
      node: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setInterface(
      node: BytesLike,
      interfaceID: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setName(
      node: BytesLike,
      newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setZonehash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    zonehash(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ABI(
      node: BytesLike,
      contentTypes: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    clearDNSZone(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contenthash(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dnsRecord(
      node: BytesLike,
      name: BytesLike,
      resource: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasDNSRecords(
      node: BytesLike,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interfaceImplementer(
      node: BytesLike,
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setABI(
      node: BytesLike,
      contentType: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      a: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      a: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContenthash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDNSRecords(
      node: BytesLike,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setInterface(
      node: BytesLike,
      interfaceID: BytesLike,
      implementer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setName(
      node: BytesLike,
      newName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setZonehash(
      node: BytesLike,
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    zonehash(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
