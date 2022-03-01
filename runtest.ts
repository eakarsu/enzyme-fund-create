
let lendingPoolAddress = "0x4a72B75D148f5B74fad30DE360b3D955d10B54b2";
let daiAddress = "0x6C2d83262fF84cBaDb3e416D527403135D757892";
let aaveAddress = "0xFD6F7A6a5c21A3f503EBaE7a473639974379c351";
let MintableERC20Factory = require("./types").MintableERC20Factory

let signers = await hre.ethers.getSigners()
let user0 = signers[0]
let contractGetters = require('./helpers/contracts-getters');
let lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
let aave = await MintableERC20Factory.connect( aaveAddress, user0)
await aave.symbol()
await aave.connect(user0).mint('10000000000000000000000000');
let bal = await aave.balanceOf(user0.address)
bal.toString()
await aave.connect(user0).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user0).deposit(aave.address, '10000000000000',user0.address,'0',{})

await lendingPool.connect(user0).borrow(daiAddress, '1000000000000000000',1,'0',user0.address,{})