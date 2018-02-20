
module.exports = function(app) {

  var cards = require('../controllers/card.controller.js');

  app.post('/cards', cards.create);

  app.get('/cards', cards.findAll);

  app.get('/cards/:cardId', cards.findOne);

  app.get('/cards/BySmartId/:smartId', cards.findBySmartId);

  app.put('/cards/:cardId', cards.update);

  app.delete('/cards/:cardId', cards.delete);
};
