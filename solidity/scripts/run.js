const main = async () => {
    const immutableContractFactory = await hre.ethers.getContractFactory("Immutable");
    const immutableContract = await immutableContractFactory.deploy();
    await immutableContract.deployed();
    console.log("immutable has been deployed to:", immutableContract.address);
};

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});
