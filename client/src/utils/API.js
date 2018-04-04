import axios from "axios";

export default {
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves article to DB
  saveArticle: function() {
    return axios.post("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves Note to database associated with Article id
  saveNote: function(id) {
    return axios.post("/api/notes/" + id);
  },
  // Deletes Note with given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  }
};
