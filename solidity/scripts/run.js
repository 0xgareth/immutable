const main = async () => {
    const [owner, random] = await hre.ethers.getSigners()
    const immutableContractFactory = await hre.ethers.getContractFactory("Immutable");
    const immutableContract = await immutableContractFactory.deploy();
    await immutableContract.deployed();

    console.log("immutable has been deployed to:", immutableContract.address);
    console.log("owner is:", owner.address);

    let messages = await immutableContract.getMessages();
    console.log('Num of messages:',messages);

    const postTxn = await immutableContract.postMessage();
    await postTxn.wait()

    messages = await immutableContract.getMessages();
    console.log('Num of messages:', messages);

    const postTxn2 = await immutableContract.connect(random).postMessage();
    await postTxn2.wait()
    
    messages = await immutableContract.getMessages();
    console.log('Num of messages:', messages);
};

main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit(1);
});
