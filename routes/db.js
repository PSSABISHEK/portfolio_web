var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/inbox')
    .then(() => console.log('connection succesfull'))
    .catch((err) => console.log(err));