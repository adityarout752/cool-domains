const main = async () => {

  const [owner, randomPerson] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory('Domain');
  const domainContract = await domainContractFactory.deploy("ninja");
  await domainContract.deployed();
  console.log("Contract deployed to:", domainContract.address);
  console.log("Contract deployed by:", owner.address);

   // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  let txn = await domainContract.register("aditya",{value: hre.ethers.utils.parseEther('0.1')});
await txn.wait();

const domainAddress = await domainContract.getAddress("aditya");
console.log("Owner of domain doom:", domainAddress);

const balance = await hre.ethers.provider.getBalance(domainContract.address);
console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
// // Trying to set a record that doesn't belong to me!
// txn = await domainContract.connect(randomPerson).setRecord("doom", "Haha my domain now!");
// await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();