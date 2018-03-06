

if (process.env.ENVIRONMENT == "prod") {
    module.exports = {
        tokenAddress: "0x7218c57567fac42ec721b364588b7f72a59fa870",
        webserver: "http://yticons.co",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    module.exports = {
        tokenAddress: "0xdb42497254a99561f70705a3959c5a6eadce3ba6",
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

