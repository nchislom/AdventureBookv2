const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Require all models
var db = require("./database/models");
var storySeeds = require("./database/storySeeds");

/* Notes on Heroku deployment
* In order to deploy this project to Heroku, we must set up an mLab provision.
* mLab is remote MongoDB database that Heroku supports natively.
* 
* To get it running:
* 
* 1. Create a Heroku app in your project directory.
* 2. Run this command in your Terminal/Bash window:
* `heroku addons:create mongolab`
* This command will add the free mLab provision to your project.
*/

// If deployed, use the deployed database. Otherwise use the local storydb database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/storydb";
mongoose.connect(MONGODB_URI);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API routes
app.get("/api/seed", (req, res) => {
  console.log("API seeder route hit!");
  db.Story.insertMany(storySeeds, function(error, docs) {
    if(error){
      console.log(error);
    } else {
      console.log(`Successfully created: {docs}`);
    }
  });
  res.send('Database seeded!');
});

// API route to retrieve full story
app.get("/api/story/all", (req, res) => {
  db.Story.findAll({}, function (err, chapterInfo) {
    res.json(chapterInfo);
  });
});

// API route to retrieve story chunks
app.get("/api/story/:chapter", (req, res) => {
  db.Story.findOne({ id: req.params.chapter }, function (err, chapterInfo) {
    res.json(chapterInfo);
  });
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
