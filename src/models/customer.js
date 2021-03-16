'use strict';

const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    phoneNumber: {type: String, required: false},
    hairType:{type: String, required: false},
    productType: {type: String, required: false},
    scalpType: {type: String, required: false},
    sideEffects: {type: String, required: false},
    cost: {type: Number, require: false},
    brands: {type: String, require: false},
    questions: {type: String, require: false}
  })

module.exports = mongoose.model('customer', customerSchema); 