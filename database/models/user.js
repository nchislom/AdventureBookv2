// /database/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');

// this will be our data base's data structure 
const UserSchema = new Schema(
  {
    userName: String, 
    firstName: String,
    lastName: String,
    password: String, 
    bookmark: Number
    // image: String
  },
  { timestamps: true }
);

// userSchema.plugin(uniqueValidator);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);