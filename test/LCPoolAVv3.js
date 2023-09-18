const { expect } = require("chai");
const { hre, ethers } = require("hardhat");
const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
// require('events').EventEmitter.defaultMaxListeners = 15;
describe ("LCPoolAVv3", function () {
  async function deployLCaaveAndLedger() {
    const _feeStrate = "0xA66F49F5F5529b5D04266AD966c39564f6aCFDD2";
    const swapRouter = "0x530F86236F67C67dcF164729a2c3E7ff3785D1A3";
    const aavePool = "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951";
    const weth = "0xf531B8F309Be94191af87605CfBf600D71C2cFe0";
    const weeth = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0"
    const provider = ethers.getDefaultProvider();
    const LCPoolAVv3Ledger = "0xd0eFf073d9BE081200BDeeEcaec15b088D693B53";
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    
    const impersonatedSigner = await ethers.getImpersonatedSigner("0xf531B8F309Be94191af87605CfBf600D71C2cFe0");
    const balance = await provider.getBalance(weeth);
    console.log("balance", balance);
    const LCPoolAVv3 = await ethers.deployContract("LCPoolAVv3", [swapRouter, _feeStrate, LCPoolAVv3Ledger, weth, aavePool]);
    return { LCPoolAVv3Ledger, LCPoolAVv3, owner, otherAccount, _feeStrate, };
  }

  // describe("Deployment", function () {
  //   it("Should set the feestate address", async function () {
  //     const { _feeStrate, LCPoolAVv3Ledger } = await loadFixture(deployLCaaveAndLedger);
      
  //     expect(await LCPoolAVv3Ledger.feeStrate()).to.equal(_feeStrate);
  //   });
  //   it("Should set the LCPoolAVv3Ledger address", async function () {
  //     const { LCPoolAVv3, LCPoolAVv3Ledger } = await loadFixture(deployLCaaveAndLedger);
      
  //     expect(await LCPoolAVv3.ledger()).to.equal(LCPoolAVv3Ledger.target);
  //   });

  // });

  // describe("setReinvestInfo", function () {
  //   // it("Should set the reinvestable false", async function () {
  //   //   const {  LCPoolAVv3 } = await loadFixture(deployLCaaveAndLedger);
  //   //   await LCPoolAVv3.setReinvestInfo(false, 1000);
  //   //   expect(await LCPoolAVv3.reinvestAble()).to.equal(false);
  //   // });
  //   it("Should set the reinvesedge", async function () {
  //     const {  LCPoolAVv3 } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setReinvestInfo(false, 1000);
  //     expect(await LCPoolAVv3.reinvestEdge()).to.equal(1000);
  //   });
  // });
  // describe("setAavePool", function () {
  //   it("Should set the setAavePool", async function () {
  //     const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setAavePool(otherAccount);
  //     expect(await LCPoolAVv3.aavePool()).to.equal(otherAccount.address);
  //   });
  // });
  // describe("setSwapRouter", function () {
  //   it("Should set the setSwapRouter", async function () {
  //     const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setSwapRouter(otherAccount.address);
  //     expect(await LCPoolAVv3.swapRouter()).to.equal(otherAccount.address);
  //   });
  // });
  // describe("setFeeStrate", function () {
  //   it("Should set the setFeeStrate", async function () {
  //     const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setFeeStrate(otherAccount.address);
  //     expect(await LCPoolAVv3.feeStrate()).to.equal(otherAccount.address);
  //   });
  // });
  // describe("setOperator", function () {
  //   it("Should set the setOperator", async function () {
  //     const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setOperator(otherAccount, true);
  //     expect(await LCPoolAVv3.operators(otherAccount)).to.equal(true);
  //   });
  // });
  // describe("setManager", function () {
  //   it("Should set the setManager", async function () {
  //     const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
  //     await LCPoolAVv3.setManager(otherAccount, true);
  //     expect(await LCPoolAVv3.managers(otherAccount)).to.equal(true);
  //   });
  // });
  describe("deposit", function () {
    it("Should deposit", async function () {
      // this.timeout(100000);
      const {  LCPoolAVv3, otherAccount } = await loadFixture(deployLCaaveAndLedger);
      const token1 = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
      const token2 = "0xA700b4eB416Be35b2911fd5Dee80678ff64fF6C9";
      const info = { 
        account: otherAccount.address,
        pair: [token1, token2],
        meta: 100,
        basketId: 1000,
        token: token1,
        amount: 10000000
      };
      const mtoken = token2;
      const paths = [[], []];
      
      await LCPoolAVv3.connect(otherAccount).deposit(info, mtoken);
      // done();
    });
  });
  
});
