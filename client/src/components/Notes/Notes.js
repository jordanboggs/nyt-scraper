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
    let self = this;
    
    API.deleteNote(this.state.noteId, this.state.articleId)
    .then(() => {
      // Reload articles
      self.props.loadSavedArticles();
    })
  }

  render() {
    return(
      <section className="border-top
                          border-bottom
                          border-white
                          ml-5
                          mr-5
                          pl-5
                          pr-5
                          d-flex
                          flex-row
                          justify-content-between
                          align-items-center">
        <p>{this.state.noteBody}</p>
        <button className="btn btn-warning"
                onClick={this.deleteNote}
        >✕</button>
      </section>
    );
  }
}

export default Notes;
