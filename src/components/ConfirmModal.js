import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmModal({ show, setShow, subject }) {
  const handleClose = () => setShow(false);
  

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {subject}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Do you want to edit the contact ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
