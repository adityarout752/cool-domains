require("@nomiclabs/hardhat-waffle");
const dotenv =require("dotenv");
dotenv.config();
// 0x42E44F44a3b8537c265e77BF05193014aFc2a9c6

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
