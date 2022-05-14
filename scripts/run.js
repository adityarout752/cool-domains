const main = async () => {

    const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory('Domain');
    const domainContract = await domainContractFactory.deploy("sigma");
    await domainContract.deployed();
    console.log("Contract deployed to:", domainContract.address);
    console.log("Contract deployed by:", owner.address);
  
     // We're passing in a second variable - value. This is the moneyyyyyyyyyy
    let txn = await domainContract.register("aditya",{value: hre.ethers.utils.parseEther('1000')});
  await txn.wait();

  const domainAddress = await domainContract.getAddress("aditya");
  console.log("Owner of domain doom:", domainAddress);

  let balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  
  // // Trying to set a record that doesn't belong to me!
  // txn = await domainContract.connect(superCoder).setRecord("doom", "Haha my domain now!");
  // await txn.wait();

  

   try{
     txn = await domainContract.connect(superCoder).withdraw()
     await txn.wait();
   }catch(error){
    console.log("Could not rob contract because :");
  };

  let ownerBalance = await hre.ethers.provider.getBalance(owner.address)
  console.log("owner balance :",hre.ethers.utils.formatEther(ownerBalance))

   txn = await domainContract.connect(owner).withdraw()
   await txn.wait()

    balance = await hre.ethers.provider.getBalance(domainContract.address)
    ownerBalance=   await hre.ethers.provider.getBalance(owner.address)

    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
    console.log("owner balance :",hre.ethers.utils.formatEther(ownerBalance))





}
  
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