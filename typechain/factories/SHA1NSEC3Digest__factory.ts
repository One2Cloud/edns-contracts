/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SHA1NSEC3Digest,
  SHA1NSEC3DigestInterface,
} from "../SHA1NSEC3Digest";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "salt",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "iterations",
        type: "uint256",
      },
    ],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d92806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806368f9dab214610030575b600080fd5b61004a60048036038101906100459190610ad7565b610060565b6040516100579190610b85565b60405180910390f35b600061006a610a18565b61009a601086869050898990506100819190610bcf565b61008b9190610bcf565b8261024290919063ffffffff16565b506100f285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050826102ac90919063ffffffff16565b5061014a87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050826102ac90919063ffffffff16565b50600061015a82600001516102ce565b905060008411156102255761016e826107ec565b50610186600060601b8361080390919063ffffffff16565b506101de88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050836102ac90919063ffffffff16565b5060005b8481101561022357610200600083856108349092919063ffffffff16565b5061020e83600001516102ce565b9150808061021b90610c25565b9150506101e2565b505b806bffffffffffffffffffffffff19169250505095945050505050565b61024a610a18565b60006020836102599190610c9d565b146102855760208261026b9190610c9d565b60206102779190610cce565b826102829190610bcf565b91505b81836020018181525050604051808452600081528281016020016040525082905092915050565b6102b4610a18565b6102c683846000015151848551610861565b905092915050565b60006040518251602084019350604067ffffffffffffffc0600183011601600982820310600181146102ff57610306565b6040820191505b50776745230100efcdab890098badcfe001032547600c3d2e1f061035e565b6000838310156103575782820151905082840393506020841015610356576001846020036101000a03198082169150505b5b9392505050565b60005b8281101561076c57610374848289610325565b8552610384846020830189610325565b60208601526040818503106001811461039c576103a5565b60808286038701535b50604083038114600181146103b9576103c9565b6008850260208701511760208701525b5060405b60808110156104555760408103860151603882038701511860208203870151600c830388015118187c010000000100000001000000010000000100000001000000010000000163800000008204167ffffffffefffffffefffffffefffffffefffffffefffffffefffffffefffffffe6002830216179050808288015250600c810190506103cd565b5060805b6101408110156104e257608081038601516070820387015118604082038701516018830388015118187c030000000300000003000000030000000300000003000000030000000363400000008204167ffffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffcfffffffc6004830216179050808288015250601881019050610459565b508160008060005b605081101561073e57601481046000811461051c576001811461056657600281146105a357600381146106065761063f565b6501000000000085046a01000000000000000000008604189350836f01000000000000000000000000000000860416935083650100000000008604189350635a827999925061063f565b6a010000000000000000000085046f01000000000000000000000000000000860418935083650100000000008604189350636ed9eba1925061063f565b6a010000000000000000000085046f01000000000000000000000000000000860417935083650100000000008604169350836a010000000000000000000086046f01000000000000000000000000000000870416179350638f1bbcdc925061063f565b6a010000000000000000000085046f0100000000000000000000000000000086041893508365010000000000860418935063ca62c1d692505b50601f770800000000000000000000000000000000000000000000008504168063ffffffe073080000000000000000000000000000000000000087041617905080840190508063ffffffff86160190508083019050807c0100000000000000000000000000000000000000000000000000000000600484028c0151040190507401000000000000000000000000000000000000000081026501000000000086041794506a0100000000000000000000633fffffff6a040000000000000000000087041663c00000006604000000000000880416170277ffffffff00ffffffff000000000000ffffffff00ffffffff8616179450506001810190506104ea565b5077ffffffff00ffffffff00ffffffff00ffffffff00ffffffff838601169450505050604081019050610361565b506c0100000000000000000000000063ffffffff821667ffffffff000000006101008404166bffffffff0000000000000000620100008504166fffffffff000000000000000000000000630100000086041673ffffffff000000000000000000000000000000006401000000008704161717171702945050505050919050565b6107f4610a18565b81516000815250819050919050565b61080b610a18565b61082c83846000015151846bffffffffffffffffffffffff19166014610950565b905092915050565b61083c610a18565b6108588484846bffffffffffffffffffffffff19166014610950565b90509392505050565b610869610a18565b825182111561087757600080fd5b846020015182856108889190610bcf565b11156108bd576108bc8560026108ad886020015188876108a89190610bcf565b6109d8565b6108b79190610d02565b6109f4565b5b6000808651805187602083010193508088870111156108dc5787860182525b60208701925050505b6020841061092357805182526020826108fe9190610bcf565b915060208161090d9190610bcf565b905060208461091c9190610cce565b93506108e5565b60006001856020036101000a03905080198251168184511681811785525050508692505050949350505050565b610958610a18565b846020015184836109699190610bcf565b11156109915761099085600286856109819190610bcf565b61098b9190610d02565b6109f4565b5b60006001836101000a0390508260200360080284901c935085518386820101858319825116178152815185880111156109ca5784870182525b505050849050949350505050565b6000818311156109ea578290506109ee565b8190505b92915050565b600082600001519050610a078383610242565b50610a1283826102ac565b50505050565b604051806040016040528060608152602001600081525090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610a6157610a60610a3c565b5b8235905067ffffffffffffffff811115610a7e57610a7d610a41565b5b602083019150836001820283011115610a9a57610a99610a46565b5b9250929050565b6000819050919050565b610ab481610aa1565b8114610abf57600080fd5b50565b600081359050610ad181610aab565b92915050565b600080600080600060608688031215610af357610af2610a32565b5b600086013567ffffffffffffffff811115610b1157610b10610a37565b5b610b1d88828901610a4b565b9550955050602086013567ffffffffffffffff811115610b4057610b3f610a37565b5b610b4c88828901610a4b565b93509350506040610b5f88828901610ac2565b9150509295509295909350565b6000819050919050565b610b7f81610b6c565b82525050565b6000602082019050610b9a6000830184610b76565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610bda82610aa1565b9150610be583610aa1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c1a57610c19610ba0565b5b828201905092915050565b6000610c3082610aa1565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610c6357610c62610ba0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ca882610aa1565b9150610cb383610aa1565b925082610cc357610cc2610c6e565b5b828206905092915050565b6000610cd982610aa1565b9150610ce483610aa1565b925082821015610cf757610cf6610ba0565b5b828203905092915050565b6000610d0d82610aa1565b9150610d1883610aa1565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610d5157610d50610ba0565b5b82820290509291505056fea2646970667358221220d2e4897833e61b042b3cf21acdec993815e1dfc990cdc00316e612e9ad6545af64736f6c634300080a0033";

export class SHA1NSEC3Digest__factory extends ContractFactory {
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
  ): Promise<SHA1NSEC3Digest> {
    return super.deploy(overrides || {}) as Promise<SHA1NSEC3Digest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SHA1NSEC3Digest {
    return super.attach(address) as SHA1NSEC3Digest;
  }
  connect(signer: Signer): SHA1NSEC3Digest__factory {
    return super.connect(signer) as SHA1NSEC3Digest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SHA1NSEC3DigestInterface {
    return new utils.Interface(_abi) as SHA1NSEC3DigestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SHA1NSEC3Digest {
    return new Contract(address, _abi, signerOrProvider) as SHA1NSEC3Digest;
  }
}
