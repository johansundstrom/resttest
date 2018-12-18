'use strict';

module.exports = function(app) {
    var account = require('../controllers/controller'); //modulimport

    // Account Routes
    //app.route('/')
    //    .get(account.default); //funkar

    app.route('/')
        .get(account.default); //funkar

    app.route('/list')
        .get(account.list_accounts);


    app.route('/views')
        .get(account.list_accounts);

    app.route('/list/')
        .get(account.list_accounts) //funkar
        .post(account.create_account); //funkar


    app.route('/accounts/:accountId')
        .get(account.read_account) //funkar
        .put(account.update_account) //funkar
        .delete(account.delete_account); //funkar
};