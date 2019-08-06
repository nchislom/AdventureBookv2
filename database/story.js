// /database/story.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    scene_title: String,
    scene_text: Number,
    next_scene: Number,
    correct_choice: String,
    choice_a: String,
    choice_b: String,
    wrong_choice_result: Text,
    image_url: String
  },
  { timestamps: false }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Story", DataSchema);