
import React, { Component } from 'react';
import Stave from './components/Stave/'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      random_note: -1
    }

    this.change_note = this.change_note.bind(this)
  }

  change_note() {
    this.setState(
      {
        random_note: Math.floor(Math.random()*16) + 1
      }
    )
  }

  componentDidMount() {
    this.change_note()
  }

  render() {
    return (
      <div className="App" onClick={this.change_note}>
        <div className="App-center">
          <div className="App-row">
            <Stave current_note={this.state.random_note}/>
          </div>
          <div className="App-row">
            <Stave current_note={this.state.random_note}/>
          </div>
          <div className="App-row">
            <Stave current_note={this.state.random_note}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
