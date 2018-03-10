

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0x6b60b0d656b176719cd72bc0a731dd373083cb23",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        // websocket: "wss://socket.etherscan.io/wshandler",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://yticons:SPy55g47Q7bTstN6@yticons-mongo:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0x3ca3ffcd681d92783a3a1233b98bf44bd6523e28",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://socket.etherscan.io/wshandler",
        websocket: "wss://ropsten.infura.io/ws",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
}

