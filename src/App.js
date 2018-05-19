import React, { Component } from 'react';
import BJBS from './components/GetData';
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
      
      //turn js object into array we can pass to the question
      var data = Object.keys(BJBS).map(function(key) {
        return [Number(key), BJBS[key]];
      });

      console.log('json: ', data, typeof data, Array.isArray(data));


      return (
        
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            
            <Question number={this.state.question} data={data} />
            
          </div>
        </div>
      );
  }
}

export default App;
