'use strict';
module.exports = function(app) {
  var account = require('../controllers/Controller');

  // Account Routes
  app.route('/account')
    .get(account.list_account)
    .post(account.create_account);


  app.route('/account/:taskId')
    .get(account.read_account)
    .put(account.update_account)
    .delete(account.delete_account);
};
