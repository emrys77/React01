import React from 'react'
import InformationModal from './InformationModal.jsx';

export default class InformationModals extends React.Component {
    
    render() {

    /*  var itemsList = this.props.options.map((item,i) => {
            return <ListItem key={i} itemID={i} activeItem={ this.state.selected } value={item} onChange={ onChange }/>
        }, this);
    Array(2)
0
:
{heading: "‘Soft targets’", information: "<p>Soft targets for armed robbery include:</p>↵<ul…uor stores</li>↵<li>Fast food outlets</li>↵</ul>↵"}
1
:
{heading: "Hard targets", information: "<p>Hard targets for armed robbery include:</p>↵<ul…er large cash-handling organisations.</li>↵</ul>↵"}
length
:
2
        // create an array for the modal list
        var mBoxes = [];
        modals.forEach(function(element) {
          mBoxes.push(element.heading,element.information);
        });

        we have modals array
        for each item push informationModal

    */
        const mBoxes = [];
        this.props.modals.forEach(function(element) {
            const uuidv1 = require('uuid/v1');
            mBoxes.push(<InformationModal heading={element.heading} information={element.information} key={uuidv1()} />);
        });
        /*const mBoxes = this.props.modals.map((heading, information, i) => {
            return <InformationModal heading={heading} information={information} number={i} key={i} />
        }, this); */

        return  (
                <div>
                    <div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
                    <div>{mBoxes}</div>
                </div>
            );

    }

}
