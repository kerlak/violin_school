import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note'
import COLORS from './colors'
import './Stave.css';

class Line extends Component {
  render() {
    const { string, note, current_note, show_string_colors } = this.props
    const class_name =
      show_string_colors ?
        `line ${COLORS[string - 1]}`
      :
        'line'
    return (
      <div className={class_name}>
        {
          note === current_note ?
            <Note />
          :
            null
        }
        <div className="center_line" />
      </div>
    );
  }
}

Line.propTypes = {
  string: PropTypes.number,
  note: PropTypes.number,
  current_note: PropTypes.number,
  show_string_colors: PropTypes.bool
};

export default Line;
