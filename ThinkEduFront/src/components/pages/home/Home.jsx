import React from "react";
import { Container, Nav, Navbar, ListGroup } from "react-bootstrap";

function Home() {
  return (
    <>
     <Container className="mt-4">
        <h1>Administración</h1>
        <ListGroup as="ol" className="custom-ol">
          <ListGroup.Item as="li" className="custom-li">
            Nombre: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Apellido: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Fecha de Ingreso:
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Contacto: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            ID: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Nombre de Institución: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Contacto de Institución: 
          </ListGroup.Item>
          <ListGroup.Item as="li" className="custom-li">
            Dirección: 
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}

export default Home;
