
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

module.exports = {
    multerAvatar: multer({
        storage: storageAvatar,
        limits: {
            fileSize: 1024 * 512
        }
    }),
    pathAvatarUpload: __dirname + '/../ressources/avatars/user',
    pathAvatarUrl: '/avatar'
};