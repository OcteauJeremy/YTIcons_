module.exports = function(app) {

    var emails = require('../controllers/email.controller.js');

    app.post('/sendFormContact', emails.sendFormContact);
};
