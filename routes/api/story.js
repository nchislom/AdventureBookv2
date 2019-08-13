const router = require("express").Router();
const db = require("../../database/models");

// API route used to retrieve full story, mainly just used for testing
router
    .route("/all")
    .get((req, res) => {
        db.Story.find({}, function (err, chapterInfo) {
        res.json(chapterInfo);
        });
    });
  
  // API route to retrieve story chunks
  router
    .route("/:chapter")
    .get((req, res) => {
    db.Story.findOne({ id: req.params.chapter }, function (err, chapterInfo) {
      res.json(chapterInfo);
    });
  });

  module.exports = router;