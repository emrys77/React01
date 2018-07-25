import React from 'react'
import InformationModal from './InformationModal.jsx';


// https://www.npmjs.com/package/react-center


export default class InformationModals extends React.Component {
    
    render() {

        const mBoxes = [];
        this.props.modals.forEach(function(element) {
            const uuidv1 = require('uuid/v1');
            mBoxes.push(<InformationModal heading={element.heading} information={element.information} key={uuidv1()} />);
        });

        return  (
                <div>
                    <div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
                    <ul>{mBoxes}</ul>
                </div>
            );

    }

}
