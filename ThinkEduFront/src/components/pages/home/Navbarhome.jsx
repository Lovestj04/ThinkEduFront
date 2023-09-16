import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PiBrain, PiStudentBold } from "react-icons/pi";
import { BiBookBookmark, BiHomeAlt2 } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

function ColorSchemesExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#9977AA' }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"> <PiBrain size="2rem" className="mb-2"/> ThinkEdu</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/Home" className="mx-2">
              <BiHomeAlt2 size="2rem" className="mb-2"/> Home
            </Nav.Link>
            <Nav.Link href="/Studentstable" className="mx-2"> <PiStudentBold size="2rem" className="mb-2" />Students</Nav.Link>
            <Nav.Link href="/Subjects" className="mx-2"> <BiBookBookmark size="2rem" className="mb-2"/> Subjects </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="ml-2"><MdLogout size="2rem" className="mb-2" />Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default ColorSchemesExample;
