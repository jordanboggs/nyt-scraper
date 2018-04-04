// Require controllers
const articlesController = require('../controllers/articlesController');
const notesController = require('../controllers/notesController');
const Notes = require('../controllers/notesController');
const router = require('express').Router();

/*
/api/articles (get) - your components will use this to query MongoDB for all saved articles

/api/articles (post) - your components will use this to save an article to the database

/api/articles (delete) - your components will use this to delete a saved article in the database
*/
router.route('/api/articles')
  .get(articlesController.populateArticles)
  .post(articlesController.saveArticle);

router.route('/api/articles/:id')
  .delete(articlesController.deleteArticle);

// Route for posting and deleting Notes
router.route('/api/notes/:id')
  .post(notesController.postNote)
  .delete(notesController.deleteNote)

module.exports = router;
