const router = require("express").Router();
const db = require("../../database/models");

var storyLength = 0;
var totalUsers = 0;
var totalWins = 0;
var sizeUser = 0;
var sizeStory = 0;

// API route used to retrieve database statistics
router
    .route("/")
    .get((req, res) => {
        // get number of parts in story collection
        db.Story.count({}, (err, count) => {
            if(err){
            console.log(err);
            } else {
            storyLength = count;
            }
        });

        // get number of users in user collection
        db.User.count({}, (err, count) => {
            if(err){
            console.log(err);
            } else {
            totalUsers = count;
            }
        });

        // get current size of collections
        db.User.collection.stats((err, results) => {
            if(err){
            console.log(err);
            } else {
            sizeUser = results.storageSize;
            }
        });

        db.Story.collection.stats((err, results) => {
            if(err){
            console.log(err);
            } else {
            sizeStory = results.storageSize;
            }
        });
        
        res.json({
            "storySize": storyLength,
            "registeredUsers": totalUsers,
            "globalWins": totalWins,
            "userCollectionSize": sizeUser,
            "storyCollectionSize": sizeStory
        });
    });
  module.exports = router;