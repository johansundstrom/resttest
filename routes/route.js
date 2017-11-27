'use strict';

module.exports = function(app) {
  var account = require('../controllers/controller'); //modulimport

  // Account Routes
  app.route('/api/accounts')
    .get(account.list_accounts)  //Funkar
    .post(account.create_account); //funkar


  app.route('/api/accounts/:accountId')
    .get(account.read_account)  //Funkar
    .put(account.update_account)  //Funkar
    .delete(account.delete_account);  //Funkar
};