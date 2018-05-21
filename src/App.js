import React, { Component } from 'react';
import BJBS, {MyFuckingData} from './components/GetData';
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

      //console.log('json: ', data, typeof data, Array.isArray(data));

      
      return (
        
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            
            <BJBS />
            <Question number={this.state.question} test="x" data={MyFuckingData} />

          </div>
          
        </div>
      );
  }
}

export default App;
