// Require controllers
const articlesController = require('../controllers/articlesController');
const Notes = require('../controllers/notesController');
const router = require('express').Router();

router.route('/articles/populate')
.get(articlesController.populateHeadlines);

module.exports = router;
