const router = require("express").Router();
const db = require("../../database/models");

// API route to create user
router
    .route("/")
    .post((req, res) => {
        db.User.findOne({ userName: req.body.userName}, function (err, userInfo) {
            if (err) throw err; 
            console.log('Existing user: ', userInfo)
            
            if(!userInfo) {
                db.User.create(req.body, function (err, userInfo) {
                    if (err) throw err;
                    console.log("New user", userInfo);
                    res.json(userInfo);
                });
            } else {
                console.log("userName taken: ");
                res.json(err)
            }
        });
    });

router
    .route("/:userName/:password")
    .get((req, res) => {
        db.User.findOne({ userName: req.params.userName, password: req.params.password }, function (err, userInfo) {
            if (err) {
                console.log(err);
                res.json(err);
            }
            console.log("dbUser: ", userInfo);
            res.json(userInfo);
        });
    });

  module.exports = router;