
var uploadOptions   = require('../configs/multer');
var uploadAvatar    = uploadOptions.multerAvatar;

module.exports = function(app) {

  var users = require('../controllers/user.controller.js');

  app.post('/users', uploadAvatar.single('avatar'), users.create);

  app.get('/users', users.findAll);

  app.get('/users/byWallet/:wallet', users.findByWallet);

  app.get('/users/:userId', users.findOne);

  app.put('/users/:userId', uploadAvatar.single('avatar'), users.update);

  app.delete('/users/:userId', users.delete);
};
