'use strict';
module.exports = function(app) {
  var account = require('../controllers/controller');

  // Account Routes
  app.route('/accounts')
    .get(account.list_account)
    .post(account.create_account);


  app.route('/accounts/:taskId')
    .get(account.read_account)
    .put(account.update_account)
    .delete(account.delete_account);
};
