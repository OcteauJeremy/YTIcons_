const nodemailer = require('nodemailer');

module.exports.transporterHelp = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: 'mail.yticons.co',
    port: 587,
    secure: false,
    auth: {
        user: "help@yticons.co",
        pass: "THyc8c8GVMgR4QtF"
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports.transporterContact = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: 'mail.yticons.co',
    port: 587,
    secure: false,
    auth: {
        user: "contact@yticons.co",
        pass: "ZrG\\:Tc,Q6AfBA5<"
    },
    tls: {
        rejectUnauthorized: false
    }
});