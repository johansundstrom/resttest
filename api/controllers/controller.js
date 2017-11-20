'use strict';


var mongoose = require('mongoose'),
  Account = mongoose.model('Account');

exports.list_account = function(req, res) {
  Account.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_account = function(req, res) {
  var new_account = new Account(req.body);
  new_account.save(function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.read_account = function(req, res) {
  Account.findById(req.params.accountId, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.update_account = function(req, res) {
  Account.findOneAndUpdate({_id: req.params.accountId}, req.body, {new: true}, function(err, account) {
    if (err)
      res.send(err);
    res.json(account);
  });
};


exports.delete_account = function(req, res) {
  Account.remove({
    _id: req.params.accountId
  }, function(err, account) {
    if (err)
      res.send(err);
    res.json({ message: 'deleted' });
  });
};
