'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemSchema = new Schema({
    gtin: {
        type: String,
        required: 'Kindly enter the GTIN of the item'
    },
    name: {
        type: String,
        required: 'Kindly enter the name of the item'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['clear', 'unclear', 'not_predictable']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('item', ItemSchema);