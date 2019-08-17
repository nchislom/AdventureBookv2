// /database/story.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const StorySchema = new Schema(
  {
    id: Number,
    scene_title: String,
    scene_text: String,
    next_scene: Number,
    correct_choice: String,
    choice_a: String,
    choice_b: String,
    wrong_choice_result: String,
    image_url: String
  },
  { timestamps: false }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Story", StorySchema);