import React, { Component } from 'react';
import API from "../../utils/API";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.article._id
    }

    this.addNote = this.addNote.bind(this);
  }

  addNote = (event) => {
    event.preventDefault();
    const self = this;

    let articleId = this.state.articleId;
    console.log("noteBody",this.state.noteBody);

    API.saveNote(articleId, this.state.noteBody)
      .then(function() {
        self.loadSavedArticles();
      });
  }

  render() {
    return(
      <section className="note-form">
        <form className="add-note">
          <div className="form-group">
            <label htmlFor="noteBody">Note</label>
            <input type="text"
                  className="form-control mb-2"
                  name="noteBody"
                  value={this.state.noteBody}
                  onChange={this.handleNoteInputChange} />
            <button type="submit"
                    // data-article-id={this.props.article._id}
                    className="btn btn-primary ml-1 mr-1 mb-1"
                    onClick={this.addNote}
            >Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default NotesForm;
