const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const balance = await owner.getBalance();

    console.log("Deploying contracts with address: ", owner.address);
    console.log("balance: ", balance.toString());

    const immutableContractFactory = await hre.ethers.getContractFactory("Immutable");
    const immutableContract = await immutableContractFactory.deploy();
    await immutableContract.deployed();

    console.log("immutable deployed to: ", immutableContract.address);
};
  
main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});