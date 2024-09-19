import { Web3 } from "web3";

const wallet_address = "0xB76A1bD282a4CE8873c013c4e6DeA07907b58290";
const private_key =
  "0x7acdc6c24932aaad7c4e8f6b8df007231e2f53f1fdaee1d223e997e1a170125b";
const web3 = new Web3("https://rpc.testnet.fantom.network");

const balance = await web3.eth.getBalance(wallet_address);
const blockNumber = await web3.eth.getBlockNumber();
const chainId = await web3.eth.getChainId();
const transactionCount = await web3.eth.getTransactionCount(wallet_address);
const gasPrice = await web3.eth.getGasPrice(wallet_address);

console.log({
  Balance: balance,
  BlockNumber: blockNumber,
  ChainID: chainId,
  TxnCount: transactionCount,
  GasPrice: gasPrice,
});

const account = web3.eth.accounts.wallet.add(private_key);

console.log(account[0])

const tx = {
  from: account[0].address,
  to: "0x1C97398F2278929C333fd6DA9Bb66A952D9BAB20",
  value: web3.utils.toWei("0.001", "ether"),
};

const txnRecipt = await web3.eth.sendTransaction(tx, private_key);
console.log("txnRecipt", txnRecipt);
