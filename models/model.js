'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var accountSchema = new Schema({
    name: {
        type: String,
        required: 'n saknas'
    },
    username: {
        type: String,
        required: 'username saknas'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    passw: {
        type: String,
        //required: 'passw saknas',
        default: 'RBzFg3*r'
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

module.exports = mongoose.model('Accounts', accountSchema);