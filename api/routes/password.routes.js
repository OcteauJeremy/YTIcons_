var tokenGuard = require('../controllers/token.guard');

module.exports = function(app) {

    var passwords = require('../controllers/password.controller.js');

    app.post('/newPassword/:userId', tokenGuard.verifyToken, passwords.setNewPassword);

    app.get('/forgotPassword/:name', passwords.forgotPassword);

    app.post('/resetPassword/:token', passwords.resetPassword);
};
