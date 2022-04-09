const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const MetaPhreshCoin = await hre.ethers.getContractFactory("MetaPhreshCoin");
  const metaPhreshCoin = await MetaPhreshCoin.deploy();
  await metaPhreshCoin.deployed();
  console.log("MetaPhreshCoin deployed to:", metaPhreshCoin.address);

  const MetaExchange = await hre.ethers.getContractFactory("MetaExchange");
  const metaExchange = await MetaExchange.deploy();
  await metaExchange.deployed();
  console.log("MetaExchange deployed to:", metaExchange.address);

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);

  let config = `
  export const metaPhreshCoinaddress = "${metaPhreshCoin.address}"
  export const metaExchangeaddress = "${metaExchange.address}"
  export const nftMarketplaceaddress = "${nftMarketplace.address}"
  `;

  let data = JSON.stringify(config);
  fs.writeFileSync("config.js", JSON.parse(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
