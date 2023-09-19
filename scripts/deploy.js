// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const _feeStrate = "0xA66F49F5F5529b5D04266AD966c39564f6aCFDD2";
  const WETH =       "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
  const swapRouter = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
  const aavePool =   "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
  // const LCPoolAVv3Ledger = "0xd0F3265C960Af77D111d399a88a242A765Ff67C7";
  const LCPoolAVv3Ledger = await hre.ethers.deployContract("LCPoolAVv3Ledger", [_feeStrate]);
  const LCPoolAVv3 = await hre.ethers.deployContract("LCPoolAVv3", [swapRouter, _feeStrate, LCPoolAVv3Ledger, WETH, aavePool]);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat verify --network sepolia 0xe44E6c89d78BdfFF6EA3f0e826030C9a5159DDF0 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9 0xA66F49F5F5529b5D04266AD966c39564f6aCFDD2 0xd0F3265C960Af77D111d399a88a242A765Ff67C7 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9 0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951