import React, { Component } from 'react';
import API from "../../utils/API";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: this.props.noteId,
      noteBody: ''
    }

    this.getNote = this.getNote.bind(this);
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

  render() {
    return(
      <section className="note-section">
        <p>{this.state.noteBody}</p>
      </section>
    );
  }
}

export default Notes;
