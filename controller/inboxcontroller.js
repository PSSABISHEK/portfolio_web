var express = require("express");
var mongoose = require("mongoose");
var schema = require("../models/schema.js");
var Inbox = mongoose.model("schema");
var inboxcontroller = {};

/* save new employee function */

inboxcontroller.save = function(req, res) {
  console.log(req);
  
  if(req.body.name || req.body.email || req.body.message) {
    var inbox = new Inbox(req.body);
    inbox.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully entered");
        res.redirect("/");
      }
    });
  }
  else {
    res.redirect('/')
  }
};

module.exports = inboxcontroller;
