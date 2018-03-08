const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    host: '212.47.252.22',
    // host: 'postfixadmin.yticons.co',
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