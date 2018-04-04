// Require all models
const db = require('../models');
const axios = require('axios');

module.exports = {
  // Populate page with Headlines
  populateHeadlines: function(req, res) {
    db.Headline
      .find({})
      .sort({created_at: -1})
      .then((dbHeadline) => res.json(dbHeadline))
      .catch((err) => res.json(err));
  },
  // Grab specific Headline by id, populate with its note
  grabHeadline: function(req, res) {
    db.Headline
      .find({
       _id: req.params.id
      })
      .populate("notes")
      .then((dbHeadline) => res.json(dbHeadline))
      .catch((err) => res.json(err));
  },
};
