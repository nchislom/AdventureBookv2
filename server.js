const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const User = require('./database/models/user');

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

// BodyParser Middleware**
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session**
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init**
app.use(passport.initialize());
app.use(passport.session());

// Register User
app.post('/register', function(req, res){
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2){
    var newUser = new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      bookmark: 0
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
  } else{
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Authentication Routes
// Endpoint to login
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  }
);

// Endpoint to get current user
app.get('/user', function(req, res){
  res.send(req.user);
});

// Endpoint to logout
app.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});

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
