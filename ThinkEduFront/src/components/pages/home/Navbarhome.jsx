import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai"; 

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#9977AA'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ThinkEdu</Navbar.Brand>
          <Nav className="ml-0">
            <Nav.Link href="/Home" className="mx-2">
            <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="/Studentstable" className="mx-2">Students</Nav.Link>
            <Nav.Link href="/Subjects" className="mx-2">Subjects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
