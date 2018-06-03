import React, { Component } from 'react';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";
//const apiUrl = "http://localhost/wp-json/wp/v2/posts?per_page=100";

<<<<<<< HEAD
var data=[];
var MyFuckingData ={};
=======
var data={};
var MyFuckingData=[];
>>>>>>> 7ac94a736aee35dabcdd485876865e82ac18d93c
var emrys = "emrys";

/*
https://stackoverflow.com/questions/47649637/export-a-dynamic-array-from-a-react-component-to-another-component?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
https://stackoverflow.com/questions/11922383/access-process-nested-objects-arrays-or-json
*/

class BJBS extends Component {
  constructor(props) {
    
    super(props)
    this.state = {
      requestFailed: false,
      BJBSData: [],
    }
  }
  
  componentDidMount() {
   // console.log('componentDidMount fired');
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
            currentComponent.setState({BJBSData:data});
           // console.log( 'data v1: ' + data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
  }
  
  /*
what do i do?
get all dats from website
make this available 
  */

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.BJBSData) return <p>Loading...</p>
   
    var MyFuckingData = this.state.BJBSData;

    console.log( MyFuckingData);

     MyFuckingData = MyFuckingData.reduce(function(acc, cur, i) {
      acc[i] = cur;
      return acc;
    }, {});

    if (typeof MyFuckingData !== 'undefined' && MyFuckingData.length > 0) {
      console.log('xMyFuckingData: ' + MyFuckingData.length );
      // the array is defined and has at least one element
      // turn js object into array we can pass to the question
    data = Object.keys(MyFuckingData).map(function(key) {
      return [Number(key), MyFuckingData[key]];
    });
<<<<<<< HEAD
    console.log('BJBSData: ' + this.state.BJBSData.length );
    console.log( this.state.BJBSData );
=======
    //console.log('data: ' + data.length );
    //console.log( this.state.BJBSData);
   
>>>>>>> 7ac94a736aee35dabcdd485876865e82ac18d93c
    /*for(var member of data){
      console.log(member.acf.question_number + ' ' + member.acf.section + ' '+ member.acf.type); 
    }*/
    //console.log(data);
    //console.log(1.acf.question_number + ' ' + member.acf.section + ' '+ member.acf.type); 
    console.log(data[2][1]['slug'] + '  ' + data[2][1]['acf']['section'] + '  ' + data[2][1]['menu_order'] );

    }
    
    return null;

  }
}
//var MyFuckingData = data;

export {emrys};
export {MyFuckingData};
<<<<<<< HEAD

/*export default {
  "topbarLinks": []
} */
=======
export {data};
export const mydata = MyFuckingData;

//export const mydata = [];
>>>>>>> 7ac94a736aee35dabcdd485876865e82ac18d93c
export default BJBS;
