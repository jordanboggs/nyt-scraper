const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type    : String,
    required: true,
    unique  : true
  },
  link: {
    type    : String,
    required: true,
    unique  : true
  },
  date_posted: {
    type    : Date,
    required: true,
    unique  : false
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      // default: "No notes",
      ref : "Note"
    }
  ],
  created_at: { 
    type    : Date,
    required: true,
    default : Date.now }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
