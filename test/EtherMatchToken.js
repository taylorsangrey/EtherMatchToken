var EtherMatchToken = artifacts.require("./EtherMatchToken.sol");

contract('EtherMatchToken', function(accounts) {
	it('sets the total supply upon deployment', function() {
		return EtherMatchToken.deployed().then(function(instance) {
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 900000000, 'sets the total supply to 900,000,000');
		});
	});
})