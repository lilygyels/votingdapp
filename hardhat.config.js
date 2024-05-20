require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const SEPOLIA_PRIVATE_KEY = "276329d2d78fd89b4f3b63afda907c98a027b5de1c99d337ca646d5cc54deeaa";

module.exports = {
  solidity: "0.8.0",
  networks: {
    SEPOLIA: {
      url: "https://eth-sepolia.g.alchemy.com/v2/6na4nDAVFDZuHatRSfWS_OZpqDskOet2",
      accounts: [`${SEPOLIA_PRIVATE_KEY}`],
    },
  },
};
