var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    roles: [String],
    currency: String,
    avatar: String,
    token: String,
    wallet: {type: String}
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

module.exports = mongoose.model('User', UserSchema);


