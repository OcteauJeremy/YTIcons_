

if (process.env.ENVIRONMENT == "prod") {
    var protocol = "https://";
    module.exports = {
        port: "8443",
        tokenAddress: "0x9f88d1e0910426be3522bb9ef5ed65e5947a0ed3",
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
        tokenAddress: "0x2c21e87f7c3447b8404237bf506307acd948094d",
        secureSocket: protocol == "https://" ? true : false,
        webserver: "http://localhost:4200",
        // websocket: "wss://ropsten.infura.io/ws",
        websocket: "ws://localhost:8546",
        mongodb: "mongodb://jeremy:yticons2018LB@ds241658.mlab.com:41658/yticons",
        recaptchaPrivate: '6Ld_fkoUAAAAAG89zvHX8vV5wVWK8S_8O1GDCa4M'
    };
}

