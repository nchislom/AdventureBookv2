const router = require("express").Router();
const db = require("../../database/models");

// API route to create user
router
    .route("/")
    .post((req, res) => {
        db.User.create(req.body, function (err, userInfo) {
            if (err) throw err;
            console.log(userInfo);
            res.json(userInfo);
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
            // if (userInfo.userName !== req.params.userName) {
            //     console.log('userInfo does not match')
            //   }
            console.log("dbUser: ", userInfo);
            res.json(userInfo);
        });
    });

  module.exports = router;