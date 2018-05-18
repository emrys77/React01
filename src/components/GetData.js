import React, { Component } from 'react';

const apiUrl = "http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100";
//const apiUrl = "http://localhost/wp-json/wp/v2/posts?per_page=100";


// {JSON.parse(this.state.BJBSData)}
/*
const Test = ({ data }) => (
              <div>
                {data.map(piece => (
                  <div className="station" key={piece.call}>{piece.call}</div>
                ))}
              </div>
            )
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
            console.log('fired');
            console.log( 'data v1: ' + data);
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
   
    var data = this.state.BJBSData
    //console.log(this.state.BJBSData);

    console.log('json: ', data, typeof data, Array.isArray(data));
  
  }
}

export default BJBS;


