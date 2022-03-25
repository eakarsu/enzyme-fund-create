
let lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
let daiAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
let aaveAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
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

//await lendingPool.connect(user2).borrow(dai.address, '1',1,'0',user2.address,{})