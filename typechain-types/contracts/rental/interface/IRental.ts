/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IRentalInterface extends Interface {
  getFunction(nameOrSignature: "list" | "rent" | "unlist"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Listed" | "Rented" | "Unlisted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "list",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rent",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unlist",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlist", data: BytesLike): Result;
}

export namespace ListedEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    expiry: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [tokenId: bigint, expiry: bigint, amount: bigint];
  export interface OutputObject {
    tokenId: bigint;
    expiry: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RentedEvent {
  export type InputTuple = [tokenId: BigNumberish, newUser: AddressLike];
  export type OutputTuple = [tokenId: bigint, newUser: string];
  export interface OutputObject {
    tokenId: bigint;
    newUser: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnlistedEvent {
  export type InputTuple = [tokenId: BigNumberish];
  export type OutputTuple = [tokenId: bigint];
  export interface OutputObject {
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IRental extends BaseContract {
  connect(runner?: ContractRunner | null): IRental;
  waitForDeployment(): Promise<this>;

  interface: IRentalInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  list: TypedContractMethod<
    [
      wrapper: AddressLike,
      tokenId: BigNumberish,
      expiry: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  rent: TypedContractMethod<
    [wrapper: AddressLike, tokenId: BigNumberish, newUser: AddressLike],
    [void],
    "nonpayable"
  >;

  unlist: TypedContractMethod<
    [wrapper: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "list"
  ): TypedContractMethod<
    [
      wrapper: AddressLike,
      tokenId: BigNumberish,
      expiry: BigNumberish,
      amount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rent"
  ): TypedContractMethod<
    [wrapper: AddressLike, tokenId: BigNumberish, newUser: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unlist"
  ): TypedContractMethod<
    [wrapper: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Listed"
  ): TypedContractEvent<
    ListedEvent.InputTuple,
    ListedEvent.OutputTuple,
    ListedEvent.OutputObject
  >;
  getEvent(
    key: "Rented"
  ): TypedContractEvent<
    RentedEvent.InputTuple,
    RentedEvent.OutputTuple,
    RentedEvent.OutputObject
  >;
  getEvent(
    key: "Unlisted"
  ): TypedContractEvent<
    UnlistedEvent.InputTuple,
    UnlistedEvent.OutputTuple,
    UnlistedEvent.OutputObject
  >;

  filters: {
    "Listed(uint256,uint64,uint256)": TypedContractEvent<
      ListedEvent.InputTuple,
      ListedEvent.OutputTuple,
      ListedEvent.OutputObject
    >;
    Listed: TypedContractEvent<
      ListedEvent.InputTuple,
      ListedEvent.OutputTuple,
      ListedEvent.OutputObject
    >;

    "Rented(uint256,address)": TypedContractEvent<
      RentedEvent.InputTuple,
      RentedEvent.OutputTuple,
      RentedEvent.OutputObject
    >;
    Rented: TypedContractEvent<
      RentedEvent.InputTuple,
      RentedEvent.OutputTuple,
      RentedEvent.OutputObject
    >;

    "Unlisted(uint256)": TypedContractEvent<
      UnlistedEvent.InputTuple,
      UnlistedEvent.OutputTuple,
      UnlistedEvent.OutputObject
    >;
    Unlisted: TypedContractEvent<
      UnlistedEvent.InputTuple,
      UnlistedEvent.OutputTuple,
      UnlistedEvent.OutputObject
    >;
  };
}