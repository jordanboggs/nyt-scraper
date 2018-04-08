import axios from "axios";

export default {
  // Perform NYT API search
  searchForArticles: function(topicName, startYear, endYear) {
    const apiKey = "d4adf4a8f6034776a1f3fc735080ffc6";
    
    /*
     * The format of the URL is
     * https://api.nytimes.com/svc/search/v2/articlesearch.json
     * ?api-key=d4adf4a8f6034776a1f3fc735080ffc6
     * &q=%22steam-clams%22
     * &begin_date=19910101
     * &end_date=20181231
     */ 
    return axios.get(
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
      apiKey + "&q=" + topicName + "&begin_date=" + startYear + 
      "0101&end_date=" + endYear + "1231"
    );
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves article to DB
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves Note to database associated with Article id
  saveNote: function(id, text) {
    return axios.post("/api/notes/" + id, text);
  },
  // Get Note for an Article
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes Note with given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  }
};
