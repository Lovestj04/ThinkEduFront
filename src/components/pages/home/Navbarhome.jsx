import React from "react";
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { PiBrain, PiStudentBold } from "react-icons/pi";
import { BiBookBookmark, BiHomeAlt2 } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#9977AA" }}
        variant="dark"
      >
        <Container>
          <NavLink className="nav-link active" to="/Home">
            {" "}
            <PiBrain size="2rem" className="mb-2" /> ThinkEdu
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/Home" className="nav-link active mx-2">
                <BiHomeAlt2 size="2rem" className="mb-2" /> Home
              </NavLink>
              <NavLink to="/Studentstable" className="nav-link active mx-2">
                {" "}
                <PiStudentBold size="2rem" className="mb-2" />
                Students
              </NavLink>
              <NavLink to="/Subjects" className="nav-link active mx-2">
                {" "}
                <BiBookBookmark size="2rem" className="mb-2" /> Subjects{" "}
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link active mx-2">
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

export default ColorSchemesExample;
