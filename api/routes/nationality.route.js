
module.exports = function(app) {

    var nationalities = require('../controllers/nationality.controller.js');

    app.get('/nationalities', nationalities.findAll);

    app.post('/nationalities', nationalities.create);

};
