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

export interface IRootInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAuthorizer"
      | "getResolver"
      | "isEnable"
      | "register"
      | "renew"
      | "setAuthorizer"
      | "setControllerApproval"
      | "setEnable"
      | "setResolver"
      | "setWrapper"
      | "transfer"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NewAuthorizer" | "TldRegistered" | "TldRenewed"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResolver",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isEnable", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [
      BigNumberish[],
      BytesLike,
      AddressLike,
      BigNumberish,
      AddressLike,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renew",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setControllerApproval",
    values: [BytesLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setEnable",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setResolver",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setWrapper",
    values: [BytesLike, boolean, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isEnable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "renew", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setControllerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setEnable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWrapper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
}

export namespace NewAuthorizerEvent {
  export type InputTuple = [address_: AddressLike];
  export type OutputTuple = [address_: string];
  export interface OutputObject {
    address_: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TldRegisteredEvent {
  export type InputTuple = [
    tld: BytesLike,
    owner: AddressLike,
    expiry: BigNumberish
  ];
  export type OutputTuple = [tld: string, owner: string, expiry: bigint];
  export interface OutputObject {
    tld: string;
    owner: string;
    expiry: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TldRenewedEvent {
  export type InputTuple = [tld: BytesLike, expiry: BigNumberish];
  export type OutputTuple = [tld: string, expiry: bigint];
  export interface OutputObject {
    tld: string;
    expiry: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IRoot extends BaseContract {
  connect(runner?: ContractRunner | null): IRoot;
  waitForDeployment(): Promise<this>;

  interface: IRootInterface;

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

  getAuthorizer: TypedContractMethod<[], [string], "view">;

  getResolver: TypedContractMethod<[tld: BytesLike], [string], "view">;

  isEnable: TypedContractMethod<[tld: BytesLike], [boolean], "view">;

  register: TypedContractMethod<
    [
      chains: BigNumberish[],
      tld: BytesLike,
      resolver: AddressLike,
      expiry: BigNumberish,
      owner: AddressLike,
      enable: boolean,
      class_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  renew: TypedContractMethod<
    [tld: BytesLike, expiry: BigNumberish],
    [void],
    "nonpayable"
  >;

  setAuthorizer: TypedContractMethod<
    [address_: AddressLike],
    [void],
    "nonpayable"
  >;

  setControllerApproval: TypedContractMethod<
    [tld: BytesLike, controller: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setEnable: TypedContractMethod<
    [tld: BytesLike, enable: boolean],
    [void],
    "payable"
  >;

  setResolver: TypedContractMethod<
    [tld: BytesLike, resolver: AddressLike],
    [void],
    "payable"
  >;

  setWrapper: TypedContractMethod<
    [tld: BytesLike, enable: boolean, address_: AddressLike],
    [void],
    "nonpayable"
  >;

  transfer: TypedContractMethod<
    [tld: BytesLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAuthorizer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getResolver"
  ): TypedContractMethod<[tld: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "isEnable"
  ): TypedContractMethod<[tld: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "register"
  ): TypedContractMethod<
    [
      chains: BigNumberish[],
      tld: BytesLike,
      resolver: AddressLike,
      expiry: BigNumberish,
      owner: AddressLike,
      enable: boolean,
      class_: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renew"
  ): TypedContractMethod<
    [tld: BytesLike, expiry: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthorizer"
  ): TypedContractMethod<[address_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setControllerApproval"
  ): TypedContractMethod<
    [tld: BytesLike, controller: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEnable"
  ): TypedContractMethod<[tld: BytesLike, enable: boolean], [void], "payable">;
  getFunction(
    nameOrSignature: "setResolver"
  ): TypedContractMethod<
    [tld: BytesLike, resolver: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setWrapper"
  ): TypedContractMethod<
    [tld: BytesLike, enable: boolean, address_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [tld: BytesLike, newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "NewAuthorizer"
  ): TypedContractEvent<
    NewAuthorizerEvent.InputTuple,
    NewAuthorizerEvent.OutputTuple,
    NewAuthorizerEvent.OutputObject
  >;
  getEvent(
    key: "TldRegistered"
  ): TypedContractEvent<
    TldRegisteredEvent.InputTuple,
    TldRegisteredEvent.OutputTuple,
    TldRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "TldRenewed"
  ): TypedContractEvent<
    TldRenewedEvent.InputTuple,
    TldRenewedEvent.OutputTuple,
    TldRenewedEvent.OutputObject
  >;

  filters: {
    "NewAuthorizer(address)": TypedContractEvent<
      NewAuthorizerEvent.InputTuple,
      NewAuthorizerEvent.OutputTuple,
      NewAuthorizerEvent.OutputObject
    >;
    NewAuthorizer: TypedContractEvent<
      NewAuthorizerEvent.InputTuple,
      NewAuthorizerEvent.OutputTuple,
      NewAuthorizerEvent.OutputObject
    >;

    "TldRegistered(bytes,address,uint256)": TypedContractEvent<
      TldRegisteredEvent.InputTuple,
      TldRegisteredEvent.OutputTuple,
      TldRegisteredEvent.OutputObject
    >;
    TldRegistered: TypedContractEvent<
      TldRegisteredEvent.InputTuple,
      TldRegisteredEvent.OutputTuple,
      TldRegisteredEvent.OutputObject
    >;

    "TldRenewed(bytes,uint256)": TypedContractEvent<
      TldRenewedEvent.InputTuple,
      TldRenewedEvent.OutputTuple,
      TldRenewedEvent.OutputObject
    >;
    TldRenewed: TypedContractEvent<
      TldRenewedEvent.InputTuple,
      TldRenewedEvent.OutputTuple,
      TldRenewedEvent.OutputObject
    >;
  };
}