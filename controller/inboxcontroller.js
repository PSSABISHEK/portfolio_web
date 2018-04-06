var express = require('express');
var mongoose = require('mongoose');
var schema = require('../models/schema.js');
var Inbox = mongoose.model("schema");
var inboxcontroller = {};


/* save new employee function */

inboxcontroller.save = function (req, res) {
    var inbox = new Inbox(req.body);

    inbox.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully entered");
            console.log(req.body);
            res.redirect("/")
        }
    });
};

module.exports = inboxcontroller;