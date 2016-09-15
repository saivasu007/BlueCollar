var express = require('express');
var mongoose = require('mongoose');

var paymentSchema = new mongoose.Schema({
	uid: String,
	cardNumber: Number,
    cardMM: Number,
    cardYYYY: Number,
    cvc: Number,
    cardName: String
});


module.exports = mongoose.model('paymentModel', paymentSchema);