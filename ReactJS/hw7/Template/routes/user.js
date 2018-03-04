let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
var User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        if(err){
            return next(err);
        }

        res.json(users);
    })
});

module.exports = router;