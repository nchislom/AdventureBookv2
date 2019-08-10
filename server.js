const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var storyLength = 0;
var totalUsers = 0;
var totalWins = 0;

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
app.get("/api", (req, res) => {
  res.send(`
    <h1>API Reference</h1>
    <ul>
      <li>/api/seed/&lt;key&gt; - Seeds database with new story data</li>
      <li>/api/stats - Returns stats regarding 
      <li>/api/story/all - Returns complete story JSON data</li>
      <li>/api/story/&lt;chapter number&gt; - Returns requested chapter as JSON</li>
    </ul>
  `);
});

app.get("/api/seed/:key", (req, res) => {
   
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
    
    db.User.insertMany({
      username: "admin",
      firstname: "admin",
      lastname: "user",
      password: "letmein",
      bookmark: 1
    }).then(() => {
      console.log("Default user created!")
    });

    // Bulk inserts storySeeds array as defined in /database/storySeeds.js
    // Can be adapted to accept json in req.body, empty collection, and re-seed (baby framework for story creation)
    db.Story.insertMany(storySeeds, function(err, docs) {
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

app.get("/api/stats", (req, res) => {
  
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

  res.json({
    "Current Story Size": storyLength,
    "Registered Users": totalUsers,
    "Global Wins": totalWins
  });
});

// API route used to retrieve full story, mainly just used for testing
app.get("/api/story/all", (req, res) => {
  db.Story.find({}, function (err, chapterInfo) {
    res.json(chapterInfo);
  });
});

// API route to retrieve story chunks
app.get("/api/story/:chapter", (req, res) => {
  db.Story.findOne({ id: req.params.chapter }, function (err, chapterInfo) {
    res.json(chapterInfo);
  });
});

// API route to create user
app.post("/api/users", (req, res) => {
  db.User.create(req.body, function (err, userInfo) {
    if (err) throw err;

    console.log(userInfo);
    

    res.json(userInfo);
  });
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
