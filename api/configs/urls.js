

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
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0xe8E5DaCFC45e16eD9dC4BBBf933a1860f3cDfDeE",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://localhost:8546",
        mongodb: "mongodb://localhost:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
}

