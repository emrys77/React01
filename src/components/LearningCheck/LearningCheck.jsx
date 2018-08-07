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
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'lightgrey',

  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : '#eee',
  padding: grid,
  margin: '3px',
  border: '1px solid #010101',
})

class LearningCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: this.props.items, // content, group, key, order
            list2: [],
            list3: []
        };

        console.log(this.props.items.order)
    }   
    
/* possible:
1. T/F empty boxes and 1 list to drop 
2. S/H targets with list (same logic)
3. re-order 

so test for order; create 1 or 3 lists


*/

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  droppableIds = {
    droppable1: 'list1',
    droppable2: 'list2',
    droppable3: 'list3'
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

      if (source.droppableId === 'droppable1') {
        copiedState.list1 = items
      } else if (source.droppableId === 'droppable2') {
        copiedState.list2 = items
      } else if (source.droppableId === 'droppable3') {
        copiedState.list3 = items
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
        list1: result.droppable1 ? result.droppable1 : this.state.list1,
        list2: result.droppable2 ? result.droppable2 : this.state.list2,
        list3: result.droppable3 ? result.droppable3 : this.state.list3
      })
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity

  render() {
    const lists = [
      {
        droppableId: 'droppable1',
        listId: 'list1',
        title: null
      },
      {
        droppableId: 'droppable2',
        listId: 'list2',
        title: this.props.boxes[0]['title']
      },
      {
        droppableId: 'droppable3',
        listId: 'list3',
        title: this.props.boxes[1]['title']
      },
    ]
    
    return (
        <div className="learning-check-container">
        <div className="intro" dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
        <DragDropContext onDragEnd={this.onDragEnd}>

          {lists.map((list, listIndex) =>
           
            <Droppable key={'list-droppable-' + listIndex} droppableId={list.droppableId}>
              {(provided, snapshot) => (

                <div className="container">
                 { //Check if there is a title
                  (list.title) ? <h2 dangerouslySetInnerHTML={{ __html: list.title}} /> : null }
                  <div 
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}>
                  
                  {this.state[list.listId] && this.state[list.listId].map((item, index) => (
                    <Draggable
                      
                      key={item.key}
                      draggableId={item.key}
                      index={index}>
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