/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniversalRegistrarController,
  UniversalRegistrarControllerInterface,
} from "../UniversalRegistrarController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_LABEL_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_LABEL_LENGTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token_",
        type: "address",
      },
      {
        internalType: "contract IRegistrar",
        name: "registrar_",
        type: "address",
      },
      {
        internalType: "contract IRoot",
        name: "root_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "coinId",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "isAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "tld",
        type: "bytes",
      },
    ],
    name: "isAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "renew",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint64",
        name: "expiry",
        type: "uint64",
      },
    ],
    name: "renew",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "label",
        type: "bytes",
      },
    ],
    name: "valid",
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

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611ec561004c600039600081816105a9015281816105e9015281816106a8015281816106e801526107770152611ec56000f3fe6080604052600436106101665760003560e01c80636464e58f116100d1578063b4f7f2481161008a578063dd4984cb11610064578063dd4984cb146103ca578063e9579c2e146103df578063f5b541a6146103f2578063fcdcdade1461041457600080fd5b8063b4f7f24814610377578063cf756fdf1461038a578063d547741f146103aa57600080fd5b80636464e58f146102e857806375b238fc146102fd5780638456cb591461031f57806391d1485414610334578063990c825414610354578063a217fddf1461036257600080fd5b80633659cfe6116101235780633659cfe6146102605780633f4ba83a146102805780634f1ef2861461029557806352d1902d146102a857806357d19d38146102bd5780635c975abb146102d057600080fd5b806301ffc9a71461016b578063248a9ca3146101a05780632891e9cf146101de5780632f2ff15d146101fe57806331dfea511461022057806336568abe14610240575b600080fd5b34801561017757600080fd5b5061018b61018636600461157c565b610434565b60405190151581526020015b60405180910390f35b3480156101ac57600080fd5b506101d06101bb3660046115a6565b60009081526065602052604090206001015490565b604051908152602001610197565b3480156101ea57600080fd5b5061018b6101f9366004611661565b61046b565b34801561020a57600080fd5b5061021e6102193660046116d9565b6104e7565b005b34801561022c57600080fd5b5061018b61023b366004611709565b610511565b34801561024c57600080fd5b5061021e61025b3660046116d9565b61051c565b34801561026c57600080fd5b5061021e61027b366004611745565b61059f565b34801561028c57600080fd5b5061021e61067e565b61021e6102a3366004611762565b61069e565b3480156102b457600080fd5b506101d061076a565b61021e6102cb36600461180b565b61081d565b3480156102dc57600080fd5b5060fb5460ff1661018b565b3480156102f457600080fd5b506101d0608081565b34801561030957600080fd5b506101d0600080516020611e7083398151915281565b34801561032b57600080fd5b5061021e610851565b34801561034057600080fd5b5061018b61034f3660046116d9565b610871565b61021e6102cb3660046118b3565b34801561036e57600080fd5b506101d0600081565b61021e610385366004611971565b61089c565b34801561039657600080fd5b5061021e6103a53660046119f7565b610924565b3480156103b657600080fd5b5061021e6103c53660046116d9565b610a45565b3480156103d657600080fd5b506101d0600181565b61021e6103ed366004611a48565b610a6a565b3480156103fe57600080fd5b506101d0600080516020611e2983398151915281565b34801561042057600080fd5b5061018b61042f366004611709565b610aef565b60006001600160e01b03198216637965db0b60e01b148061046557506301ffc9a760e01b6001600160e01b03198316145b92915050565b61012e54604051632891e9cf60e01b81526000916001600160a01b031690632891e9cf9061049f9086908690600401611b0b565b602060405180830381865afa1580156104bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e09190611b30565b5092915050565b60008281526065602052604090206001015461050281610be5565b61050c8383610bef565b505050565b600061046582610c75565b6001600160a01b03811633146105915760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61059b8282610c8b565b5050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105e75760405162461bcd60e51b815260040161058890611b52565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610630600080516020611e09833981519152546001600160a01b031690565b6001600160a01b0316146106565760405162461bcd60e51b815260040161058890611b9e565b61065f81610cf2565b6040805160008082526020820190925261067b91839190610d0a565b50565b600080516020611e7083398151915261069681610be5565b61067b610e75565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106e65760405162461bcd60e51b815260040161058890611b52565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661072f600080516020611e09833981519152546001600160a01b031690565b6001600160a01b0316146107555760405162461bcd60e51b815260040161058890611b9e565b61075e82610cf2565b61059b82826001610d0a565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461080a5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610588565b50600080516020611e0983398151915290565b60405162461bcd60e51b81526020600482015260096024820152682327a92124a22222a760b91b6044820152606401610588565b600080516020611e7083398151915261086981610be5565b61067b610ec7565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600080516020611e298339815191526108b481610be5565b61012e546001600160a01b0316630deff82033878787876040518663ffffffff1660e01b81526004016108eb959493929190611bea565b600060405180830381600087803b15801561090557600080fd5b505af1158015610919573d6000803e3d6000fd5b505050505050505050565b600054610100900460ff16158080156109445750600054600160ff909116105b8061095e5750303b15801561095e575060005460ff166001145b6109c15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610588565b6000805460ff1916600117905580156109e4576000805461ff0019166101001790555b6109f085858585610f04565b6109f8610f45565b8015610a3e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b600082815260656020526040902060010154610a6081610be5565b61050c8383610c8b565b600080516020611e29833981519152610a8281610be5565b61012e546001600160a01b0316634e654b07338686866040518563ffffffff1660e01b8152600401610ab79493929190611c42565b600060405180830381600087803b158015610ad157600080fd5b505af1158015610ae5573d6000803e3d6000fd5b5050505050505050565b61012e54604051637e6e6d6f60e11b81526000916001600160a01b03169063fcdcdade90610b21908590600401611c93565b602060405180830381865afa158015610b3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b629190611b30565b8015610465575061012e5482516020840120604051633743b35f60e21b815260048101919091523060248201526001600160a01b039091169063dd0ecd7c90604401602060405180830381865afa158015610bc1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104659190611b30565b61067b8133610f76565b610bf98282610871565b61059b5760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c313390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000608082511080156104655750505160011090565b610c958282610871565b1561059b5760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600080516020611e7083398151915261059b81610be5565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610d3d5761050c83610fcf565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610d97575060408051601f3d908101601f19168201909252610d9491810190611ca6565b60015b610dfa5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610588565b600080516020611e098339815191528114610e695760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610588565b5061050c83838361106b565b610e7d611090565b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b610ecf6110d9565b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610eaa3390565b600054610100900460ff16610f2b5760405162461bcd60e51b815260040161058890611cbf565b610f3361111f565b610f3f8484848461114e565b50505050565b600054610100900460ff16610f6c5760405162461bcd60e51b815260040161058890611cbf565b610f746111fc565b565b610f808282610871565b61059b57610f8d81611223565b610f98836020611235565b604051602001610fa9929190611d0a565b60408051601f198184030181529082905262461bcd60e51b825261058891600401611c93565b6001600160a01b0381163b61103c5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610588565b600080516020611e0983398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b611074836113d7565b6000825111806110815750805b1561050c57610f3f8383611417565b60fb5460ff16610f745760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610588565b60fb5460ff1615610f745760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610588565b600054610100900460ff166111465760405162461bcd60e51b815260040161058890611cbf565b610f7461150b565b600054610100900460ff166111755760405162461bcd60e51b815260040161058890611cbf565b61012d80546001600160a01b038087166001600160a01b03199283161790925561012e805486841690831617905561012f8054928516929091169190911790556101308190556111cc60006111c73390565b610bef565b6111e4600080516020611e7083398151915233610bef565b610f3f600080516020611e2983398151915233610bef565b600054610100900460ff16610f745760405162461bcd60e51b815260040161058890611cbf565b60606104656001600160a01b03831660145b60606000611244836002611d95565b61124f906002611dac565b6001600160401b03811115611266576112666115bf565b6040519080825280601f01601f191660200182016040528015611290576020820181803683370190505b509050600360fc1b816000815181106112ab576112ab611dbf565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112da576112da611dbf565b60200101906001600160f81b031916908160001a90535060006112fe846002611d95565b611309906001611dac565b90505b6001811115611381576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061133d5761133d611dbf565b1a60f81b82828151811061135357611353611dbf565b60200101906001600160f81b031916908160001a90535060049490941c9361137a81611dd5565b905061130c565b5083156113d05760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610588565b9392505050565b6113e081610fcf565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b61147f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610588565b600080846001600160a01b03168460405161149a9190611dec565b600060405180830381855af49150503d80600081146114d5576040519150601f19603f3d011682016040523d82523d6000602084013e6114da565b606091505b50915091506115028282604051806060016040528060278152602001611e496027913961153e565b95945050505050565b600054610100900460ff166115325760405162461bcd60e51b815260040161058890611cbf565b60fb805460ff19169055565b6060831561154d5750816113d0565b6113d083838151156115625781518083602001fd5b8060405162461bcd60e51b81526004016105889190611c93565b60006020828403121561158e57600080fd5b81356001600160e01b0319811681146113d057600080fd5b6000602082840312156115b857600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126115e657600080fd5b81356001600160401b0380821115611600576116006115bf565b604051601f8301601f19908116603f01168101908282118183101715611628576116286115bf565b8160405283815286602085880101111561164157600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561167457600080fd5b82356001600160401b038082111561168b57600080fd5b611697868387016115d5565b935060208501359150808211156116ad57600080fd5b506116ba858286016115d5565b9150509250929050565b6001600160a01b038116811461067b57600080fd5b600080604083850312156116ec57600080fd5b8235915060208301356116fe816116c4565b809150509250929050565b60006020828403121561171b57600080fd5b81356001600160401b0381111561173157600080fd5b61173d848285016115d5565b949350505050565b60006020828403121561175757600080fd5b81356113d0816116c4565b6000806040838503121561177557600080fd5b8235611780816116c4565b915060208301356001600160401b0381111561179b57600080fd5b6116ba858286016115d5565b80356001600160401b03811681146117be57600080fd5b919050565b60008083601f8401126117d557600080fd5b5081356001600160401b038111156117ec57600080fd5b60208301915083602082850101111561180457600080fd5b9250929050565b60008060008060008060a0878903121561182457600080fd5b86356001600160401b038082111561183b57600080fd5b6118478a838b016115d5565b9750602089013591508082111561185d57600080fd5b6118698a838b016115d5565b965061187760408a016117a7565b955060608901359450608089013591508082111561189457600080fd5b506118a189828a016117c3565b979a9699509497509295939492505050565b600080600080600080600060c0888a0312156118ce57600080fd5b87356001600160401b03808211156118e557600080fd5b6118f18b838c016115d5565b985060208a013591508082111561190757600080fd5b6119138b838c016115d5565b975060408a01359150611925826116c4565b81965061193460608b016117a7565b955060808a0135945060a08a013591508082111561195157600080fd5b5061195e8a828b016117c3565b989b979a50959850939692959293505050565b6000806000806080858703121561198757600080fd5b84356001600160401b038082111561199e57600080fd5b6119aa888389016115d5565b955060208701359150808211156119c057600080fd5b506119cd878288016115d5565b93505060408501356119de816116c4565b91506119ec606086016117a7565b905092959194509250565b60008060008060808587031215611a0d57600080fd5b8435611a18816116c4565b93506020850135611a28816116c4565b92506040850135611a38816116c4565b9396929550929360600135925050565b600080600060608486031215611a5d57600080fd5b83356001600160401b0380821115611a7457600080fd5b611a80878388016115d5565b94506020860135915080821115611a9657600080fd5b50611aa3868287016115d5565b925050611ab2604085016117a7565b90509250925092565b60005b83811015611ad6578181015183820152602001611abe565b50506000910152565b60008151808452611af7816020860160208601611abb565b601f01601f19169290920160200192915050565b604081526000611b1e6040830185611adf565b82810360208401526115028185611adf565b600060208284031215611b4257600080fd5b815180151581146113d057600080fd5b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600060018060a01b03808816835260a06020840152611c0c60a0840188611adf565b8381036040850152611c1e8188611adf565b95909116606084015250506001600160401b03919091166080909101529392505050565b6001600160a01b0385168152608060208201819052600090611c6690830186611adf565b8281036040840152611c788186611adf565b9150506001600160401b038316606083015295945050505050565b6020815260006113d06020830184611adf565b600060208284031215611cb857600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611d42816017850160208801611abb565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611d73816028840160208801611abb565b01602801949350505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761046557610465611d7f565b8082018082111561046557610465611d7f565b634e487b7160e01b600052603260045260246000fd5b600081611de457611de4611d7f565b506000190190565b60008251611dfe818460208701611abb565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a2646970667358221220298efc854cc8540c175c36489c31bfb4bf08a5472853d7a79285aaefe4ef5e4864736f6c63430008110033";

export class UniversalRegistrarController__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniversalRegistrarController> {
    return super.deploy(
      overrides || {}
    ) as Promise<UniversalRegistrarController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniversalRegistrarController {
    return super.attach(address) as UniversalRegistrarController;
  }
  connect(signer: Signer): UniversalRegistrarController__factory {
    return super.connect(signer) as UniversalRegistrarController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniversalRegistrarControllerInterface {
    return new utils.Interface(_abi) as UniversalRegistrarControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniversalRegistrarController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniversalRegistrarController;
  }
}
