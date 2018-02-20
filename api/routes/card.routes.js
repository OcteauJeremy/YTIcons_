
module.exports = function(app) {

  var cards = require('../controllers/card.controller.js');

  // Create a new Note
  app.post('/cards', cards.create);

  // Retrieve all Notes
  app.get('/cards', cards.findAll);

  // Retrieve a single Note with noteId
  app.get('/cards/:cardId', cards.findOne);

  app.get('/cards/BySmartId/:smartId', cards.findBySmartId);

  // Update a Note with noteId
  app.put('/cards/:cardId', cards.update);

  // Delete a Note with noteId
  app.delete('/cards/:cardId', cards.delete);
};
