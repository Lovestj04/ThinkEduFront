import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Error404 = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} className="text-center">
          <h1>¡Error 404!</h1>
          <p>La página que buscas no existe.</p>
          <img
            src="ruta-al-gif.gif"
            alt="Error 404"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
