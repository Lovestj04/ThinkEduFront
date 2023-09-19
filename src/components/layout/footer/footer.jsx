import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center fixed-bottom text-center text-md-left">
    <footer style={{ backgroundColor: '#9977AA', color: 'white' }}>
      <Container>
        <p>© Copyright 2023 Eduthink - All Rights Reserved </p>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
