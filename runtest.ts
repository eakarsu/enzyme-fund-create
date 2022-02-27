
let lendingPoolAddress = "0x140c9Cd4905639ace2fA761Bfb8140DB23dcd001";
let daiAddress = "0x01c1DeF3b91672704716159C9041Aeca392DdFfb";
let aaveAddress = "0x02b0B4EFd909240FCB2Eb5FAe060dC60D112E3a4";
const MintableERC20Factory = require("./types").MintableERC20Factory

const signers = await hre.ethers.getSigners()
const user0 = signers[0]
const user1 = signers[1]
const contractGetters = require('./helpers/contracts-getters');
const lendingPool = await contractGetters.getLendingPool(lendingPoolAddress)
const aave = await MintableERC20Factory.connect( aaveAddress, user0)
await aave.symbol()
await aave.connect(user0).mint('10000000000000000000000000');
const bal = await aave.balanceOf(user0.address)
bal.toString()
await aave.connect(user0).approve(lendingPool.address,'100000000000000000000000000000000000000000');

await lendingPool.connect(user0).deposit(aave.address, '10000000000000',user0.address,'0',{})

//await lendingPool.connect(user0).borrow(dai.address, '1',1,'0',user0.address,{})