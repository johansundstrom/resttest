'use strict';

var mongoose = require('mongoose'),
    Account = mongoose.model('Accounts');

exports.default = function(req, res) {
    res.send('<html><body><p>use <a href="http://localhost:3000/api/accounts/">/api/accounts/</a></p></body></html>');
}

exports.list_accounts = function(req, res) {
    Account.find({}, function(err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};


exports.create_account = function(req, res) {
    var new_account = new Account(req.body);
    new_account.save(function(err, account) {
        //console.log(req.body);  //debug
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
    Account.findOneAndUpdate({ _id: req.params.accountId }, req.body, { new: true }, function(err, account) {
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
        res.json({ message: 'raderat' });
    });
};