
module.exports = function(app) {

    var transactions = require('../controllers/transaction.controller.js');

    app.post('/transactions', transactions.create);

    app.get('/transactions', transactions.findAll);

    app.get('/transactions/last', transactions.getLastTransactions);

    app.get('/transactions/:transactionId', transactions.findOne);
};
