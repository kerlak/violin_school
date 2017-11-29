import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note'
import COLORS from './colors'
import './Stave.css';

class Void extends Component {
  render() {
    const { string, note, current_note } = this.props
    const class_name = `void ${COLORS[string - 1]}`
    return (
      <div className={class_name}>
        {
          note === current_note ?
            <Note />
          :
            null
        }
      </div>
    );
  }
}

Void.propTypes = {
  string: PropTypes.number,
  note: PropTypes.number,
  current_note: PropTypes.number
};

export default Void;
