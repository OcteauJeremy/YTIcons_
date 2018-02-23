
var youtube = require('../configs/youtube');
var google = require('googleapis');
var service = google.youtube('v3');

exports.getChannel = function (req, res) {

    if (!req.body.url) {
        return res.status(400).send({message: "You need to provide the channel's url."});
    }

    var optionRequest = {
        part: 'snippet,contentDetails,contentOwnerDetails,statistics,localizations'
    };

    var splitUrl = req.body.url.split('/');
    if (req.body.url.indexOf("/user/") > -1) {
        optionRequest.forUsername = splitUrl[splitUrl.indexOf('user') + 1];
    } else if (req.body.url.indexOf("/channel/") > -1) {
        optionRequest.id = splitUrl[splitUrl.indexOf('channel') + 1];
    } else {
        return res.status(400).send({message: "Channel url invalid."});
    }

    youtube(function (auth) {
        optionRequest.auth = auth;

        service.channels.list(optionRequest, function (err, response) {
            if (err) {
                return res.status(400).send({message: "Some error occurred while retrieving youtube api."});
            }

            var channels = response.items;
            if (channels.length == 0) {
                return res.status(400).send({message: "Channel url invalid."});
            }
            return res.status(200).send(channels[0]);
        })
    });
};