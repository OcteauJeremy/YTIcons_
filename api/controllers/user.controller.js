
var User = require('../models/user.model');

exports.create = function(req, res) {
  if(!req.body.username || !req.body.email || !req.body.password || !req.body.wallet) {
    return res.status(400).send({message: "User can not be empty"});
  }

  var user = new User();

  user.username = req.body.username;
  user.email = req.body.email;
  user.wallet = req.body.wallet;
  user.password = user.generateHash(req.body.password);

  user.save(function(err, user) {
    if(err) {
      console.log(err.message);
      return res.status(500).send({message: "Some error occurred while creating the User."});
    } else {
      return res.status(200).send(user);
    }
  });
};

exports.findAll = function(req, res) {
  User.find(function(err, users){
    if(err) {
      return res.status(500).send({message: "Some error occurred while retrieving notes."});
    } else {
      return res.status(200).send(users);
    }
  });

};

exports.findOne = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if(err) {
      return res.status(500).send({message: "Could not retrieve note with id " + req.params.userId});
    } else {
      return res.status(200).send(user);
    }
  });
};

exports.update = function(req, res) {

  if(!req.body.wallet) {
    return res.status(400).send({message: "User wallet can not be empty"});
  }

  User.findById(req.params.userId, function(err, user) {
    if(err) {
      return res.status(500).send({message: "Could not find a note with id " + req.params.userId});
    }

    user.wallet = req.body.wallet;

    user.save(function(err, data){
      if(err) {
        return res.status(500).send({message: "Could not update note with id " + req.params.userId});
      } else {
        return res.status(200).send(data);
      }
    });
  });
};

exports.delete = function(req, res) {
  User.remove({_id: req.params.userId}, function(err, user) {
    if(err) {
      res.status(500).send({message: "Could not delete note with id " + req.params.userId});
    } else {
      res.status(200).send({message: "User deleted successfully!"})
    }
  });
};
