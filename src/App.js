import React, { Component } from 'react';
import BJBS from './components/GetData';
import {data} from './components/GetData';
import {emrys} from './components/GetData';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

var myEmrys = emrys;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: 1,
      emrys: myEmrys,
      data: data
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
            
            <Question number={this.state.question} emrys={this.state.emrys} data={this.state.data} />

          </div>
          
        </div>
      );
  }
}

export default App;
