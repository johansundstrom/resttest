'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var accountSchema = new Schema({
    name: {
        type: String,
        required: 'namn saknas'
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        //validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'ogiltig epostadress'],
        required: 'email saknas'
    },
    username: {
        type: String,
        required: 'username saknas'
    },
    passw: {
        type: String,
        //required: 'passw saknas',
        default: 'RBzFg3*r'
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'cleared', 'deleted']
        }],
        default: ['pending']
    },
    apikey: {
        type: String,
        default: 'adghbbh583nlgd3t'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Accounts', accountSchema);