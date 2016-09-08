var express = require('express');
var mongoose = require('mongoose');

var CertSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String
});

module.exports = mongoose.model('certifications', CertSchema);