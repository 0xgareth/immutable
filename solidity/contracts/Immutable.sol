// SPDX-License-Identifier: UNLICENSED

import "hardhat/console.sol";

contract Immutable {
    
    // mapping (address => string) public messages;
    uint messages;

    constructor() {
        console.log("wagmi contract");
    }

    function postMessage() public {
        console.log('posting a message =]');
        messages += 1;
    }

    function getMessages() public view returns (uint) {
        return messages;
    }

}
