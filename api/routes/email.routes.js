module.exports = function(app) {

    var categories = require('../controllers/category.controller.js');

    app.get('/send', categories.findAll);

    app.post('/categories', tokenGuard.verifyToken, tokenGuard.isAdmin, categories.create);

};
