// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const _feeStrate = "0xA66F49F5F5529b5D04266AD966c39564f6aCFDD2";
  const WETH = "0xf531B8F309Be94191af87605CfBf600D71C2cFe0";
  const swapRouter = "0xf531B8F309Be94191af87605CfBf600D71C2cFe0";
  const aavePool = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
  const LCPoolAVv3Ledger = "0xd0eFf073d9BE081200BDeeEcaec15b088D693B53";
  const LCPoolAVv3 = await hre.ethers.deployContract("LCPoolAVv3", [swapRouter, _feeStrate, LCPoolAVv3Ledger, WETH, aavePool]);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
