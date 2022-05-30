const main = async () => {
    const immutableContractFactory = await hre.ethers.getContractFactory("Immutable");
    const immutableContract = await immutableContractFactory.deploy();
    await immutableContract.deployed();
    console.log("immutable has been deployed to:", immutableContract.address);

    const waves = await immutableContract.getMessages();
    console.log('Num of messages:',waves);

    const postTxn = await immutableContract.postMessage();
    await postTxn.wait()

    const waves2 = await immutableContract.getMessages();
    console.log('Num of messages:', waves2);
};

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});
