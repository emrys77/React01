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

  IncrementQuestion = () => {
    this.setState({ question: this.state.question + 1 });
  }

  
    render() {
     
      //console.log('json: ', myData, typeof myData, Array.isArray(myData));

      
      
      return (
        

        <div className="App">
          <BJBS />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div>
            
            <Question number={this.state.question} emrys={this.state.emrys} data={this.state.data} />

            <button onClick={this.IncrementQuestion}>Click to increment by 1</button>

          </div>
          
        </div>
      );
  }
}

export default App;
