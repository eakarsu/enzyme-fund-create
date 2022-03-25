
hre.ethers.provider = new ethers.providers.JsonRpcProvider(hre.ethers.provider.connection.url)
provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
MintableERC20Factory = require("./types").MintableERC20Factory
contractGetters = require('./helpers/contracts-getters');
lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
aaveAddress = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9";
daiEtherMainnetUser="0xE78388b4CE79068e89Bf8aA7f218eF6b9AB0e9d0"
yearnVaultGuardianAddress="0x846e211e8ba920B353FB717631C015cf04061Cc9"
yearnVaultGovernanceAddress="0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"

await provider.send("hardhat_impersonateAccount", [yearnVaultGuardianAddress]);
yearnVaultGuardian = provider.getSigner(yearnVaultGuardianAddress);

await provider.send("hardhat_impersonateAccount", [yearnVaultGovernanceAddress]);
yearnVaultGovernance = provider.getSigner(yearnVaultGovernanceAddress);

//Unlock yearn vault
lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
aaveAddress = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9";
daiEtherMainnetUser="0xE78388b4CE79068e89Bf8aA7f218eF6b9AB0e9d0"
yearnVaultGuardianAddress="0x846e211e8ba920B353FB717631C015cf04061Cc9"
yearnVaultGovernanceAddress="0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52"
await newIv.connect(yearnVaultGovernance).token()
await newIv.connect(yearnVaultGovernance).pricePerShare()
await newIv.connect(yearnVaultGovernance).setEmergencyShutdown(false)
//set deposit limit.
await newIv.connect(yearnVaultGovernance).setDepositLimit("23561429660698088586937600000")
await newIv.connect(yearnVaultGovernance).availableDepositLimit()

signers = await hre.ethers.getSigners()
user0 = signers[0]
await provider.send("hardhat_impersonateAccount", [daiEtherMainnetUser]);
daiUser = provider.getSigner(daiEtherMainnetUser);
daiUser.address=daiUser._address
await daiUser.sendTransaction({
    to: user0.address,
    value: ethers.utils.parseEther('100.0'),
});
yearnVaultGuardian.address = yearnVaultGuardian._address
await daiUser.sendTransaction({
    to: yearnVaultGovernance.address,
    value: ethers.utils.parseEther('100.0'),
});


lpc = await contractGetters.getLendingPoolConfiguratorProxy()
await lpc.setPoolPause(false)

dai = await MintableERC20Factory.connect(daiAddress, daiUser)
await dai.symbol()
await dai.transfer(user0.address,"100000000000000000")
bal = await dai.balanceOf(user0.address)
bal.toString()
lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
await dai.connect(user0).approve(lendingPool.address,'100000000000000000000000000000000000000000');
await lendingPool.connect(user0).deposit(dai.address, '100000000000000000',user0.address,'0',{})

///second operation
lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
daiAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
aaveAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
MintableERC20Factory = require("./types").MintableERC20Factory

signers = await hre.ethers.getSigners()
user2 = signers[2]
contractGetters = require('./helpers/contracts-getters');
lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
dai = await MintableERC20Factory.connect( daiAddress, user2)
await dai.symbol()
await dai.connect(user2).mint('10000000000000000000000000');
bal = await dai.balanceOf(user2.address)
bal.toString()
await dai.connect(user2).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user2).deposit(dai.address, '1000000000000000000',user2.address,'0',{})

await lendingPool.connect(user0).borrow(daiAddress, '10000',1,'0',user0.address,{})

await lendingPool.connect(user0).withdraw(aaveAddress, '1000',user0.address)

await lendingPool.connect(user0).repay(daiAddress, '100',1,user0.address)
////////
/////
lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
daiAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
aaveAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
MintableERC20Factory = require("./types").MintableERC20Factory
signers = await hre.ethers.getSigners()
user0 = signers[0]
contractGetters = require('./helpers/contracts-getters');
lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
dai = await MintableERC20Factory.connect( daiAddress, user0)
await dai.symbol()
await dai.connect(user0).mint('10000000000000000000000000');
bal = await dai.balanceOf(user0.address)
bal.toString()
await dai.connect(user0).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user0).deposit(dai.address, '1000000000000000000',user0.address,'0',{})