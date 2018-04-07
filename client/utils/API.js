import axios from "axios";

export default {
  // Gets all headlines
  getHeadlines: function() {
    // return (
      console.log(
      axios.get("/headlines/populate")
    );
  },
  // Gets the headline with the given id
  getHeadline: function(id) {
    return axios.get("/headlines/grab/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/notes/delete/" + id);
  },
  // Saves a Note to the database
  saveBook: function(id, noteData) {
    return axios.post("/notes/post/" + id, noteData);
  }
};
