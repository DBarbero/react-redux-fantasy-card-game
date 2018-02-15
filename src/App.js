import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './containers/Board/Board'

class App extends Component {
  render() {
    return (
      <div>
        <Board></Board>
      </div>
    );
  }
}

export default App;
