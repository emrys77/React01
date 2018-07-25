import React from 'react';
import Modal from 'react-responsive-modal';

export default class InformationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    open: false, clicked: false    };
    };
  
    onOpenModal = () => {
      this.setState({ open: true, clicked: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };

    // classNames
    // utility function to make a neat classname
    className = (w) => w.replace(/\s/g,'-').replace(/,|’|‘/g,''); 
  
    render() {
        const { open } = this.state;
        return (
            <li className={this.className(this.props.heading)}>
                <button className="modal-button" onClick={this.onOpenModal} dangerouslySetInnerHTML={{ __html: this.props.heading }} />
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2 dangerouslySetInnerHTML={{ __html: this.props.heading }}></h2>      
                    <div dangerouslySetInnerHTML={{ __html: this.props.information }}></div>
                </Modal>
            </li>
        );
    }
}
