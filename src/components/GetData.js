import React, { Component } from 'react';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";
//const apiUrl = "http://localhost/wp-json/wp/v2/posts?per_page=100";

var data=[];
var emrys = "emrys";

class BJBS extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      requestFailed: false,
      BJBSData: [],
    }
  }
  
  componentDidMount() {
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
           // console.log('fired');
           // console.log( 'data v1: ' + data);
            currentComponent.setState({BJBSData:data});
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
  }
  
  

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.BJBSData) return <p>Loading...</p>
   
    var MyFuckingData = this.state.BJBSData;

    if (typeof MyFuckingData !== 'undefined' && MyFuckingData.length > 0) {
      console.log('MyFuckingData: ' + MyFuckingData.length );
      // the array is defined and has at least one element
      // turn js object into array we can pass to the question
    data = Object.keys(MyFuckingData).map(function(key) {
      return [Number(key), MyFuckingData[key]];
    });
    console.log('data: ' + data.length );
   
    /*for(var member of data){
      console.log(member.acf.question_number + ' ' + member.acf.section + ' '+ member.acf.type); 
    }*/

    }
    
    return null;

  }
}
//var MyFuckingData = data;

export {emrys};
export {data};
export default BJBS;
