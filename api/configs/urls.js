

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        tokenAddress: "0x0551ddc4460e09cc30bec37ef73a8b9739dc179a",
        webserver: protocol + "yticons.co",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    var protocol = "http://";
    module.exports = {
        tokenAddress: "0x10207693450fa18527f73d71d52f6c016d8353fa",
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

