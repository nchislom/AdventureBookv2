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

  module.exports = router;