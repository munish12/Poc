import React from 'react';
import { Table } from 'react-bootstrap';

const GridView = ({ students }) => (
  <Table striped bordered hover className="student-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={student.id}>
          <td>{index + 1}</td>
          <td>{student.name}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GridView;
