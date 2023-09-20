import React from "react";
import { Container, NavLink, Navbar } from "react-bootstrap";
import { PiBrain } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function LoginNavbar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#9977AA" }} data-bs-theme="dark">
        <Container>
          <NavLink className="nav-link active" to="Home">
            <PiBrain size="2rem" className="mb-2" /> ThinkEdu
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
}

export default LoginNavbar;
