const nodemailer = require('nodemailer');

module.exports.transporter = nodemailer.createTransport({
    host: 'mail.yticons.co',
    port: 587,
    secure: false,
    auth: {
        user: "help@yticons.co",
        pass: "THyc8c8GVMgR4QtF"
    }
});