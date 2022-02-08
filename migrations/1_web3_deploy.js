var AndreyWeb3MintGas = artifacts.require("./AndreyWeb3MintGas.sol");
module.exports = function(deployer) {
	deployer.deploy(AndreyWeb3MintGas, "/api/v1/metadata/");
}
