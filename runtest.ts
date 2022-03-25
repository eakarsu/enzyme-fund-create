
hre.ethers.provider = new ethers.providers.JsonRpcProvider(hre.ethers.provider.connection.url)
etherUserAddress=  "0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf";
daiUserAddress="0x6B175474E89094C44Da98b954EedeAC495271d0F";
provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
//provider = ethers.provider
await provider.send("hardhat_impersonateAccount", [etherUserAddress]);
const etherUser = provider.getSigner(etherUserAddress);
await provider.send("hardhat_impersonateAccount", [daiUserAddress]);
const daiUser = provider.getSigner(daiUserAddress);
await etherUser.sendTransaction({
    to: myaddress,
    value: ethers.utils.parseEther('100.0'),
});

let lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
let daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
let aaveAddress = "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9";
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

await lendingPool.connect(user0).borrow(daiAddress, '10000',1,'0',user0.address,{})

await lendingPool.connect(user0).withdraw(aaveAddress, '1000',user0.address)

await lendingPool.connect(user0).repay(daiAddress, '100',1,user0.address)
////////
/////
let lendingPoolAddress = "0x4E0C596bE5FE217cB80AeB4C47C72701DFF0F6BC";
let daiAddress = "0x0ed64d01D0B4B655E410EF1441dD677B695639E7";
let aaveAddress = "0x4bf010f1b9beDA5450a8dD702ED602A104ff65EE";
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