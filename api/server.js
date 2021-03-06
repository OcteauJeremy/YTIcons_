const express = require('express');
const fs = require("fs");
const app =  module.exports.appServer = express();
const bodyParser = require('body-parser');
const configMongo = require('./configs/mongoDB');
const URL = require('./configs/urls');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// var corsOptions = {
//     origin: URL.webserver,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));
// app.use( function(req, res, next){
//     res.header("Access-Control-Allow-Origin", URL.webserver);
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept. x-access-token");
    next();
});

app.use(compression());

mongoose.connection.on('error', function (err) {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

mongoose.connect(configMongo.url);

app.set('superSecret', configMongo.secret);

var directoryRoutes = "./routes/";

// Modules
var authModule = require(directoryRoutes + 'authentication.routes');

require('./configs/youtube');

app.use(authModule.authRoutes);
require('./routes/user.routes')(app);
require('./routes/card.routes')(app);
require('./routes/type.routes')(app);
require('./routes/transaction.route')(app);
require('./routes/nationality.route')(app);
require('./routes/category.route')(app);
require('./routes/youtube.route')(app);
require('./routes/leaderboard.route')(app);
require('./routes/password.routes')(app);
require('./routes/email.routes')(app);

// Static access
app.use('/avatar', express.static(__dirname + '/ressources/avatars/default'));
app.use('/avatar', express.static(__dirname + '/ressources/avatars/user'));
app.use('/youtuber', express.static(__dirname + '/ressources/youtuber/images'));

app.use(function (err, req, res, next) {
    if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).send({message: 'The file you tried to upload is too big.' });
    }

    if (err.code === 'ERROR_TYPE_IMAGE') {
        return res.status(400).send({message: err.message });
    }
    // Handle any other errors
});

var server;
if (URL.secureSocket) {
    var creditentials = {
        key: fs.readFileSync('./ressources/token/privkey.pem'),
        cert: fs.readFileSync('./ressources/token/cert.pem')
    };

    server = require('https').createServer(creditentials, app);
} else {
    server = require('http').createServer(app)
}

module.exports.serverExpress = server;

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database mongo");
    // Load SC listeners
    server.listen(URL.port, function () {
        require('./controllers/web3.controller');
        console.log('YTIcons API listening on ' + URL.port)
    });
});

