import React from 'react';
import Modal from 'react-responsive-modal';

export default class InformationModal extends React.Component {
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
    // classNames
  
    render() {
        const { open } = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>{this.props.heading}</h2>
                    <div>{this.props.information}</div>
                </Modal>
            </div>
        );
    }
}
