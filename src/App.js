import React, { Component } from 'react';
import './App.css';
import people from './peopledata/index.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "selectedId": undefined
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      "selectedId": event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <select onChange={this.handleChange}>
        {
          people.map((person, index) => <option key={index} value={person.id}>{person.name}</option>)
        }
        </select>

        <div className={ this.state.selectedId ? "result" : "no-result" } >
            The selected person has id: <b>{this.state.selectedId}</b>.
        </div>
      </div>

    );
  }
}

export default App;
