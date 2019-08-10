import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets a user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },

  // Registers a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};