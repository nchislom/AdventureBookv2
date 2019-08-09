import http from "../services/httpService";

export default {
  
  // Get Full Story
  getFullStory: function() {
    return http.get("/api/story/all");
  },
  // Get Part of Story
  deleteBook: function(id) {
    return http.get("/api//story/" + id);
  }
  // // Save book to database
  // saveBook: function(bookData) {
  //   return http.post("/api//books", bookData);
  // }
};