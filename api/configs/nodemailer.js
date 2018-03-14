const nodemailer = require('nodemailer');

var serverMailUrl = 'pro1.mail.ovh.net';
var portSmtp = 587;

module.exports.transporterHelp = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: serverMailUrl,
    port: portSmtp,
    secure: false,
    auth: {
        user: "help@yticons.co",
        pass: "vfK-UE8-a5y-faf"
    }
});

module.exports.transporterContact = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: serverMailUrl,
    port: portSmtp,
    secure: false,
    auth: {
        user: "contact@yticons.co",
        pass: "yLK-AMu-9ty-rZ9"
    }
});

module.exports.transporterNoReply = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: serverMailUrl,
    port: portSmtp,
    secure: false,
    auth: {
        user: "no-reply@yticons.co",
        pass: "pfK-Xs8-t5r-faf"
    }
});