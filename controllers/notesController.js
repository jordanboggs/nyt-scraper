// Require all models
const db = require('../models');

module.exports = {
  // Post a Note associated with a Article
  postNote: function(req, res) {
    db.Note
      .create(req.body)
      .then(function(dbNote) {
        return db.Article.findOneAndUpdate({
          _id: req.params.id,
        }, {
          $push: {
            notes: dbNote._id
          }
        }, {
          new: true
        });
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch((err) => res.json(err));
  },
  // Gets Notes by id
  getNote: function(req, res) {
    db.Note
      .findById({ _id: req.params.id })
      .then((dbNote) => res.json(dbNote))
      .catch((err) => res.json(err));
  },
  // Delete a Note
  deleteNote: function(req, res) {
    db.Note
      .findById({ _id: req.params.noteId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    db.Article
      .update(
        { _id: req.params.articleId }, 
        { $pull: { notes: req.params.noteId } }
      )
      .then((dbArticles) => res.json(dbArticles))
      .catch((err) => res.json(err));
  }
}
