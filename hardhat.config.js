require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
const PrivateKey = `${process.env.privateKey}`;
const InfuraId = process.env.infuraId;
const PolygonMainet = `${process.env.POLYGON_MAINNET}`;
module.exports = {
  defaultNetwork: "matic",
  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    // mumbai: {
    //   // Infura
    //   // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [privateKey],
    // },
    matic: {
      // Infura
      // url: PolygonMainet,
      url: "https://polygon-mainnet.g.alchemy.com/v2/6QzL2udYBWBYakq-VZ6UJLGZyXk1qLwi",
      accounts: [privateKey],
    },
  },

  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
