const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://etherscan.io/',
    defaultCommandTimeout: 10000,
  },
  env: {
    mainnet: 'https://api.etherscan.io/',
    goerli: 'https://api-goerli.etherscan.io/',
    kovan: 'https://api-kovan.etherscan.io/',
    rinkeby: 'https://api-rinkeby.etherscan.io/',
    ropsten: 'https://api-ropsten.etherscan.io/',
    sepolia: 'https://api-sepolia.etherscan.io/'
  }
});