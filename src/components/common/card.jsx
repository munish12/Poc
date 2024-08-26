import React from 'react';
import { Card, Button } from 'react-bootstrap';

const UserCard = ({ user, onTileClick }) => {
  return (
    <Card   onClick={() => onTileClick(user)} className="user-card">
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{user.name}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <div className="d-flex justify-content-start">
          <Button variant="primary" className="me-2">Edit</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
