
module.exports = function(app) {

    var transactions = require('../controllers/transaction.controller.js');

    //app.post('/transactions-module', transactions-module.create);

    //app.get('/transactions-module', transactions-module.findAll);

    app.get('/transactions-module/last', transactions.getLastTransactions);

    app.get('/transactions-module/listen/:txHash', transactions.listenTx);

    //app.get('/transactions-module/:transactionId', transactions-module.findOne);
};
