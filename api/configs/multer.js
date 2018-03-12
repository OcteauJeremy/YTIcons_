
const multer    = require('multer');
const mime      = require('mime');
const fs        = require('fs-extra');

var storageAvatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../ressources/avatars/user')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
    }
});

var storageYoutuber = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../ressources/youtuber/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
    }
});

module.exports = {
    multerAvatar: multer({
        storage: storageAvatar,
        fileFilter: function (req, file, cb) {
            console.log(file.originalname);
            if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
                var err = new Error('Your picture\'s size is too large, please try with a smaller one.');
                err.code = 'ERROR_TYPE_IMAGE';
                return cb(err);
            }
            cb(null, true);
        },
        limits: {
            fileSize: 1024 * 512
        }
    }),
    pathAvatarUpload: __dirname + '/../ressources/avatars/user',
    pathAvatarUrl: '/avatar',
    multerYoutuber: multer({
        storage: storageYoutuber,
        limits: {
            fileSize: 1024 * 1024
        }
    }),
    pathYoutuberUpload: __dirname + '/../ressources/youtuber/images',
    pathYoutuberUrl: '/youtuber'
};