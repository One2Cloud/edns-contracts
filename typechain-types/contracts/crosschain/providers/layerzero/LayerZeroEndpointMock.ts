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
} from "../../../../common";

export interface LayerZeroEndpointMockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addrToPackedBytes"
      | "blockNextMsg"
      | "estimateFees"
      | "forceResumeReceive"
      | "getChainId"
      | "getConfig"
      | "getInboundNonce"
      | "getLengthOfQueue"
      | "getOutboundNonce"
      | "getReceiveLibraryAddress"
      | "getReceiveVersion"
      | "getSendLibraryAddress"
      | "getSendVersion"
      | "hasStoredPayload"
      | "inboundNonce"
      | "isReceivingPayload"
      | "isSendingPayload"
      | "lzEndpointLookup"
      | "mockBlockConfirmations"
      | "mockChainId"
      | "mockLayerZeroVersion"
      | "mockLibraryVersion"
      | "mockOracle"
      | "mockRelayer"
      | "mockStaticNativeFee"
      | "msgsToDeliver"
      | "nativeFee"
      | "outboundNonce"
      | "packedBytesToAddr"
      | "receivePayload"
      | "retryPayload"
      | "send"
      | "setConfig"
      | "setDestLzEndpoint"
      | "setEstimatedFees"
      | "setReceiveVersion"
      | "setSendVersion"
      | "storedPayload"
      | "zroFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PayloadCleared"
      | "PayloadStored"
      | "UaForceResumeReceive"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addrToPackedBytes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "blockNextMsg",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimateFees",
    values: [BigNumberish, AddressLike, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInboundNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLengthOfQueue",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundNonce",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStoredPayload",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inboundNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceivingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSendingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpointLookup",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mockBlockConfirmations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockLayerZeroVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockLibraryVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mockStaticNativeFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "msgsToDeliver",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "nativeFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "outboundNonce",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "packedBytesToAddr",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayload",
    values: [
      BigNumberish,
      BytesLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryPayload",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      BigNumberish,
      BytesLike,
      BytesLike,
      AddressLike,
      AddressLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDestLzEndpoint",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEstimatedFees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "storedPayload",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "zroFee", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addrToPackedBytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockNextMsg",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLengthOfQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStoredPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReceivingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSendingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lzEndpointLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockBlockConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockLayerZeroVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockLibraryVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mockOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mockRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockStaticNativeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "msgsToDeliver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nativeFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "packedBytesToAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDestLzEndpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEstimatedFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storedPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zroFee", data: BytesLike): Result;
}

export namespace PayloadClearedEvent {
  export type InputTuple = [
    srcChainId: BigNumberish,
    srcAddress: BytesLike,
    nonce: BigNumberish,
    dstAddress: AddressLike
  ];
  export type OutputTuple = [
    srcChainId: bigint,
    srcAddress: string,
    nonce: bigint,
    dstAddress: string
  ];
  export interface OutputObject {
    srcChainId: bigint;
    srcAddress: string;
    nonce: bigint;
    dstAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PayloadStoredEvent {
  export type InputTuple = [
    srcChainId: BigNumberish,
    srcAddress: BytesLike,
    dstAddress: AddressLike,
    nonce: BigNumberish,
    payload: BytesLike,
    reason: BytesLike
  ];
  export type OutputTuple = [
    srcChainId: bigint,
    srcAddress: string,
    dstAddress: string,
    nonce: bigint,
    payload: string,
    reason: string
  ];
  export interface OutputObject {
    srcChainId: bigint;
    srcAddress: string;
    dstAddress: string;
    nonce: bigint;
    payload: string;
    reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UaForceResumeReceiveEvent {
  export type InputTuple = [chainId: BigNumberish, srcAddress: BytesLike];
  export type OutputTuple = [chainId: bigint, srcAddress: string];
  export interface OutputObject {
    chainId: bigint;
    srcAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LayerZeroEndpointMock extends BaseContract {
  connect(runner?: ContractRunner | null): LayerZeroEndpointMock;
  waitForDeployment(): Promise<this>;

  interface: LayerZeroEndpointMockInterface;

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

  addrToPackedBytes: TypedContractMethod<[_a: AddressLike], [string], "view">;

  blockNextMsg: TypedContractMethod<[], [void], "nonpayable">;

  estimateFees: TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: AddressLike,
      _payload: BytesLike,
      arg3: boolean,
      arg4: BytesLike
    ],
    [[bigint, bigint] & { _nativeFee: bigint; _zroFee: bigint }],
    "view"
  >;

  forceResumeReceive: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  getChainId: TypedContractMethod<[], [bigint], "view">;

  getConfig: TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: AddressLike,
      arg3: BigNumberish
    ],
    [string],
    "view"
  >;

  getInboundNonce: TypedContractMethod<
    [_chainID: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;

  getLengthOfQueue: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;

  getOutboundNonce: TypedContractMethod<
    [_chainID: BigNumberish, _srcAddress: AddressLike],
    [bigint],
    "view"
  >;

  getReceiveLibraryAddress: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  getReceiveVersion: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getSendLibraryAddress: TypedContractMethod<
    [arg0: AddressLike],
    [string],
    "view"
  >;

  getSendVersion: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  hasStoredPayload: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;

  inboundNonce: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [bigint],
    "view"
  >;

  isReceivingPayload: TypedContractMethod<[], [boolean], "view">;

  isSendingPayload: TypedContractMethod<[], [boolean], "view">;

  lzEndpointLookup: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  mockBlockConfirmations: TypedContractMethod<[], [bigint], "view">;

  mockChainId: TypedContractMethod<[], [bigint], "view">;

  mockLayerZeroVersion: TypedContractMethod<[], [bigint], "view">;

  mockLibraryVersion: TypedContractMethod<[], [bigint], "view">;

  mockOracle: TypedContractMethod<[], [string], "view">;

  mockRelayer: TypedContractMethod<[], [string], "view">;

  mockStaticNativeFee: TypedContractMethod<[], [bigint], "view">;

  msgsToDeliver: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish],
    [
      [string, bigint, string] & {
        dstAddress: string;
        nonce: bigint;
        payload: string;
      }
    ],
    "view"
  >;

  nativeFee: TypedContractMethod<[], [bigint], "view">;

  outboundNonce: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  packedBytesToAddr: TypedContractMethod<[_b: BytesLike], [string], "view">;

  receivePayload: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: AddressLike,
      _nonce: BigNumberish,
      arg4: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  retryPayload: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike, _payload: BytesLike],
    [void],
    "nonpayable"
  >;

  send: TypedContractMethod<
    [
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      arg3: AddressLike,
      arg4: AddressLike,
      _adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;

  setConfig: TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setDestLzEndpoint: TypedContractMethod<
    [destAddr: AddressLike, lzEndpointAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  setEstimatedFees: TypedContractMethod<
    [_nativeFee: BigNumberish, _zroFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setReceiveVersion: TypedContractMethod<
    [arg0: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSendVersion: TypedContractMethod<
    [arg0: BigNumberish],
    [void],
    "nonpayable"
  >;

  storedPayload: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [
      [bigint, string, string] & {
        payloadLength: bigint;
        dstAddress: string;
        payloadHash: string;
      }
    ],
    "view"
  >;

  zroFee: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addrToPackedBytes"
  ): TypedContractMethod<[_a: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "blockNextMsg"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "estimateFees"
  ): TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: AddressLike,
      _payload: BytesLike,
      arg3: boolean,
      arg4: BytesLike
    ],
    [[bigint, bigint] & { _nativeFee: bigint; _zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "forceResumeReceive"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: AddressLike,
      arg3: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInboundNonce"
  ): TypedContractMethod<
    [_chainID: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLengthOfQueue"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOutboundNonce"
  ): TypedContractMethod<
    [_chainID: BigNumberish, _srcAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceiveLibraryAddress"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getReceiveVersion"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSendLibraryAddress"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSendVersion"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasStoredPayload"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "inboundNonce"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "isReceivingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSendingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "lzEndpointLookup"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "mockBlockConfirmations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mockChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mockLayerZeroVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mockLibraryVersion"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mockOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mockRelayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mockStaticNativeFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "msgsToDeliver"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish],
    [
      [string, bigint, string] & {
        dstAddress: string;
        nonce: bigint;
        payload: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "nativeFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "outboundNonce"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "packedBytesToAddr"
  ): TypedContractMethod<[_b: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "receivePayload"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: AddressLike,
      _nonce: BigNumberish,
      arg4: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "retryPayload"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike, _payload: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [
      _chainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      arg3: AddressLike,
      arg4: AddressLike,
      _adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setConfig"
  ): TypedContractMethod<
    [
      arg0: BigNumberish,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDestLzEndpoint"
  ): TypedContractMethod<
    [destAddr: AddressLike, lzEndpointAddr: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setEstimatedFees"
  ): TypedContractMethod<
    [_nativeFee: BigNumberish, _zroFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setReceiveVersion"
  ): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSendVersion"
  ): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "storedPayload"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike],
    [
      [bigint, string, string] & {
        payloadLength: bigint;
        dstAddress: string;
        payloadHash: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "zroFee"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "PayloadCleared"
  ): TypedContractEvent<
    PayloadClearedEvent.InputTuple,
    PayloadClearedEvent.OutputTuple,
    PayloadClearedEvent.OutputObject
  >;
  getEvent(
    key: "PayloadStored"
  ): TypedContractEvent<
    PayloadStoredEvent.InputTuple,
    PayloadStoredEvent.OutputTuple,
    PayloadStoredEvent.OutputObject
  >;
  getEvent(
    key: "UaForceResumeReceive"
  ): TypedContractEvent<
    UaForceResumeReceiveEvent.InputTuple,
    UaForceResumeReceiveEvent.OutputTuple,
    UaForceResumeReceiveEvent.OutputObject
  >;

  filters: {
    "PayloadCleared(uint16,bytes,uint64,address)": TypedContractEvent<
      PayloadClearedEvent.InputTuple,
      PayloadClearedEvent.OutputTuple,
      PayloadClearedEvent.OutputObject
    >;
    PayloadCleared: TypedContractEvent<
      PayloadClearedEvent.InputTuple,
      PayloadClearedEvent.OutputTuple,
      PayloadClearedEvent.OutputObject
    >;

    "PayloadStored(uint16,bytes,address,uint64,bytes,bytes)": TypedContractEvent<
      PayloadStoredEvent.InputTuple,
      PayloadStoredEvent.OutputTuple,
      PayloadStoredEvent.OutputObject
    >;
    PayloadStored: TypedContractEvent<
      PayloadStoredEvent.InputTuple,
      PayloadStoredEvent.OutputTuple,
      PayloadStoredEvent.OutputObject
    >;

    "UaForceResumeReceive(uint16,bytes)": TypedContractEvent<
      UaForceResumeReceiveEvent.InputTuple,
      UaForceResumeReceiveEvent.OutputTuple,
      UaForceResumeReceiveEvent.OutputObject
    >;
    UaForceResumeReceive: TypedContractEvent<
      UaForceResumeReceiveEvent.InputTuple,
      UaForceResumeReceiveEvent.OutputTuple,
      UaForceResumeReceiveEvent.OutputObject
    >;
  };
}