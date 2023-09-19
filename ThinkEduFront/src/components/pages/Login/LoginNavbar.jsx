import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { PiBrain } from "react-icons/pi";

function LoginNavbar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#9977AA" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <PiBrain size="2rem" className="mb-2" /> ThinkEdu
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default LoginNavbar;
