

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0xd7c9389152dfc3135217fa82755ff155e0aa84c5",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0x5491d7FefDb905C05d614C0dc9E1754287096fC0",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

