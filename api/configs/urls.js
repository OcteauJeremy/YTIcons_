

if (process.env.ENVIRONMENT == "prod") {
    module.exports = {
        tokenAddress: "0xc1d4a8b2639ddc2ab23f882b30f37904ad32f908",
        webserver: "http://163.172.142.44/",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    module.exports = {
        tokenAddress: "0xc99831cab3b8bb2a89c8bb7dfebfccab8f9a45f8",
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

