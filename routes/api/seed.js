const router = require("express").Router();
const db = require("../../database/models");
const storySeeds = require("../../database/storySeeds");

// API route used to retrieve full story, mainly just used for testing
router
    .route("/:key")
    .get((req, res) => {
        // Method used to prevent unauthorized seeding of production db
        // We can setup a more unique key in a secure environment variable down the road
        if(req.params.key === "12345"){
        
            // Empty Story collection
            db.Story.remove({}, function(err) {
                console.log("Existing collection cleared.");
                
                if(err){
                    console.log(err);
                }
            });
            
            db.User
                .insertMany({
                    username: "admin",
                    firstname: "admin",
                    lastname: "user",
                    password: "letmein",
                    bookmark: 1
                    })
                .then(() => {
                    console.log("Default user created!")
                });
        
            // Bulk inserts storySeeds array as defined in /database/storySeeds.js
            // Can be adapted to accept json in req.body, empty collection, and re-seed (baby framework for story creation)
            db.Story
                .insertMany(storySeeds, function(err, docs) {
                    if(err){
                        console.log(err);
                    } else {
                        console.log(`Successfully created: {docs}`);
                    }
                });

            res.send("Database seeded successfully!");
        } else {
            res.send("Seeding failed. Incorrect key supplied!");
        }
    });

module.exports = router;