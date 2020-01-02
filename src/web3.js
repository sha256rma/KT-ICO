import Web3 from 'web3';

let web3;

//If we have metamask installed (which gives us access to the blockchain)
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

    //A new instance of Web3
    web3 = new Web3(window.web3.currentProvider);
    console.log("MetaMask is installed");

} else {



}

export default web3;