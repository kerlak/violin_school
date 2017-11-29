import React, { Component } from 'react';
import Line from './Line'
import Void from './Void'
import SolKey from './SolKey'
import './Stave.css';

class Stave extends Component {
  render() {
    return (
      <div className="StaveWrapper">
        <div className="Stave">
          <Line />
          <Void />
          <Line />
          <Void />
          <Line />
          <Void />
          <Line />
          <Void />
          <Line />
          <SolKey />
        </div>
      </div>
    );
  }
}

export default Stave;
