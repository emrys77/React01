import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `Item: ${k + offset}, Random value: ${Math.round(Math.random() * 100)}`,
    color: Math.random () > 0.66 ? 'pink': Math.random() > 0.5 ? 'lightgreen' : 'beige'
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
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

const grid = 4

/*
$SAR-burnt-orange: rgb(206,0,0);
$SAR-light-orange: rgb(255,166,76);
$SAR-dark-blue: rgb(0,43,84);

*/
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: `${grid}px ${grid *2}px`,
  margin: `0 ${grid}px ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'rgb(0,43,84)' : null,

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'rgb(255,166,76)' : 'transparent',
  padding: grid,
  margin: '3px',
})

class LearningCheck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list0: this.props.items, // content, group, key, order
            list1: [],
            list2: []
        };

        var getList
    }

/**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
/*  boxes: title, group */

/**/
    droppableIds = {
        droppable0: 'list0',
        droppable1: 'list1',
        droppable2: 'list2'
    }

    showDroppableIds() {
        console.log(this.droppableIds)
    }

 
  
    getList = id => this.state[this.droppableIds[id]]

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

    componentWillMount() {
        
        this.showDroppableIds()
        /*
        {droppable0: "list0", droppable1: "list1", droppable2: "list2"}
        */

        var MydroppableIds = {};
        // boxes: array, 3 elements: { group,title }
       

        this.props.boxes.forEach(function(box,index) {
            console.log(index + ': title: ' + box.title);
            
            var myKey = 'list' + index.toString();
            console.log('myKey: ' + myKey);
            MydroppableIds.myKey = `droppable${index}`;
            

            // `list${x}`,
           // MydroppableIds['droppable'+n] = 'list'+n
           //droppableId: `droppable${x}`
           // MydroppableIds.push(`droppable${index}` = `list${index}`)
        //    console.log('droppable+n: ' + `droppable${n}`)
        //    MydroppableIds[`droppable${i}`] = `list${i}`;
        });
        
    
/*
var obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
obj = {...obj, ...pair};
*/


        //console.log('MydroppableIds: ' + MydroppableIds)
        //console.log('MydroppableIds: ', droppableIds, typeof droppableIds, Array.isArray(droppableIds)); 

        this.getList = id => this.state[this.droppableIds[id]]

    /*
    returns:
    {droppable0: "list0", droppable1: "list1", droppable2: "list2"}
*/
   // console.log('droppableIds.length ' + droppableIds.length)
    
        this.lists = [];
        var x = 0;
        for (var key in MydroppableIds) {
        
            if (MydroppableIds.hasOwnProperty(key)) {
                console.log(x + ' ' + key + " -> " + MydroppableIds[key]);

                this.lists.push({
                    droppableId: `droppable${x}`,
                    listId: `list${x}`,
                    title: null  
                });
                x++ 
            }
        }
        console.log('lists: ' + this.lists); 

    }
  
  
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  render() {

    //console.log('droppableIds: ' + droppableIds);

    return (
        <div className="learning-check-container">
        <div className="intro" dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
        <DragDropContext onDragEnd={this.onDragEnd}>

          {this.lists.map((list, listIndex) =>
           
            <Droppable key={'list-droppable-' + listIndex} droppableId={list.droppableId}>
              {(provided, snapshot) => (

                <div className={'container'+' c'+listIndex}>
                 { //Check if there is a title
                  (list.title) ? <h2 dangerouslySetInnerHTML={{ __html: list.title}} /> : null }
                  <div className='dropzone'
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  
                  {this.state[list.listId] && this.state[list.listId].map((item, key) => (
                    <Draggable
                      
                      key={item.key}
                      draggableId={item.key}
                      index={item.key}>
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