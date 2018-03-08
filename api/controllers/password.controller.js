var User = require('../models/user.model');
var crypto = require('crypto');
var smtpTransport = require('../configs/nodemailer').transporterHelp;
const URL = require('../configs/urls');

exports.setNewPassword = function (req, res) {
    if (!req.body.oldPassword || !req.body.newPassword || !req.params.userId) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    if (req.body.newPassword.length < 6) {
        return res.status(400).send({message: "Password too short."})
    }


    User.findById(req.params.userId).select('_id password username email roles currency avatar wallet token createdAt updatedAt').exec(function (err, user) {
        if (err) {
            console.log(err.message);
            return res.status(400).send({message: "Some error occurred while performing request."});
        }

        if (!user) {
            return res.status(400).send({message: "User doesn't exist."});
        }

        if (req.currentUser._id.toString() != user._id.toString()) {
            return res.status(403).send({ auth: false, message: 'Non authorized.' });
        }

        if (user.validPassword(req.body.oldPassword)) {
            user.password = user.generateHash(req.body.newPassword);
            user.save(function (err) {
                if (err) {
                    console.log(err.message);
                    return res.status(400).send({message: "Some error occurred while performing request."});
                }
                return res.status(200).send({message: "New password set."});
            })
        } else {
            return res.status(400).send({message: "Old password doesn't match."})
        }
    });

};


exports.forgotPassword = function (req, res) {
    if (!req.params.name) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        User.findOne({$or: [{email: req.params.name}, {username: req.params.name}]}).select('email').exec(function (err, user) {
            if (!user) {
                return res.status(400).send({message: "User doesn't exist."});
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

            user.save(function (err) {
                if (err) {
                    console.log(err);
                    return res.status(400).send({message: "Some error occurred while performing request."});
                }
                var mailOptions = {
                    to: user.email,
                    from: 'help@yticons.co',
                    subject: 'YTIcons Password Reset',
                    text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    URL.webserver + '/lost-password/' + token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
                };
                smtpTransport.sendMail(mailOptions, function (err) {
                    if (err) {
                        console.log('/!\\ MAIL not send to ' + user.email + ' with token: ' + user.resetPasswordToken);
                        console.log(err);
                        return res.status(400).send({message: "Impossible to send mail"});
                    }
                    console.log('Finally:', user.resetPasswordToken);
                    return res.status(200).send({message: 'Email successfully sent to user.'});
                });
            });
        });
    });
};

exports.resetPassword = function(req, res) {
    if (!req.body.password) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    if (req.body.password.length < 6) {
        return res.status(400).send({message: "Password too short."})
    }

    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}}).exec(function(err, user) {
        if (!user) {
            return res.status(400).send({message: "Token doesn't exist."});
        }

        user.password = user.generateHash(req.body.password);
        user.resetPasswordExpires = undefined;
        user.resetPasswordToken = undefined;

        user.save(function(err) {
            if (err) {
                console.log(err);
                return res.status(400).send({message: "Some error occurred while performing request."});
            }
            return res.status(200).send({message: "Password has been changed."});
        });
    });
};