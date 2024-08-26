// src/components/DetailView/DetailView.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailView = ({ student, show, onClose }) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Student Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Name: {student?.name}</p>
      <p>Email: {student?.email}</p>
      {/* Display other details as needed */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DetailView;
