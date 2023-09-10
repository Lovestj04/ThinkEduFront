import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu usuario" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className='mb-3'>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordar contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;