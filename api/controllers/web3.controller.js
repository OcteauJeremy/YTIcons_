var Web3 = require('web3');
const tokenAbi = require('../ressources/token/tokenContract.json');
const tokenAddress = '0x305C0325C8652eb114251080c56020924055C8e2';

// https://mainnet.infura.io/86DXX3VJr4phf8eKiPUM
// var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://ropsten.infura.io/86DXX3VJr4phf8eKiPUM'));
var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8546'));



// var tokenContract = web3.eth.contract(tokenAbi).at(tokenAddress);
//
// var purchaseEvent = tokenContract.YTIconSold;
//
// purchaseEvent.watch(function (err, res) {
//     console.log('yo', err, res);
// });

web3.eth.net.getId().then(function (id) {
    console.log('ID network chain', id);
});

var tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);

tokenContract.events.allEvents({fromBlock: 'latest'}, function (err, res) {
   console.log('------ event', err, res);
});

// tokenContract.once('YTIconSold', function (err, event) {
//     console.log(err, event);
// });
//
tokenContract.events.YTIconSold({
    fromBlock: 'latest'
}, function(error, event) {
    if (err) {
        console.log(err);
        return ;
    }
    var result = event.returnValues;

    Card.findB
    console.log('event', event);
});


