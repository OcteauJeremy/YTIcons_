

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0x00afb4723470347c83953ef410c3d7ca2cf4026d",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons"
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0x0892F2fDf81462C5422Ee153D84a2CD8dFc8C722",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons"
    };
}

