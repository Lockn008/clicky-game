import React, { Component } from 'react';
import Banner from './components/Banner';
import Scoreboard from './components/Scoreboard';
import Game from './components/Game';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container-fluid">
          <div className="row">
            <span className="col App-title">Clicky Game</span>
            <Banner/>
            <Scoreboard/>
          </div>
        </header>
        <header className="container-fluid instruction-bar">
          <span className="instructions">Don't click on the same image twice!</span>
        </header>
        <Game/>
      </div>
    );
  }
}

export default App;
