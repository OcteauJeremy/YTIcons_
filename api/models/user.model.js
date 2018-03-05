var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uploadOptions   = require('../configs/multer');

var UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [String],
    currency: String,
    avatar: String,
    token: String,
    wallet: String,
    token: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {
    timestamps: true
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.initValues = function() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.roles = ["user"];
    this.currency  = "ETH";
    this.avatar = uploadOptions.pathAvatarUrl + '/anonymous.png';
    this.token = "";
    this.wallet = "";
};

module.exports = mongoose.model('User', UserSchema);


