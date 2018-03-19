var mongoose = require('mongoose');

var InboxSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('schema', InboxSchema);