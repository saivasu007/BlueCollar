var express = require('express');
var mongoose = require('mongoose');

var empSchema = new mongoose.Schema({
	uid: String,
	name: String,
    email: String,
    password: String,
    contactNum: String,
    address: String,
    empUniqueID: String,
    activeIn: String,
    expiryDate: String,
    saveCC: String
});

empSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};


module.exports = mongoose.model('empModel', empSchema);