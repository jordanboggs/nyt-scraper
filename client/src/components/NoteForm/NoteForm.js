import React, { Component } from 'react';
import API from "../../utils/API";

class NotesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: this.props.article._id,
      noteBody: ""
    }

    this.handleNoteInputChange = this.handleNoteInputChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  handleNoteInputChange = (event) => {
    this.setState({
      noteBody: event.target.value
    })
  }

  addNote = (event) => {
    event.preventDefault();
    let self = this;

    let articleId = this.state.articleId;
    let noteBody = {
      body: this.state.noteBody
    };
    

    API.saveNote(articleId, noteBody)
      .then(function() {
        // Clear the form
        self.setState({ noteBody: "" });

        // Reload articles w/ saved Notes
        self.props.loadSavedArticles();
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
