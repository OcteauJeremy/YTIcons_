var Type = require('../models/type.model');
var Card = require('../models/card.model');
const mongoose = require('mongoose');
const configMongo = require('../configs/mongoDB');
var youtube = require('../configs/youtube');
var google = require('googleapis');
var service = google.youtube('v3');


function updateYoutubers(types) {
    const   cursor = Card.find().cursor();
    var     originType = null;

    types.forEach(function(type) {
        if (type.name == 'origin') {
            originType = type;
        }
    });

    function next(promise) {
        promise.then(function(doc) {
            if (doc) {
                if (doc.type.toString() != originType._id.toString()) {

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

                            doc.nbSubscribers = parseInt(channel.statistics.subscriberCount);
                            doc.nbVideos = parseInt(channel.statistics.videoCount);
                            doc.nbViews = parseInt(channel.statistics.viewCount);
                            doc.description = channel.snippet.description;
                            // console.log('--- ', doc.name, ' ---');
                            // console.log('nbSubscribers', doc.nbSubscribers, parseInt(channel.statistics.subscriberCount));
                            // console.log('nbVideos', doc.nbVideos, parseInt(channel.statistics.videoCount));
                            // console.log('nbViews', doc.nbViews, parseInt(channel.statistics.viewCount));
                            // console.log('description', doc.description, parseInt(channel.snippet.description));

                            doc.save(function (err) {
                               if (err) {
                                   console.log('Error:', err);
                               }
                                console.log('Card ' + doc.id + ' (' + doc._id + ') updated. --> ' + doc.name);
                                next(cursor.next());
                            });
                        })
                    });

                } else {
                    next(cursor.next());
                }
            } else {
                process.exit();
            }
        });
    }

    next(cursor.next());
}

function main() {
    Type.find().exec(function (err, types) {
        if (err) {
            console.log(err);
            return ;
        }
        updateYoutubers(types);
    })
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


