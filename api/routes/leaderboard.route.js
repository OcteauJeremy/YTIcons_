
module.exports = function(app) {

    var leaderboards = require('../controllers/leaderboard.controller.js');

    app.get('/leaderboards/bySubscribers/', leaderboards.findBySubscriber);

    app.get('/leaderboards/bySubscribers/:wallet', leaderboards.findBySubscriberAndWallet);

};
