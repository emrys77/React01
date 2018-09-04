import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

// function to add an index to make the drag'n'drop work
const addIndex = (a) => {
    return a.map((el, i) => Object.assign({
      id: i
    }, el));
}

// function to shuffle an array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

// function to compare two arrays 
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
    // attach the .equals method to Array's prototype to call it on any array
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;
            // compare lengths - can save a lot of time 
            if (this.length != array.length)
            return false;

            for (var i = 0, l=this.length; i < l; i++) {
                // Check if we have nested arrays
                if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;       
            }           
            else if (this[i] != array[i]) { 
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;   
            }           
        }       
        return true;
    }

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source)
    const destClone = Array.from(destination)
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destClone.splice(droppableDestination.index, 0, removed)

    const result = {}
    result[droppableSource.droppableId] = sourceClone
    result[droppableDestination.droppableId] = destClone

    return result
}

/*
const grid = 4

$SAR-burnt-orange: rgb(206,0,0);
$SAR-light-orange: rgb(255,166,76);
$SAR-dark-blue: rgb(0,43,84);

*/
const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? 'rgb(0,43,84)' : null,

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'rgb(255,166,76)' : 'transparent'
    
})

// pass this an array of lists from the props; creates a key value array like object
const createDroppableIds = (a) => {
    console.log('createDroppableIds init')
    var droppableIds = {};
    // boxes: array, 3 elements: { group,title }
    a.forEach(function(box,index) {
       // console.log(index + ': title: ' + box.title);
        droppableIds[`droppable${index}`] = `list${index}`;
    });
    console.log(droppableIds)
    return droppableIds;
    
}

// give this a droppable list set it returns list array to render
const createLists = (droppable) => {
    var lists = [];
    var x = 0;
    for (var key in droppable) {
    
        if (droppable.hasOwnProperty(key)) {
          //  console.log(x + ' ' + key + " -> " + droppable[key]);

            lists.push({
                droppableId: `droppable${x}`,
                listId: `list${x}`,
                title: null  // <------- fix!
            });
             
        }
        x++
    }
    return lists;
}

class LearningCheck extends Component {
    constructor(props) {
        super(props);

        // drag'n'drop items
        const elements = shuffle(addIndex(this.props.items));

        this.state = {
            messageHidden: true,
            message: '',
            list0: elements, // content, group, key, order
            list1: [],
            list2: []
        };

    }

/**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
/*  boxes: title, group */

/*
    droppableIds = {
        droppable0: 'list0',
        droppable1: 'list1',
        droppable2: 'list2'
    }
{droppable0: "list0", droppable1: "list1", droppable2: "list2"}

    */
    showDroppableIds() {
        console.log(this.droppableIds)
    }

    

    checkAnswer = () => {
        // how many lists?
        console.log ('checkAnswer init');
        console.log ('no of lists: ' + this.lists.length)
        var response;
        if (this.lists.length === 1) {
            // this is a drag'n'drop scenario: we compare the order
            //alert('i am a reorder list');
            // compare the order

        } else {
            /* loop through list1 make sure there are no out of place stuff
            list1:
            Array[2]
            0:{…}
            content: "Criminals 20 years ago robbed soft targets for lots of cash."
            group: "2"
            id: 0
            key: 0
            order: "0"
            
            console.log('list1: ' + this.state.list1[1]['content']+ ' '+this.state.list1[1]['group']);

            var clicked = ( this.state.selected === this.props.correct) ? <p>That's right</p>  : <div>{ this.props.incorrectResponse}</div>

            {!this.state.messageHidden && clicked }
            message not hidden + 
            
            */
            // loop through list 1 check for group 2
            var found = this.state.list1.findIndex(p => p.group === "2");
            // and vice versa
            var found2 = this.state.list2.findIndex(p => p.group === "1");
            //if ((found !== -1) || (found2 !== -1)) {
            if ((found === 1) || (found2 === 1)) {
                this.setState(
                    {
                        messageHidden: false,
                        message: 'That\'s not right.'
                    }
                ) 
                
            } else {
                this.setState(
                    {
                        messageHidden: false,
                        message: 'That\'s right.'
                    }
                )
            }
            
            
            return response
            /*
            var clicked = ( this.state.selected === this.props.correct) ? <p>That's right</p>  : <div>{ this.props.incorrectResponse}</div>
            */
              // expected output: 
            
            // if
            // this.state.list1.group !== 2
            // do something
        }
        
        
    }

    submitButton = (s) => {
        if ((s === 0) || (this.lists.length === 1)) {
            return <button onClick={this.checkAnswer.bind(this)} className="submit active">Submit</button>
        }
        return null;
    };
    
    // shows the message
    unHide = () => {
        this.setState({
          messageHidden: false
        })
        this.props.onChange();
    }

    droppableIds = createDroppableIds(this.props.boxes);
    lists = createLists(this.droppableIds);

    getList = id => this.state[this.droppableIds[id]];

    // returns a title for the droppable box, if there is one
    title = x => this.props.boxes[x].title;

    onDragEnd = result => {
        const { source, destination } = result

        // dropped outside the list
        if (!destination) { return }

        if (source.droppableId === destination.droppableId) {
        const items = reorder(
            this.getList(source.droppableId),
            source.index,
            destination.index
        )

        let copiedState = Object.assign({}, this.state)

        if (source.droppableId === 'droppable0') {
            copiedState.list0 = items
        } else if (source.droppableId === 'droppable1') {
            copiedState.list1 = items
        } else if (source.droppableId === 'droppable2') {
            copiedState.list2 = items
        }

            this.setState(copiedState)
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            )

            console.warn('result', result)
            this.setState({
                list0: result.droppable0 ? result.droppable0 : this.state.list0,
                list1: result.droppable1 ? result.droppable1 : this.state.list1,
                list2: result.droppable2 ? result.droppable2 : this.state.list2
            })
        }
    }

  render() {
    console.log ('no of lists: ' + this.lists.length)
    return (
        <div className="learning-check-container">
        
        <div className="intro" dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
        <DragDropContext onDragEnd={this.onDragEnd}>

          {this.lists.map((list, listIndex) =>
           
            <Droppable key={'list-droppable-' + listIndex} droppableId={list.droppableId}>
              {(provided, snapshot) => (

                <div className={'container c'+listIndex}>
                
                  { this.title(listIndex) ? <h2 dangerouslySetInnerHTML={{ __html: this.title(listIndex)}} /> : null }
                  <div className='dropzone'
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  
                  {this.state[list.listId] && this.state[list.listId].map((item, i) => (
                    
                    <Draggable
                      group={item.group}
                      key={item.id}
                      draggableId={item.id}
                      index={i}>
                      {(provided, snapshot) => (
                        <div
                          className='draggableItem' 
                          ref={provided.innerRef}
                          { ...provided.draggableProps }
                          { ...provided.dragHandleProps }
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                         
                            {item.content}
                          
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
                </div>
              )}
            </Droppable>
          )}
        </DragDropContext>
        <div className='container submitContainer'>
            {this.submitButton(this.state.list0.length)}
            {!this.state.messageHidden && <p>{this.state.message}</p> }
        </div>
      </div>
    )
  }
}

LearningCheck.propTypes = {
    intro: PropTypes.string,
    boxes: PropTypes.array, // title, group
    items: PropTypes.array // group, content, order
};


export default LearningCheck;