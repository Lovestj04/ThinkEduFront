import React from "react";
import { Container, Navbar } from "react-bootstrap";

function LoginNavbar() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#9977AA" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ThinkEdu</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default LoginNavbar;