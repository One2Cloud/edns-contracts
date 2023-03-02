import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import NetworkConfig from "../../network.config";
import {
  PublicResolver,
  Registry,
  Root,
  ClassicalRegistrarController,
  Registrar,
  Wrapper,
  TokenMock,
  Portal,
  UniversalRegistrarController,
  Synchronizer,
  OmniRegistrarController,
} from "../../typechain";
import { ContractName } from "./constants/contract-name";
import { Contract, Transaction } from "ethers";
import { getAllContractsData, getContractAddress, isContractDeployed } from "./lib/get-contracts";
import { getBalance } from "./lib/get-balance";
import _ from "lodash";
import { setAllContractsData } from "./lib/set-contracts";
import delay from "delay";
import { LayerZeroProvider } from "../../typechain/LayerZeroProvider";
import { Bridge } from "../../typechain/Bridge";
import { IContracts } from "./interfaces/contracts";

export interface IDeployInput {
  chainId: number;
  signer: SignerWithAddress;
  contracts: IContracts;
}

export const deployRegistry = async (input: IDeployInput): Promise<Registry> => {
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Registry");

  // const factory = await ethers.getContractFactory("Registry", input.signer);
  // const _contract = await upgrades.deployProxy(factory, { kind: "uups" });
  // await _contract.deployed();
  // await _afterDeploy(await input.signer.getChainId(), "Registry", _contract, _contract.deployTransaction);
  // const contract = factory.attach(_contract.address);
  // return contract;
};

export const deployWrapper = async (NFT_NAME: string, NFT_SYMBOL: string, input: IDeployInput): Promise<Wrapper> => {
  if (!input.contracts.Registry) throw new Error("`Registry` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "DefaultWrapper");
  const factory = await ethers.getContractFactory("Wrapper", input.signer);
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Registry.address, NFT_NAME, NFT_SYMBOL], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "DefaultWrapper", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployPublicResolver = async (input: IDeployInput): Promise<PublicResolver> => {
  if (!input.contracts.Registry) throw new Error("`Registry` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "PublicResolver");
  const factory = await ethers.getContractFactory("PublicResolver", input.signer);
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Registry.address], { kind: "uups", unsafeAllow: ["delegatecall"] });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "PublicResolver", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployRegistrar = async (input: IDeployInput): Promise<Registrar> => {
  if (!input.contracts.Registry) throw new Error("`Registry` is not available");
  if (!input.contracts.PublicResolver) throw new Error("`PublicResolver` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Registrar");
  const factory = await ethers.getContractFactory("Registrar", input.signer);
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Registry.address, input.contracts.PublicResolver.address], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "Registrar", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployRoot = async (input: IDeployInput): Promise<Root> => {
  if (!input.contracts.Registry) throw new Error("`Registry` is not available");
  if (!input.contracts.Registrar) throw new Error("`Registrar` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Root");
  const factory = await ethers.getContractFactory("Root", input.signer);
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Registry.address, input.contracts.Registrar.address], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "Root", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployTokenMock = async (input: IDeployInput): Promise<TokenMock> => {
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Token");
  const factory = await ethers.getContractFactory("TokenMock", input.signer);
  const contract = await factory.deploy();
  await _afterDeploy(await input.signer.getChainId(), "Token", contract, contract.deployTransaction);
  return contract;
};

export const deployClassicalRegistrarController = async (input: IDeployInput): Promise<ClassicalRegistrarController> => {
  if (!input.contracts.Token) throw new Error("`Token` is not available");
  if (!input.contracts.Registrar) throw new Error("`Registrar` is not available");
  if (!input.contracts.Root) throw new Error("`Root` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "ClassicalRegistrarController");
  const factory = await ethers.getContractFactory("ClassicalRegistrarController", input.signer);
  const COIN_ID = NetworkConfig[await input.signer.getChainId()].slip44?.coinId || 0;
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Token.address, input.contracts.Registrar.address, input.contracts.Root.address, COIN_ID], {
    kind: "uups",
  });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "ClassicalRegistrarController", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployUniversalRegistrarController = async (input: IDeployInput): Promise<UniversalRegistrarController> => {
  if (!input.contracts.Registrar) throw new Error("`Registrar` is not available");
  if (!input.contracts.Root) throw new Error("`Root` is not available");
  if (!input.contracts.Token) throw new Error("`Token` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "UniversalRegistrarController");
  const factory = await ethers.getContractFactory("UniversalRegistrarController", input.signer);
  const COIN_ID = NetworkConfig[await input.signer.getChainId()].slip44?.coinId || 0;
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Token.address, input.contracts.Registrar.address, input.contracts.Root.address, COIN_ID], {
    kind: "uups",
  });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "UniversalRegistrarController", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployOmniRegistrarController = async (input: IDeployInput): Promise<OmniRegistrarController> => {
  if (!input.contracts.Registrar) throw new Error("`Registrar` is not available");
  if (!input.contracts.Root) throw new Error("`Root` is not available");
  if (!input.contracts.Token) throw new Error("`Token` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "OmniRegistrarController");
  const factory = await ethers.getContractFactory("OmniRegistrarController", input.signer);
  const COIN_ID = NetworkConfig[await input.signer.getChainId()].slip44?.coinId || 0;
  const _contract = await upgrades.deployProxy(factory, [input.contracts.Token.address, input.contracts.Registrar.address, input.contracts.Root.address, COIN_ID], {
    kind: "uups",
  });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "OmniRegistrarController", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployPortal = async (input: IDeployInput): Promise<Portal> => {
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Portal");
  const factory = await ethers.getContractFactory("Portal", input.signer);
  const _contract = await upgrades.deployProxy(factory, { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "Portal", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployBridge = async (input: IDeployInput): Promise<Bridge> => {
  if (!input.contracts.Registry) throw new Error("`Registry` is not available");
  if (!input.contracts.Portal) throw new Error("`Portal` is not available");
  const chain = NetworkConfig[input.chainId].chain;
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Bridge");
  const factory = await ethers.getContractFactory("Bridge", input.signer);
  const _contract = await upgrades.deployProxy(factory, [chain, input.contracts.Registry.address, input.contracts.Portal.address], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "Bridge", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deploySynchronizer = async (input: IDeployInput): Promise<Synchronizer> => {
  if (!input.contracts.Registrar) throw new Error("`Registrar` is not available");
  if (!input.contracts.Portal) throw new Error("`Portal` is not available");
  const chain = NetworkConfig[input.chainId].chain;
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "Synchronizer");
  const factory = await ethers.getContractFactory("Synchronizer", input.signer);
  const _contract = await upgrades.deployProxy(factory, [chain, input.contracts.Registrar.address, input.contracts.Portal.address], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "Synchronizer", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

export const deployLayerZeroProvider = async (input: IDeployInput): Promise<LayerZeroProvider> => {
  if (!input.contracts.Portal) throw new Error("`Portal` is not available");
  await _beforeDeploy(input.signer, await input.signer.getChainId(), "LayerZeroProvider");
  const factory = await ethers.getContractFactory("LayerZeroProvider", input.signer);
  const lzEndpoint = NetworkConfig[await input.signer.getChainId()].layerzero?.endpoint;
  if (!lzEndpoint) throw new Error("LayerZero endpoint is missing");
  if (!ethers.utils.isAddress(lzEndpoint.address)) throw new Error("LayerZero endpoint is invalid");
  const _contract = await upgrades.deployProxy(factory, [lzEndpoint.address, input.contracts.Portal.address], { kind: "uups" });
  await _contract.deployed();
  await _afterDeploy(await input.signer.getChainId(), "LayerZeroProvider", _contract, _contract.deployTransaction);
  const contract = factory.attach(_contract.address);
  return contract;
};

const _beforeDeploy = async (signer: SignerWithAddress, chainId: number, name: ContractName) => {
  // Check is the contract already deployed on to the chain
  const isDeployed = await isContractDeployed(chainId, name);
  if (isDeployed) throw new Error(`${name} is already deployed - [${await getContractAddress(chainId, name)})}]`);

  // Check is the signer account has enough balance
  const balance = await getBalance(signer);
  if (balance.eq(0)) throw new Error(`Signer account ${signer.address} has [0] balance`);

  // Announce ready for the deployment
  console.log(`Deployment initiated, contract [${name}] will be deploy on [${NetworkConfig[chainId].name}] in 3 seconds...`);
  await delay(3000);
};

const _afterDeploy = async (chainId: number, name: ContractName, contract: Contract, tx: Transaction) => {
  console.log(`Contract [${name}] has been deployed on [${NetworkConfig[chainId].name}]`);
  console.log(`Address - [${contract.address}]`);
  console.log(`Transaction Hash - [${tx.hash}]`);
  const ALL_CONTRACTS_DATA = await getAllContractsData();
  const index = ALL_CONTRACTS_DATA.findIndex((c) => c.chainId === chainId);
  if (index !== -1) {
    ALL_CONTRACTS_DATA[index].addresses[name] = contract.address;
  } else {
    const _contract = _.clone(ALL_CONTRACTS_DATA.find((c) => c.chainId === 0));
    if (!_contract) throw new Error("");
    _contract.chainId = chainId;
    if (name.split(".").length > 1 && name.startsWith("Registry")) {
    } else {
      if (_contract.addresses[name.split(".")[0]]) {
        if (name.split(".")[0] === "Registry" && _contract.addresses["Registry"]) {
          _contract.addresses["Registry"][name.split(".")[1]] = contract.address;
        }
      } else {
      }
    }
    ALL_CONTRACTS_DATA.push(_contract);
  }
  if (chainId !== 0) await setAllContractsData(ALL_CONTRACTS_DATA);
  // await verifyContract(contract.address);
};
