//https://eth-goerli.g.alchemy.com/v2/MtFxIh_hRjU3jltrgMRgN3DNuydyp5Jk

require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goreli:{
      url: "https://eth-goerli.g.alchemy.com/v2/MtFxIh_hRjU3jltrgMRgN3DNuydyp5Jk",
      accounts: ['9b77d8733b45789bd5d3201656593bb8627380e52068cd02bdd3a7745f27ee45']
    }
  }
};