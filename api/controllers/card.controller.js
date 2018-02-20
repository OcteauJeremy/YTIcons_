var Card = require('../models/card.model');
var Type = require('../models/type.model');

exports.create = function (req, res) {
  if (!req.body.name || !req.body.image || !req.body.nationality || !req.body.nbSubscriber
    || !req.body.url || !req.body.description || !req.body.citation || !req.body.type || !req.body.id) {
    return res.status(400).send({message: "Wrong parameters"});
  }

  Type.findOne({
    name: req.body.type
  }, function (err, type) {
    if (!type) {
      return res.status(400).send({message: "Type doesn't exist."});
    }

    if (err) {
      console.log(err.message);
      return res.status(500).send({message: "Some error occurred while using mongoDB."});
    }

    var card = new Card();

    card.id = req.body.id;
    card.name = req.body.name;
    card.image = req.body.image;
    card.nationality = req.body.nationality;
    card.nbSubscribers = req.body.nbSubscribers;
    card.url = req.body.url;
    card.description = req.body.description;
    card.citation = req.body.citation;
    card.type = type;

    card.save(function (err, card) {
      if (err) {
        console.log(err.message);
        return res.status(500).send({message: "Some error occurred while creating the Card."});
      } else {
        return res.status(200).send(card);
      }
    });
  });
};

exports.findAll = function (req, res) {
  Card.find().populate('type').exec(function (err, cards) {
    if (err) {
      return res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      return res.status(200).send(cards);
    }
  });

};

exports.findOne = function (req, res) {
  Card.findById(req.params.cardId).populate('type').exec(function (err, card) {
    if (err) {
      return res.status(500).send({message: "Could not retrieve note with id " + req.params.cardId});
    } else {
      return res.status(200).send(card);
    }
  });
};

exports.findBySmartId = function (req, res) {
  if (!req.params.smartId) {
    return res.status(400).send({message: "Wrong parameters."});
  }

  Card.findOne({
    id: req.params.smartId
  }).populate('type').exec(function (err, card) {
    if (err) {
      return res.status(500).send({message: "Could not retrieve note with id " + req.params.cardId});
    } else {
      return res.status(200).send(card);
    }
  });
};

exports.update = function (req, res) {

  Card.findById(req.params.cardId).populate('type').exec(function (err, card) {
    if (err) {
      return res.status(500).send({message: "Could not retrieve note with id " + req.params.cardId});
    }

    if (!card) {
      return res.status(400).send({message: "Card doesn't exist."});
    }

    if (req.body.name) {
      card.name = req.body.name;
    }

    if (req.body.image) {
      card.image = req.body.image;
    }

    if (req.body.nationality) {
      card.nationality = req.body.nationality;
    }

    if (req.body.nbSubscribers) {
      card.nbSubscribers = req.body.nbSubscribers;
    }

    if (req.body.url) {
      card.url = req.body.url;
    }

    if (req.body.description) {
      card.description = req.body.description;
    }

    if (req.body.citation) {
      card.citation = req.body.citation;
    }


    var saveCard = function () {
      card.save(function (err, card) {
        if (err) {
          console.log(err.message);
          return res.status(500).send({message: "Some error occurred while creating the Card."});
        } else {
          return res.status(200).send(card);
        }
      });
    };

    if (req.body.type) {
      Type.findById(req.body.type._id, function (err, type) {
        if (!type) {
          return res.status(400).send({message: "Type doesn't exist."});
        }

        if (err) {
          console.log(err.message);
          return res.status(500).send({message: "Some error occurred while using mongoDB."});
        }
        card.type = type;
        saveCard();
      });
    } else {
      saveCard();
    }
  });
};

exports.delete = function (req, res) {
  Card.remove({_id: req.params.cardId}, function (err, card) {
    if (err) {
      res.status(500).send({message: "Could not delete note with id " + req.params.cardId});
    } else {
      res.status(200).send({message: "Card deleted successfully!"})
    }
  });
};
