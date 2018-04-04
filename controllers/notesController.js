// Require all models
const db = require('../models');

module.exports = {
  // Post a Note associated with a Headline
  postNote: function(req, res) {
    db.Note.create(req.body)
    .then(function(dbNote) {
      return db.Headline.findOneAndUpdate({
        _id: req.params.id,
      }, {
        $push: {
          notes: dbNote._id
        }
      }, {
        new: true
      });
    })
    .then(function(dbHeadline) {
      res.json(dbHeadline);
    })
    .catch((err) => res.json(err));
  },
  // Delete a Note
  deleteNote: function(req, res) {
    db.Note.deleteOne({
      _id: req.params.id
    })
    .then((dbNotes) => res.json(dbNotes))
    .catch((err) => res.json(err));
  }
}
