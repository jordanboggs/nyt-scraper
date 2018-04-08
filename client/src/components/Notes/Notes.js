import React, { Component } from 'react';
import API from "../../utils/API";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: this.props.noteId,
      noteBody: '',
      articleId: this.props.articleId
    }

    this.getNote = this.getNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    this.getNote();
  }

  getNote = () => {
    API.getNote(this.state.noteId)
    .then((res) => {
      this.setState({ noteBody: res.data.body });
    })
    .catch((err) => console.error(err));
  }

  deleteNote = () => {
    API.deleteNote(this.state.noteId, this.state.articleId)
    .then(() => {
      // Reload note
      this.getNote();
    })
  }

  render() {
    return(
      <section className="note-section">
        <p>{this.state.noteBody}</p>
        <button className="btn btn-warning"
                onClick={this.deleteNote}
        >Delete Note</button>
      </section>
    );
  }
}

export default Notes;
