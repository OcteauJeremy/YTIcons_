var uploadOptions   = require('../configs/multer');
var uploadYoutuber    = uploadOptions.multerYoutuber;

module.exports = function (app) {

    var cards = require('../controllers/card.controller.js');

    app.post('/cards/images/:cardId', uploadYoutuber.single('image'), cards.setImage);

    app.post('/cards', cards.create);

    app.get('/cards/count', cards.getCount);

    app.get('/cards/admin', cards.getByQueryAdmin);

    app.get('/cards', cards.getByQuery);

    app.get('/cards/bounds', cards.getBoundsPrice);

    app.get('/cards/byWallet/:wallet', cards.findByWallet);

    app.get('/cards/:cardId', cards.findOne);

    app.get('/cards/bySmartId/:smartId', cards.findBySmartId);

    app.put('/cards/:cardId', cards.update);

    app.delete('/cards/:cardId', cards.delete);
};
