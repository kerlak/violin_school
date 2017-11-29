import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotesButtons.css';

const NOTES = {
  "DO": [4, 11],
  "RE": [5, 12],
  "MI": [6, 13],
  "FA": [7, 14],
  "SOL": [1, 8, 15],
  "LA": [2, 9, 16],
  "SI": [3, 10]
}

class NotesButtons extends Component {
  constructor(props) {
    super(props)

    this.check_note = this.check_note.bind(this)
  }

  check_note(note) {
    if (NOTES[note].includes(this.props.current_note)) {
      this.props.success_callback()
    } else {
      this.props.fail_callback()
    }
  }

  render() {
    return (
      <div className="button_list">
        <div onClick={() => this.check_note("DO")}>DO</div>
        <div onClick={() => this.check_note("RE")}>RE</div>
        <div onClick={() => this.check_note("MI")}>MI</div>
        <div onClick={() => this.check_note("FA")}>FA</div>
        <div onClick={() => this.check_note("SOL")}>SOL</div>
        <div onClick={() => this.check_note("LA")}>LA</div>
        <div onClick={() => this.check_note("SI")}>SI</div>
      </div>
    );
  }
}

NotesButtons.propTypes = {
  current_note: PropTypes.number,
  success_callback: PropTypes.func,
  fail_callback: PropTypes.func
};


export default NotesButtons;
