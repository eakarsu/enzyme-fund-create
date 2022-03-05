
let lendingPoolAddress = "0x32AEb645166a380789F448E7928C22a586D50290";
let daiAddress = "0xFD6F7A6a5c21A3f503EBaE7a473639974379c351";
let aaveAddress = "0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7";
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

///second operation
let lendingPoolAddress = "0x32AEb645166a380789F448E7928C22a586D50290";
let daiAddress = "0xFD6F7A6a5c21A3f503EBaE7a473639974379c351";
let aaveAddress = "0xa6e99A4ED7498b3cdDCBB61a6A607a4925Faa1B7";
let MintableERC20Factory = require("./types").MintableERC20Factory

let signers = await hre.ethers.getSigners()
let user2 = signers[2]
let contractGetters = require('./helpers/contracts-getters');
let lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
let dai = await MintableERC20Factory.connect( daiAddress, user2)
await dai.symbol()
await dai.connect(user2).mint('10000000000000000000000000');
let bal = await dai.balanceOf(user2.address)
bal.toString()
await dai.connect(user2).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user2).deposit(dai.address, '1000000000000000000',user2.address,'0',{})

await lendingPool.connect(user0).borrow(daiAddress, '10000',1,'0',user0.address,{})

await lendingPool.connect(user0).withdraw(aaveAddress, '1000',user0.address)

await lendingPool.connect(user0).repay(daiAddress, '100',1,user0.address)