
let lendingPoolAddress = "0x398eC7346DcD622eDc5ae82352F02bE94C62d119";
let daiAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
let MintableERC20Factory = require("./types").MintableERC20Factory

await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x503828976D22510aad0201ac7EC88293211D23Da"],
});

user2 = await ethers.provider.getSigner("0x503828976D22510aad0201ac7EC88293211D23Da")
let contractGetters = require('./helpers/contracts-getters');
let lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
let dai = await MintableERC20Factory.connect( daiAddress, user2)
await dai.symbol()
let bal = await dai.balanceOf(user2._address)
bal.toString()
await dai.connect(user2).approve(lendingPool.address,'100000000000000000000000000000000000000000');
await lendingPool.connect(user2).deposit(dai.address, '1000000000000000000',user2.address,'0',{})

await lendingPool.connect(user0).borrow(daiAddress, '10000',1,'0',user0.address,{})

await lendingPool.connect(user0).withdraw(aaveAddress, '1000',user0.address)

await lendingPool.connect(user0).repay(daiAddress, '100',1,user0.address)
////////
/////
let lendingPoolAddress = "0xeF6fDd1c6e9A1aEEdBe07F8BeABa2a8F9455AECA";
let daiAddress = "0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7";
let aaveAddress = "0x5302E909d1e93e30F05B5D6Eea766363D14F9892";
let MintableERC20Factory = require("./types").MintableERC20Factory
let signers = await hre.ethers.getSigners()
let user0 = signers[0]
let contractGetters = require('./helpers/contracts-getters');
let lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
let dai = await MintableERC20Factory.connect( daiAddress, user0)
await dai.symbol()
await dai.connect(user0).mint('10000000000000000000000000');
let bal = await dai.balanceOf(user0.address)
bal.toString()
await dai.connect(user0).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user0).deposit(dai.address, '1000000000000000000',user0.address,'0',{})