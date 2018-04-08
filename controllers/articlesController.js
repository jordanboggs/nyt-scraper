// Require all models
const db = require('../models');

module.exports = {
  // Populate page with saved Articles
  populateArticles: function(req, res) {
    db.Article
      .find({})
      .sort({created_at: -1})
      .then((dbArticle) => res.json(dbArticle))
      .catch((err) => res.json(err));
  },
  // Save an article to database
  saveArticle: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Delete an article from database
  deleteArticle: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
