import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';

export default class InformationBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    open: false    };
    };
  
    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
  
    render() {
        const { open } = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                </Modal>
            
            <button onClick={this.onOpenModal}>Open modal 2</button>
            <Modal open={open} onClose={this.onCloseModal} center>
                <h2>Simple centered modal 2</h2>
            </Modal>
        </div>
        );
    }
}

/*  
function InformationBoxes(props) {
  return  (
        <div>
            <div dangerouslySetInnerHTML={{ __html: props.intro }}></div>
            <div dangerouslySetInnerHTML={{ __html: props.box1 }}></div>
            <div dangerouslySetInnerHTML={{ __html: props.box2 }}></div>
        </div>
  );
}

Text.propTypes = {
  intro: PropTypes.string.isRequired,
  box1: PropTypes.string.isRequired,
  box2: PropTypes.string.isRequired
};

export default InformationBoxes;
*/
