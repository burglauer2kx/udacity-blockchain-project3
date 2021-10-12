const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "3408f1d3449a4a1c941b7db67abd57c2";
//
// const fs = require('fs');
const mnemonic = '...'; //fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
	rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infuraKey);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
	}
  },
  compilers: {
    solc: {
      // version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};