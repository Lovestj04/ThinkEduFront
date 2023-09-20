import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PiBrain, PiStudentBold } from "react-icons/pi";
import { BiBookBookmark, BiHomeAlt2 } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ColorSchemesExample3() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#9977AA" }}
        variant="dark"
      >
        <Container>
          <NavLink className="nav-link active" to="/">
            {" "}
            <PiBrain size="2rem" className="mb-2" /> ThinkEdu
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link active mx-2" to="/Home"> 
                <BiHomeAlt2 size="2rem" className="mb-2" /> Home
              </NavLink>
              <NavLink className="nav-link active mx-2" to="/Studentstable" >
                {" "}
                <PiStudentBold size="2rem" className="mb-2" />
                Students
              </NavLink>
              <NavLink className="nav-link active mx-2" to="/Subjects" >
                {" "}
                <BiBookBookmark size="2rem" className="mb-2" /> Subjects{" "}
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link active mx-2" to="/">
                <MdLogout size="2rem" className="mb-2" />
                Logout
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample3;
