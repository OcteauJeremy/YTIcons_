

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0x990c2463C7C4DCb435948E3110006F352dA8E666",
        secureSocket: protocol == "https://" ? true : false,
        webserver: protocol + "yticons.co",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://yticons-parity:8546",
        mongodb: "mongodb://yticons:nVusaLU6rc3thMWuQ4x8uzbdNS7LPwNqmSVzawdqZ56KJDdMP4TyFmZ6tBMB3SjT@yticons-mongo:27017/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M',
        blockSC: 5329888
    };
} else {
    var protocol = "http://";
    module.exports = {
        port: "6969",
        tokenAddress: "0x84BeC8248c723f92d7290b073497aD90144088A4",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://localhost:8546",
        // mongodb: "mongodb://localhost:27017/yticons",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M',
        blockSC: 2909279
    };
}

