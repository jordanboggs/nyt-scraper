const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const HeadlineSchema = new Schema({
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
  description: {
    type: String
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

const Article = mongoose.model("Headline", HeadlineSchema);

module.exports = Article;
