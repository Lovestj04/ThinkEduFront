import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function ColorSchemesExample3() {
    return (
      <>
        <Navbar style={{ backgroundColor: '#9977AA'}} data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">ThinkEdu</Navbar.Brand>
            <Nav className="ml-0">
              <Nav.Link href="/Home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="/Studentstable" className="mx-2">Students</Nav.Link>
              <Nav.Link href="/Subjects" className="mx-2">Subjects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default ColorSchemesExample3;