import React, { Component } from 'react';
import BJBS from './components/GetData';
import BJBSData from './components/GetData';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 1
    }
  }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          
          <p>De dooh dooh dooh de dah dah dah</p>

          <BJBS />

           <Question number={this.state.question} data={BJBSData} />
        </div>
      );
  }
}

export default App;
