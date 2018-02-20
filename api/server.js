const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const configMongo = require('./configs/mongoDB');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

mongoose.connect(configMongo.url);
app.set('superSecret', configMongo.secret);

mongoose.connection.on('error', function() {
  console.log('Could not connect to the database. Exiting now...');
  process.exit();
});

var directoryRoutes = "./routes/";

// Modules
var authModule      = require(directoryRoutes + 'authentication.routes');

app.use(authModule.authRoutes);
require('./routes/user.routes')(app);
require('./routes/card.routes')(app);


mongoose.connection.once('open', function() {
  console.log("Successfully connected to the database mongo");

  app.use(morgan('dev'));
  app.listen(3000, function() {
    console.log('YTIcons API listening on 3000')
  });
});

