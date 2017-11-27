'use strict';

module.exports = function(app) {
  var account = require('../controllers/controller'); //modulimport

  // Account Routes
  app.route('/accounts')
    .get(account.list_account)  //Funkar
    .post(account.create_account);


  app.route('/accounts/:accountId')
    .get(account.read_account)  //Funkar
    .put(account.update_account)
    .delete(account.delete_account);  //Funkar
};
