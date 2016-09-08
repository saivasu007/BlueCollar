var express = require('express');
var mongoose = require('mongoose');

var SQMSchema = new mongoose.Schema({
    id: Number,
    content: String,
    choices: Object,
    correctChoice: String,
    category: String,
    image: String
});

module.exports = mongoose.model('SQMModel', SQMSchema);