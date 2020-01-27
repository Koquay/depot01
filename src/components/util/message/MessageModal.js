import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classnames from 'classnames';
import './MessageModal.css';

let MessageModal = (props) => {
  useEffect(() => {
    handleShow();
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log('props.messages', props.messages)

  let originalError = { ...props.messages.serverError };
  let serverError = { ...originalError };
  originalError = null;
  props.messages.serverError = null;
  console.log('serverError', serverError)

  let { messageType} = props.messages;

  let info = { ...props.messages.info };
  let infoMessage = { ...info };
  info = null;
  props.messages.info = null;
    

  let message;
  
  if (serverError) {
    message = serverError.message;
  }

  message = message || infoMessage.info;

  return (
    <>
      {message &&
        <Modal show={show} onHide={handleClose} animation={false} centered>
          <Modal.Body className={classnames({
            'alertDangerClass': messageType === 'error'
          })}>
            {message}
            <div className="text-right">
              <Button variant="secondary" onClick={handleClose}>
                OK
            </Button>
            </div>
          </Modal.Body>
        </Modal>
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

MessageModal = connect(mapStateToProps)(MessageModal)

export default MessageModal;
