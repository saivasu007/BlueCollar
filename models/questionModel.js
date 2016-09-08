var express = require('express');
var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    id: Number,
    content: String,
    choices: Object,
    correctChoice: String,
    category: String,
    image: String
});

module.exports = mongoose.model('questionModel', questionSchema);

var question = {
    id: Number,
    content: String,
    choices: Object,
    correctChoice: String,
    category: String,
    image: String
}