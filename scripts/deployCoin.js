// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const ShitCoin = await hre.ethers.getContractFactory("ShitCoin");
  const shitCoin = await ShitCoin.deploy("ShitCoin", "SC");

  await shitCoin.deployed();

  await shitCoin.transfer('0xd7F0CC87a403CBd7Bd06b44c7B68e93b98761005', 200)

  await shitCoin.approve("0xDf8fc70592cd76d6Eb1D82e8cf37AE1Bf2C0ff12", 200)

  console.log("shitCoin deployed to:", shitCoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
