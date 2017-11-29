
import React, { Component } from 'react';
import Stave from './components/Stave/'
import NotesButtons from './components/NotesButtons/'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total_success: 0,
      total_fail: 0,
      random_note: -1,
      can_fail: false,
      show_string_colors: true
    }

    this.change_note = this.change_note.bind(this)
    this.success_callback = this.success_callback.bind(this)
    this.fail_callback = this.fail_callback.bind(this)
    this.notes_success_callback = this.notes_success_callback.bind(this)
    this.notes_fail_callback = this.notes_fail_callback.bind(this)
  }

  change_note() {
    this.setState({
      random_note: Math.floor(Math.random()*16) + 1,
      can_fail: true
    })
  }

  notes_success_callback() {
    this.setState({ show_string_colors: false })
    this.success_callback()
  }

  notes_fail_callback() {
    this.setState({ show_string_colors: false })
    this.fail_callback()
  }

  success_callback() {
    if(this.state.can_fail) {
      this.setState({ total_success: this.state.total_success + 1 })
    }
    this.change_note()
  }

  fail_callback() {
    if(this.state.can_fail) {
      this.setState({
        total_fail: this.state.total_fail + 1,
        can_fail: false
      })
    }
  }

  componentDidMount() {
    this.change_note()
  }

  render() {
    const { total_fail, total_success } = this.state
    return (
      <div className="App">
        <p>Precision: {total_success} / {total_success + total_fail}</p>
        <div className="App-center">
          <div className="App-row" onClick={this.change_note}>
            <Stave
              current_note={this.state.random_note}
              show_string_colors={this.state.show_string_colors}
              />
          </div>
          <div className="App-row">
            <NotesButtons
              current_note={this.state.random_note}
              success_callback={this.notes_success_callback}
              fail_callback={this.notes_fail_callback}
              />
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
