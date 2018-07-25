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
    // utility function to make a neat classname
    className = (w) => w.replace(/\s/g,'-').replace(/,|’|‘/g,''); 
  
    render() {
        const { open } = this.state;
        // <div dangerouslySetInnerHTML={{ __html: this.props.intro }}></div>
        return (
            <div className={this.className(this.props.heading)}>
                <button onClick={this.onOpenModal}>Open modal</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2 dangerouslySetInnerHTML={{ __html: this.props.heading }}></h2>      
                    <div dangerouslySetInnerHTML={{ __html: this.props.information }}></div>
                </Modal>
            </div>
        );
    }
}
