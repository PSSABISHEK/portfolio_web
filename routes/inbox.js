var express = require('express');
var router = express.Router();
var inbox = require("../controller/inboxcontroller");

// Save input
router.post('/save', inbox.save);



module.exports = router;