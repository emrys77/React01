import React from 'react';
import PropTypes from 'prop-types';
import dragula from 'react-dragula';
//import '../../node_modules/dragula/dist/dragula.css';
import styles from "../../../node_modules/dragula/dist/dragula.css";
import styles2 from './LearningCheck.css';
//import styles from '../../node_modules/dragula/example/example.css';


/*
var LearningCheck = React.createClass({
    render: function () {
      return 
      <div className="LearningCheck">
        <p>{ props.intro }</p>
        <div IdName="first">
            <div>Swap me around</div>
            <div>Swap them around</div>
            <div>Swap the world around</div>
        </div>
        <div IdName="second">
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
        </div>
      </div>;
    },
    componentDidMount: function () {
      dragula([document.getElementById(first), document.getElementById(second)], {
        revertOnSpill: true
      });
    }
  });

  var items = props.options;
    var itemsList = items.map(function(item){
      //  return <li>{item}</li>;
      //      return <radio Id="Q3" label={item} />;
            return <label className="radioBox"><input type="radio" name="Q3" value={item} />{item}</label>

      })

*/

function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

class LearningCheck extends React.Component {
    static propTypes = {
        intro: PropTypes.string.isRequired,
        box1hd: PropTypes.string.isRequired,
        box2hd: PropTypes.string.isRequired,
        options: PropTypes.array
    };

    items = this.props.options;
    
    itemsList = this.items.map(function(item){
        return <div>{item}</div>
    })
    
    render() {
        return ( 
            <div className="LearningCheck">
                <p>{this.props.intro}</p>
                <div className="wrapper">
                    <div className="container" id="first">
                        <h2>{this.props.box1hd}</h2>
                       
                    </div>
                    <div className="container" id="second">
                        <h2>{this.props.box2hd}</h2>
                        
                    </div>
                    <div className="container pen" id="third">
                    { this.itemsList }
                    </div>
                </div>
            </div>
        );
    };
    componentDidMount () {
        console.log('mounted!');
        dragula([document.getElementById('first'), document.getElementById('second'), document.getElementById('third')], {
            revertOnSpill: true
        });
    }
}



/* 
var half_length = Math.ceil(arrayName.length / 2);    

var leftSide = arrayName.splice(0,half_length);

function LearningCheck(props) {
    var items = props.options;
    var noItems = items.length;
    var itemsList = items.map(function(item){
      return <li>{item}</li>;
    })
    render function() {
        return  <div className="LearningCheck"><p>{ props.intro }</p><ul className="learning_check">{ itemsList }</ul></div>;
    },
    componentDidMount: function () {
        var container = React.findDOMNode(this);
        dragula([container]);
      }
    
} */


  export default LearningCheck;
