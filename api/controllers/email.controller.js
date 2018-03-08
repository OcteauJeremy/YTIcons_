var smtpTransport = require('../configs/nodemailer').transporterContact;
const URL = require('../configs/urls');

module.exports.sendFormContact = function (req, res) {

    if (!req.body.name && !req.body.email && !req.body.subject && !req.body.message) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    var mailOptions = {
        to: 'contact@yticons.co',
        from: 'contact@yticons.co',
        subject: 'YTIcons Contact mail from: ' + req.body.name,
        text: '--------------\n' +
        'Subject: ' + req.body.subject + '\n' +
        'From: ' + req.body.name + '\n' +
        'Email: ' + req.body.email +
        '\n--------------\n\n' +
        'Content:\n\n' +
        req.body.message + '\n\n' +
        '--------------'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
        if (err) {
            console.log('/!\\ MAIL not send to ' + req.body.email + ' from ' + req.body.name);
            console.log(err);
            return res.status(400).send({message: "Impossible to send mail"});
        }
        return res.status(200).send({message: 'Email successfully sent to user.'});
    });
};