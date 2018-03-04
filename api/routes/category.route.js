var tokenGuard = require('../controllers/token.guard');

module.exports = function(app) {

    var categories = require('../controllers/category.controller.js');

    app.get('/categories', categories.findAll);

    app.post('/categories', tokenGuard.verifyToken, tokenGuard.isAdmin, categories.create);

};
