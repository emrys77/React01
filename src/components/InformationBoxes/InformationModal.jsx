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
        // <div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
        return (
            <div>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2 dangerouslySetInnerHTML={{ __html: this.props.heading }}></h2>      
                    <div dangerouslySetInnerHTML={{ __html: this.props.information }}></div>
                </Modal>
            </div>
        );
    }
}
