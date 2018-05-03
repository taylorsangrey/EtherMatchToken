var EtherMatchToken = artifacts.require("./EtherMatchToken.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherMatchToken);
};
