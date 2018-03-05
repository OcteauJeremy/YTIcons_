

if (process.env.ENVIRONMENT == "prod") {
    module.exports = {
        tokenAddress: "0x5fcd445af16c64809b3c0167d96c417cc2633502",
        webserver: "http://http://163.172.142.44/",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    module.exports = {
        tokenAddress: "0x2141f457eb3b345f6cbec4c24cf256c806e37015",
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

