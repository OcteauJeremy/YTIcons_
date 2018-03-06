var User = require('../models/user.model');
var crypto = require('crypto');
var async = require('async');

exports.setNewPassword = function (req, res) {
    if (!req.body.oldPassword || !req.body.newPassword || !req.params.userId) {
        return res.status(400).send({message: "Wrong parameters."});
    }

    if (req.body.newPassword.length < 6) {
        return res.status(400).send({message: "Password too short."})
    }


    User.findById(req.params.userId).select('password username email roles currency avatar wallet token').exec(function (err, user) {
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

    async.waterfall([
        function(done) {
            crypto.randomBytes(20, function(err, buf) {
                var token = buf.toString('hex');
                done(err, token);
            });
        },
        function(token, done) {
            User.findOne( {$or: [{ email: req.params.name }, { username: req.params.name}]}, function(err, user) {
                if (!user) {
                    return res.status(400).send({message: "User doesn't exist."});
                }

                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

                user.save(function(err) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send({message: "Some error occurred while performing request."});
                    }
                    done(err, token, user);
                });
            });
        },
        function(token, user, done) {
            console.log('send mail to', user.email);
            done(user);
            // var smtpTransport = nodemailer.createTransport('SMTP', {
            //     service: 'SendGrid',
            //     auth: {
            //         user: '!!! YOUR SENDGRID USERNAME !!!',
            //         pass: '!!! YOUR SENDGRID PASSWORD !!!'
            //     }
            // });
            // var mailOptions = {
            //     to: user.email,
            //     from: 'passwordreset@demo.com',
            //     subject: 'Node.js Password Reset',
            //     text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            //     'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            //     'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            //     'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            // };
            // smtpTransport.sendMail(mailOptions, function(err) {
            //     req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
            //     done(err, 'done');
            // });
        }
    ], function (user) {
        console.log('Finally:', user.resetPasswordToken);
        return res.status(200).send({message: 'Email successfully sent to user.'});
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