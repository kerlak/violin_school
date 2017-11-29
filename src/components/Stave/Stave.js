import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './Line'
import Void from './Void'
import SolKey from './SolKey'
import Note from './Note'
import './Stave.css'

class Stave extends Component {
  render() {
    return (
      <div className="StaveWrapper">
        <div className="Stave">
          <Line string={1} note={16} {...this.props} hidden={true}/>
          <Void string={1} note={15} {...this.props}/>
          <Line string={1} note={14} {...this.props}/>
          <Void string={1} note={13} {...this.props}/>
          <Line string={2} note={12} {...this.props}/>
          <Void string={2} note={11} {...this.props}/>
          <Line string={2} note={10} {...this.props}/>
          <Void string={2} note={9} {...this.props}/>
          <Line string={3} note={8} {...this.props}/>
          <Void string={3} note={7} {...this.props}/>
          <Line string={3} note={6} {...this.props}/>
          <Void string={3} note={5} {...this.props}/>
          <Line string={4} note={4} {...this.props} hidden={true}/>
          <Void string={4} note={3} {...this.props}/>
          <Line string={4} note={2} {...this.props} hidden={true}/>
          <Void string={4} note={1} {...this.props}/>
          <SolKey />
        </div>
      </div>
    );
  }
}

Stave.propTypes = {
  current_note: PropTypes.number,
  show_string_colors: PropTypes.bool
};


export default Stave;
