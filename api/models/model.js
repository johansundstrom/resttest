'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  username: {
    type: String,
    required: 'nytt konto'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  passw: {
    type: String,
    required: '12345678'
  },
  apikey: {
    type: String,
    default: 'adghbbh583nlgd3t'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'cleared', 'deleted']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Account',accountSchema);
