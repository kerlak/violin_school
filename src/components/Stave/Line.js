import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note'
import COLORS from './colors'
import './Stave.css';

const STAVE_MIDDLE_NOTE = 10

class Line extends Component {

  constructor(props) {
    super(props)

    this.check_visibility = this.check_visibility.bind(this)
  }

  check_visibility(note, current_note) {
    if(STAVE_MIDDLE_NOTE > note) {
      return current_note <= note
    } else {
      return current_note >= note
    }
  }

  render() {
    const { string, note, current_note, show_string_colors, hidden } = this.props
    const class_name =
      show_string_colors ?
        `line ${COLORS[string - 1]}`
      :
        'line'
    const line_class =
      hidden ?
        "center_line short"
      :
        "center_line"
    return (
      <div className={class_name}>
        {
          note === current_note ?
            <Note />
          :
            null
        }
        {
          !hidden || this.check_visibility(note, current_note) ?
            <div className={line_class} />
          :
            null
        }
      </div>
    );
  }
}

Line.propTypes = {
  string: PropTypes.number,
  note: PropTypes.number,
  current_note: PropTypes.number,
  show_string_colors: PropTypes.bool,
  hidden: PropTypes.bool
};

export default Line;
