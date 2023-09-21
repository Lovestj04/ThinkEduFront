import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Error404 = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} className="text-center">
          <h1>¡Error 404!</h1>
          <Link className="nav-link text-white" to="/Home">¡Error 404!</Link>
          <p>La página que buscas no existe.</p>
          <img 
            src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif?cid=6c09b95273olec4lgjp1qz1u5wcd7naxvw18rt5p8cpdi5bg&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Error 404"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
