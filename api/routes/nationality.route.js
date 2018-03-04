var tokenGuard = require('../controllers/token.guard');

module.exports = function(app) {

    var nationalities = require('../controllers/nationality.controller.js');

    app.get('/nationalities', nationalities.findAll);

    app.post('/nationalities', tokenGuard.verifyToken, tokenGuard.isAdmin, nationalities.create);
};
