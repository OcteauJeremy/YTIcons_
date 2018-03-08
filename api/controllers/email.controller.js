var smtpTransport = require('../configs/nodemailer').transporterContact;
const URL = require('../configs/urls');
var request = require('request');

module.exports.sendFormContact = function (req, res) {

    if (!req.body.name && !req.body.email && !req.body.subject && !req.body.message && !req.body.recaptchaRes) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    var mailOptions = {
        to: 'contact@yticons.co',
        from: 'contact@yticons.co',
        subject: 'YTIcons Contact from: ' + req.body.name,
        text: '--------------\n' +
        'Subject: ' + req.body.subject + '\n' +
        'From: ' + req.body.name + '\n' +
        'Email: ' + req.body.email +
        '\n--------------\n\n' +
        'Content:\n\n' +
        req.body.message + '\n\n' +
        '--------------'
    };

    validCaptcha(req.body.recaptchaRes, function (valid) {
        if (!valid) {
            return res.status(400).send({message: "Are you a robot?"});
        }
        smtpTransport.sendMail(mailOptions, function (err) {
            if (err) {
                console.log('/!\\ MAIL not send to ' + req.body.email + ' from ' + req.body.name);
                console.log(err);
                return res.status(400).send({message: "Impossible to send mail"});
            }
            return res.status(200).send({message: 'Email successfully sent to user.'});
        });
    });
};

var validCaptcha = function (token, cb) {
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + URL.recaptchaPrivate + "&response=" + token;

    request(verificationUrl, function(error,response,body) {
        body = JSON.parse(body);
        if (body.success !== undefined && body.success == true) {
            cb(true);
            return ;
        }
        cb(false);
    });
};