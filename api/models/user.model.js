var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uploadOptions   = require('../configs/multer');

var UserSchema = mongoose.Schema({
    username: String,
    email: {type: String, select: false},
    password: {type: String, select: false},
    roles: [String],
    currency: String,
    avatar: String,
    token: {type: String, select: false},
    wallet: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {
    timestamps: true
});

UserSchema.methods.safeObj = function () {
  var obj = {
      _id: this._id,
      username: this.username,
      email: this.email,
      roles: this.roles,
      currency: this.currency,
      avatar: this.avatar,
      wallet: this.wallet,
      token: this.token,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
  };
  return obj;
};

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


