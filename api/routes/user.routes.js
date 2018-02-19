
module.exports = function(app) {

  var notes = require('../controllers/user.controller.js');

  // Create a new Note
  app.post('/users', notes.create);

  // Retrieve all Notes
  app.get('/users', notes.findAll);

  // Retrieve a single Note with noteId
  app.get('/users/:userId', notes.findOne);

  // Update a Note with noteId
  app.put('/users/:userId', notes.update);

  // Delete a Note with noteId
  app.delete('/users/:userId', notes.delete);
};
