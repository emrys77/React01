import React, { Component } from 'react';

import './SAR.css';
import 'font-awesome/css/font-awesome.css';
import Question from './components/Question.jsx';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  
  componentDidMount() {
//     console.log('componentDidMount fired');
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
            //console.log( 'data v1: ' + data);
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
          
          

            <Question data={this.state.data} />

         
          
        </div>
      );
  }
}

export default App;
