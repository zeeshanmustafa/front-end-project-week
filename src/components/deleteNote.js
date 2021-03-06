import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from "react-router-dom";
const uid = window.localStorage.getItem("uid");

class DeleteNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log("id of the note to be deleted:",this.props.match.params);
    return (
      <div>
        <div className='header-link' onClick={this.toggle}>{this.props.buttonLabel}</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-dialog-centered">
          <ModalBody className='text-center p-5'>
              Are you sure you want to delete this?
          </ModalBody>
          <ModalFooter className='d-flex justify-content-center'>
            <Button className='w-50' color="danger" onClick={() => {
                this.props.deleteNote(this.props.match.params.id);
                this.props.history.push(`/${uid}/displayNotes`);
            }}>Delete</Button>{' '}
            <Button className='w-50' color="primary" onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(connect(null,{deleteNote})(DeleteNote));