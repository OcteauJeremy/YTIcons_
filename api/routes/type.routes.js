
module.exports = function(app) {

    var types = require('../controllers/type.controller.js');

    app.get('/types', types.findAll);
};
