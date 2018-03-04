let mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    website: String
});

mongoose.model('User', userSchema, 'users');