

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0x8f85bd8b06be6bc138b2aa409ab07f4e9a9ee32a",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://yticons-parity:8546",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0xbc01a29f14e73aaf0cdc7273ddbe6d3048d16462",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://localhost:8546",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
}

