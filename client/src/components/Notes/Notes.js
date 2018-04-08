import React, { Component } from 'react';
import API from "../../utils/API";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: this.props.noteId,
      noteBody: ''
    }

    this.addNote = this.addNote.bind(this);
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
