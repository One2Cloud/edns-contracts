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

export declare namespace IBridge {
  export type AcceptedRequestStruct = {
    srcChain: BigNumberish;
    provider: BigNumberish;
    tld: BytesLike;
    name: BytesLike;
    owner: AddressLike;
    expiry: BigNumberish;
  };

  export type AcceptedRequestStructOutput = [
    srcChain: bigint,
    provider: bigint,
    tld: string,
    name: string,
    owner: string,
    expiry: bigint
  ] & {
    srcChain: bigint;
    provider: bigint;
    tld: string;
    name: string;
    owner: string;
    expiry: bigint;
  };

  export type BridgedRequestStruct = {
    dstChain: BigNumberish;
    provider: BigNumberish;
    tld: BytesLike;
    name: BytesLike;
    owner: AddressLike;
    expiry: BigNumberish;
  };

  export type BridgedRequestStructOutput = [
    dstChain: bigint,
    provider: bigint,
    tld: string,
    name: string,
    owner: string,
    expiry: bigint
  ] & {
    dstChain: bigint;
    provider: bigint;
    tld: string;
    name: string;
    owner: string;
    expiry: bigint;
  };
}

export interface IBridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accept"
      | "bridge"
      | "estimateFee"
      | "getAcceptedRequest"
      | "getBridgedRequest"
      | "getNonce"
      | "getRef"
      | "getRemoteBridge"
      | "isReceived"
      | "receive_"
      | "setRemoteBridge"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Accepted" | "Bridged" | "Received"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accept",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bridge",
    values: [
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateFee",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAcceptedRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBridgedRequest",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRef",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoteBridge",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceived",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "receive_", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setRemoteBridge",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "accept", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAcceptedRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBridgedRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRef", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRemoteBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isReceived", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receive_", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRemoteBridge",
    data: BytesLike
  ): Result;
}

export namespace AcceptedEvent {
  export type InputTuple = [
    nonce: BigNumberish,
    sender: AddressLike,
    ref: BytesLike
  ];
  export type OutputTuple = [nonce: bigint, sender: string, ref: string];
  export interface OutputObject {
    nonce: bigint;
    sender: string;
    ref: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BridgedEvent {
  export type InputTuple = [
    nonce: BigNumberish,
    sender: AddressLike,
    ref: BytesLike
  ];
  export type OutputTuple = [nonce: bigint, sender: string, ref: string];
  export interface OutputObject {
    nonce: bigint;
    sender: string;
    ref: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ReceivedEvent {
  export type InputTuple = [ref: BytesLike];
  export type OutputTuple = [ref: string];
  export interface OutputObject {
    ref: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IBridge extends BaseContract {
  connect(runner?: ContractRunner | null): IBridge;
  waitForDeployment(): Promise<this>;

  interface: IBridgeInterface;

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

  accept: TypedContractMethod<
    [
      nonce: BigNumberish,
      ref: BytesLike,
      srcChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike,
      owner: AddressLike,
      expiry: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  bridge: TypedContractMethod<
    [
      nonce: BigNumberish,
      ref: BytesLike,
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike
    ],
    [void],
    "payable"
  >;

  estimateFee: TypedContractMethod<
    [
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike
    ],
    [bigint],
    "view"
  >;

  getAcceptedRequest: TypedContractMethod<
    [ref: BytesLike],
    [IBridge.AcceptedRequestStructOutput],
    "view"
  >;

  getBridgedRequest: TypedContractMethod<
    [ref: BytesLike],
    [IBridge.BridgedRequestStructOutput],
    "view"
  >;

  getNonce: TypedContractMethod<[], [bigint], "view">;

  getRef: TypedContractMethod<
    [
      nonce: BigNumberish,
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike,
      owner: AddressLike,
      expiry: BigNumberish
    ],
    [string],
    "view"
  >;

  getRemoteBridge: TypedContractMethod<[chain: BigNumberish], [string], "view">;

  isReceived: TypedContractMethod<[ref: BytesLike], [boolean], "view">;

  receive_: TypedContractMethod<[payload: BytesLike], [void], "nonpayable">;

  setRemoteBridge: TypedContractMethod<
    [chain: BigNumberish, target: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accept"
  ): TypedContractMethod<
    [
      nonce: BigNumberish,
      ref: BytesLike,
      srcChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike,
      owner: AddressLike,
      expiry: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bridge"
  ): TypedContractMethod<
    [
      nonce: BigNumberish,
      ref: BytesLike,
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "estimateFee"
  ): TypedContractMethod<
    [
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAcceptedRequest"
  ): TypedContractMethod<
    [ref: BytesLike],
    [IBridge.AcceptedRequestStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getBridgedRequest"
  ): TypedContractMethod<
    [ref: BytesLike],
    [IBridge.BridgedRequestStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNonce"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRef"
  ): TypedContractMethod<
    [
      nonce: BigNumberish,
      dstChain: BigNumberish,
      provider: BigNumberish,
      name: BytesLike,
      tld: BytesLike,
      owner: AddressLike,
      expiry: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRemoteBridge"
  ): TypedContractMethod<[chain: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "isReceived"
  ): TypedContractMethod<[ref: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "receive_"
  ): TypedContractMethod<[payload: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRemoteBridge"
  ): TypedContractMethod<
    [chain: BigNumberish, target: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Accepted"
  ): TypedContractEvent<
    AcceptedEvent.InputTuple,
    AcceptedEvent.OutputTuple,
    AcceptedEvent.OutputObject
  >;
  getEvent(
    key: "Bridged"
  ): TypedContractEvent<
    BridgedEvent.InputTuple,
    BridgedEvent.OutputTuple,
    BridgedEvent.OutputObject
  >;
  getEvent(
    key: "Received"
  ): TypedContractEvent<
    ReceivedEvent.InputTuple,
    ReceivedEvent.OutputTuple,
    ReceivedEvent.OutputObject
  >;

  filters: {
    "Accepted(uint256,address,bytes32)": TypedContractEvent<
      AcceptedEvent.InputTuple,
      AcceptedEvent.OutputTuple,
      AcceptedEvent.OutputObject
    >;
    Accepted: TypedContractEvent<
      AcceptedEvent.InputTuple,
      AcceptedEvent.OutputTuple,
      AcceptedEvent.OutputObject
    >;

    "Bridged(uint256,address,bytes32)": TypedContractEvent<
      BridgedEvent.InputTuple,
      BridgedEvent.OutputTuple,
      BridgedEvent.OutputObject
    >;
    Bridged: TypedContractEvent<
      BridgedEvent.InputTuple,
      BridgedEvent.OutputTuple,
      BridgedEvent.OutputObject
    >;

    "Received(bytes32)": TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
    Received: TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
  };
}