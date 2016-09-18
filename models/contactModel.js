var express = require('express');
var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    msgDate: Date
});

module.exports = mongoose.model('contactModel', contactSchema);