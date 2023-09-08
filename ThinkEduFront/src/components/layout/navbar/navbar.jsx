import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function ColorSchemesExample() {
    return (
      <>
        <Navbar style={{ backgroundColor: '#9977AA'}} data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">ThinkEdu</Navbar.Brand>
            <Nav className="ml-0">
              <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#features" className="mx-2">Students</Nav.Link>
              <Nav.Link href="#pricing" className="mx-2">Subjects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default ColorSchemesExample;