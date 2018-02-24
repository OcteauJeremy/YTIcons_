
module.exports = function(app) {

    var youtubes = require('../controllers/youtube.controller.js');

    app.post('/channel', youtubes.getChannel);
};
