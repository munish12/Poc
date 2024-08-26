import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import UserCard from "./common/card";

const TileView = ({ students, onTileClick }) => (
  <Row xs={1} md={2} className="g-4">
    {students.map((student) => (
      <Col md="3" sm="2" key={student.id}>
        <UserCard key={student.id} user={student} onTileClick={onTileClick}/>
      </Col>
    ))}
  </Row>
);

export default TileView;
