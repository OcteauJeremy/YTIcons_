const mongoose = require('mongoose');
const configMongo = require('../configs/mongoDB');
const autoIncrement = require('mongoose-auto-increment');
var youtube = require('../configs/youtube');
var google = require('googleapis');
var service = google.youtube('v3');
var https = require('https');
var fs = require('fs');
var path = require('path');

autoIncrement.initialize(mongoose.connection);

var Type = require('../models/type.model');
var Card = require('../models/card.model');

function downloadYoutuber(types) {
    const   cursor = Card.find().cursor();

    function next(promise) {
        promise.then(function(doc) {
            if (doc) {
                var optionRequest = {
                    part: 'snippet,statistics'
                };

                var splitUrl = doc.url.split('/');
                if (doc.url.indexOf("/user/") > -1) {
                    optionRequest.forUsername = splitUrl[splitUrl.indexOf('user') + 1];
                } else if (doc.url.indexOf("/channel/") > -1) {
                    optionRequest.id = splitUrl[splitUrl.indexOf('channel') + 1];
                } else {
                    console.log('Error: wrong url for ', doc._id);
                }

                youtube(function (auth) {
                    optionRequest.auth = auth;

                    service.channels.list(optionRequest, function (err, response) {
                        if (err) {
                            console.log("Some error occurred while retrieving youtube api.");
                        }

                        var channels = response.items;
                        if (channels.length == 0) {
                            console.log("Channel url invalid.");
                            return ;
                        }

                        var channel = channels[0];

                        var imageName = doc.image.split("/")[2];
                        var pathFile = "../ressources/youtuber/images/" + imageName;

                        fs.closeSync(fs.openSync(__dirname + "/" + pathFile, 'w'));

                        var file = fs.createWriteStream(__dirname + "/" +pathFile);
                        https.get(channel.snippet.thumbnails.medium.url, function(response) {
                            response.pipe(file);
                            file.on('finish', function() {
                                console.log(doc.name + " downloaded. (" + imageName + ")");
                                next(cursor.next());
                                file.close();
                            });
                        });
                    })
                });
            } else {
                process.exit();
            }
        });
    }

    next(cursor.next());
}

function main() {
    downloadYoutuber();
}

mongoose.connection.on('error', function () {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database mongo");
    main();
});
mongoose.connect(configMongo.url);


