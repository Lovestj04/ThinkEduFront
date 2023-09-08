import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function ColorSchemesExample() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">ThinkEdu</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Students</Nav.Link>
              <Nav.Link href="#pricing">Subjects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
  );
}

export default ColorSchemesExample;