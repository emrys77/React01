import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//define a few colours
const SARBurntOrange = 'rgb(206,0,0)';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
//    userSelect: 'none',
//    padding: grid,
//    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    //background: isDragging ? 'lightgreen' : SARBurntOrange,

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    //padding: grid
});



class LearningCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            box1: [],
            box2: []
        };
        /*
        function getRows() {
    const {tableRows} = this.props;

    return tableRows.map((row, index) =>
        <tr key={index}>
            // whatever else you wanted to add inside each row
        </tr>
    );
}
*/
    /* index the items we are going to drag about
        var elements = this.props.items.map((item,i,order ) => {
            return {
                index: i,
                item: item,
                order: order
            }
        }); 
        console.log('elements: ' + elements)
    */


    }

    
    
    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    // props: boxes (array: group,title ); intro;items (array)
     // so here do a map of the boxes prop to create the lists
   // boxes =  this.props.boxes.forEach((group, title) => console.log(`key:${k} value:${v} map:${m}`))

    id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    getList = id => this.state[this.id2List[id]];

    
    onDragStart = () => {
    /*...*/
    };
    onDragUpdate = () => {
    /*...*/
    };
    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    render() {
       
        return (
            <div className="learning-check-container">
                <div className="intro" dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>

                <DragDropContext onDragEnd={this.onDragEnd}>

                    <Droppable droppableId="droppable1">
                        {(provided, snapshot) => (
                            <div
                                className="container finish" 
                                ref={provided.innerRef}
                                >
                               <h2 dangerouslySetInnerHTML={{ __html: this.props.boxes[0]['title']}} />
                                {this.state.box1.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                                className="draggableItem">
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                className="container finish" 
                                ref={provided.innerRef}
                                >
                                <h2 dangerouslySetInnerHTML={{ __html: this.props.boxes[1]['title']}} />

                                {this.state.box2.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                                className="draggableItem">
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                className="container start" 
                                ref={provided.innerRef}
                                >
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                                className="draggableItem">
                                                {item.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    
                </DragDropContext>
            </div>
        );
    }
}

LearningCheck.propTypes = {
    intro: PropTypes.string,
    boxes: PropTypes.array,
    items: PropTypes.array
};

export default LearningCheck;