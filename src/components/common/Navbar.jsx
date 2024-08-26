import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasNavbar() {
  return (
    <>
         <Navbar bg="dark" variant="dark" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Nav className="ms-auto d-none d-md-flex flex-row">
          <Nav.Link className='me-3' href="/">Home</Nav.Link>
          <Nav.Link className='me-3' href="/about">About</Nav.Link>
          <Nav.Link className='me-3' href="/contact">Contact</Nav.Link>
        </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
       
      </Navbar.Collapse>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
