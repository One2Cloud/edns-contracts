// import { Contract, ContractFactory, ethers, Signer } from "ethers";
import { Contract, ContractFactory, Signer } from "ethers";
import hardhat, { ethers } from "hardhat";

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
const GAS_LIMIT = 10000000;

export enum FacetCutAction {
  ADD,
  REPLACE,
  REMOVE,
}

export const getSelectors = (contract: Contract): string[] => {
  const signatures = Object.keys(contract.interface.functions);
  const selectors = signatures.filter((signature) => !signature.startsWith("init")).map((signature) => contract.interface.getSighash(signature));
  return selectors;
};

export const getSelector = (func: string): string => {
  const abiInterface = new ethers.utils.Interface([func]);
  return abiInterface.getSighash(ethers.utils.Fragment.from(func));
};

const deployFacets = async (FacetNames: string[]): Promise<Contract[]> => {
  const [signer] = await ethers.getSigners();
  const facets: Contract[] = [];
  for (const FacetName of FacetNames) {
    const FacetFactory = await ethers.getContractFactory(FacetName, signer);
    const Facet = await FacetFactory.deploy();
    await Facet.deployed();
    facets.push(Facet);
  }
  return facets;
};

const cutFacets = async (signer: SignerWithAddress, diamond: Contract, action: FacetCutAction, facets: Contract[]): Promise<void> => {
  const cut: { facetAddress: string; action: FacetCutAction; functionSelectors: string[] }[] = facets.map((facet) => ({
    facetAddress: facet.address,
    action,
    functionSelectors: getSelectors(facet),
  }));

  const DiamondCut = await ethers.getContractAt("IDiamondCut", diamond.address, signer);

  const functionCall = ethers.utils.formatBytes32String("");

  const tx = await DiamondCut.diamondCut(cut, ZERO_ADDRESS, functionCall, { gasLimit: GAS_LIMIT });
  const receipt = await tx.wait();

  if (!receipt.status) {
    throw new Error(`DiamondCut failed: ${tx.hash}`);
  }
};

const removeFacets = async (diamond: Contract,facets: Contract[]): Promise<void> => {
