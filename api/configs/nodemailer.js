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
        pass: "jZC:X2%Lmt38WpRT&qp4(U@gBv]2PjS!}B*6$Ly6W:'*}CF:9[:t~:`\\r4^sfY3E"
    }
});

module.exports.transporterContact = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: serverMailUrl,
    port: portSmtp,
    secure: false,
    auth: {
        user: "contact@yticons.co",
        pass: "ktV##RkS%?'3=3n)@!Aa=/;@Kr2pqny<?4A8xUxS&8:4a;YGDayjT3s47a?h.\"Rb"
    }
});

module.exports.transporterNoReply = nodemailer.createTransport({
    // host: '212.47.252.22',
    host: serverMailUrl,
    port: portSmtp,
    secure: false,
    auth: {
        user: "no-reply@yticons.co",
        pass: ".r[pr<p}z\\+qg4v$^KC%Zs#5,3N-4Y/XNxQ?$~\\#n+eyK3=ZAQQ~WJn6'93TaW@("
    }
});