
if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0xB103688E79a414FAb39DAc503021F98FeA2ca858",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://yticons-parity:8546",
        mongodb: "mongodb://yticons:nVusaLU6rc3thMWuQ4x8uzbdNS7LPwNqmSVzawdqZ56KJDdMP4TyFmZ6tBMB3SjT@yticons-mongo:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M',
        blockSC: 5305504
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0xdD97d06B1EA562a7dFc3cD7311c67720394B7b1A",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://localhost:8546",
        mongodb: "mongodb://localhost:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M',
        blockSC: 2909279
    };
}

