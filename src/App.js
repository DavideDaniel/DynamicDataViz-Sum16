import React, { Component, } from 'react';
import './App.css';
import Example from './Example';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1
    };
    this.update = this.update.bind(this);
  }

  update() {
     console.log('Update Props');
     this.setState({id: this.state.id+1});
  }

  render() {
    return (
      <div>
        <Example bar={this.state.id} baz={this.state.id+1} />
        <button onClick={this.update}>
          Update Props
        </button>
      </div>
    );
  }
};

export default App;
