import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class LearningCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            selected: null
        };
      }
    
    onDragStart = () => {
    /*...*/
    };
    onDragUpdate = () => {
    /*...*/
    };
    onDragEnd = () => {
    // the only one that is required
    };

    render() {
        return (
            <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd} >
                <div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>

            </DragDropContext>
        );
    }
}

export default LearningCheck;