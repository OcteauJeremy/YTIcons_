
module.exports = function(app) {

    var categories = require('../controllers/category.controller.js');

    app.get('/categories', categories.findAll);

    app.post('/categories', categories.create);

};
