var uploadOptions   = require('../configs/multer');
var uploadYoutuber    = uploadOptions.multerYoutuber;
var tokenGuard = require('../controllers/token.guard');

module.exports = function (app) {

    var cards = require('../controllers/card.controller.js');

    app.post('/cards/images/:cardId', tokenGuard.verifyToken, tokenGuard.isAdmin, uploadYoutuber.single('image'), cards.setImage);

    app.post('/cards', tokenGuard.verifyToken, tokenGuard.isAdmin, cards.create);

    app.get('/cards/count', cards.getCount);

    app.get('/cards/admin', tokenGuard.verifyToken, tokenGuard.isAdmin, cards.getByQueryAdmin);

    app.get('/cards', cards.getByQuery);

    app.get('/cards/bounds', cards.getBoundsPrice);

    app.get('/cards/byWallet/:wallet', cards.findByWallet);

    app.get('/cards/:cardId', cards.findOne);

    app.get('/cards/bySmartId/:smartId', cards.findBySmartId);

    app.put('/cards/:cardId', tokenGuard.verifyToken, tokenGuard.isAdmin, cards.update);

    //app.delete('/cards/:cardId', VerifyToken, cards.delete);
};
