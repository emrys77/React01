import React, { Component } from 'react';
//import BJBS from './components/GetData';
//import {MyFuckingData} from './components/GetData';
//import {emrys} from './components/GetData';
//import {mydata} from './components/GetData';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";

/*
var result = Object.keys({MyFuckingData}).map(function(key) {
  return [Number(key), {MyFuckingData}[key]];
});
*/

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emrys: 'emrys',
      data: []
    }
  }

  
  componentDidMount() {
     console.log('componentDidMount fired');
     let currentComponent = this;
     
     fetch(apiUrl)
       .then(
         function(response) {
         if (response.status !== 200) {
             console.log('Looks like there was a problem. Status Code: ' +
             response.status);
             return;
         }
 
         // Examine the text in the response
         response.json().then(function(data) {
            // console.log('json response fired');
             currentComponent.setState({data:data});
            // console.log( 'data v1: ' + data);
         });
         }
     )
     .catch(function(err) {
         console.log('Fetch Error :-S', err);
     });
  }
  
  render() {
      
    return (  

      <div className="App">
          
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Question emrys={this.state.emrys} data={this.state.data} />
        </div>
          
      </div>
    );
  }
}

export default App;
