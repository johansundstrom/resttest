'use strict';

module.exports = function(app) {
    var account = require('../controllers/controller'); //modulimport

    // Account Routes
    app.route('/')
        .get(account.default); //funkar


    app.route('/api/accounts')
        .get(account.list_accounts) //funkar
        .post(account.create_account); //funkar


    app.route('/api/accounts/:accountId')
        .get(account.read_account) //funkar
        .put(account.update_account) //funkar
        .delete(account.delete_account); //funkar
};