import { ethers } from "hardhat";
import { deployWrapper } from "./src/deploy";
import { getContracts } from "./src/lib/get-contracts";

async function main() {
  const [signer] = await ethers.getSigners();
  const chainId = await signer.getChainId();
  const contracts = await getContracts(signer);
  await deployWrapper("EDNS Domains", "EDNS", { signer, chainId, contracts });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
