import React, { Component } from 'react';
import Stave from './components/Stave/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-center">
          <Stave />
        </div>
      </div>
    );
  }
}

export default App;
