module.exports = function (app) {

    var cards = require('../controllers/card.controller.js');

    app.post('/cards', cards.create);

    app.get('/cards/count', cards.getCount);

    app.get('/cards', cards.getByQuery);

    app.get('/cards/bounds', cards.getBoundsPrice);

    app.get('/cards/:cardId', cards.findOne);

    app.get('/cards/bySmartId/:smartId', cards.findBySmartId);

    app.put('/cards/:cardId', cards.update);

    app.delete('/cards/:cardId', cards.delete);
};
