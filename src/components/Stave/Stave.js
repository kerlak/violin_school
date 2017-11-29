import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Line from './Line'
import Void from './Void'
import SolKey from './SolKey'
import './Stave.css';

class Stave extends Component {
  render() {
    return (
      <div className="StaveWrapper">
        <div className="Stave">
          <Void string={1} note={16} current_note={this.props.current_note}/>
          <Void string={1} note={15} current_note={this.props.current_note}/>
          <Line string={1} note={14} current_note={this.props.current_note}/>
          <Void string={1} note={13} current_note={this.props.current_note}/>
          <Line string={2} note={12} current_note={this.props.current_note}/>
          <Void string={2} note={11} current_note={this.props.current_note}/>
          <Line string={2} note={10} current_note={this.props.current_note}/>
          <Void string={2} note={9} current_note={this.props.current_note}/>
          <Line string={3} note={8} current_note={this.props.current_note}/>
          <Void string={3} note={7} current_note={this.props.current_note}/>
          <Line string={3} note={6} current_note={this.props.current_note}/>
          <Void string={3} note={5} current_note={this.props.current_note}/>
          <Void string={4} note={4} current_note={this.props.current_note}/>
          <Void string={4} note={3} current_note={this.props.current_note}/>
          <Void string={4} note={2} current_note={this.props.current_note}/>
          <Void string={4} note={1} current_note={this.props.current_note}/>
          <SolKey />
        </div>
      </div>
    );
  }
}

Void.propTypes = {
  current_note: PropTypes.number
};


export default Stave;
