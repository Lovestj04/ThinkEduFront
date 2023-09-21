import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import AboutusNavbar from './AboutusNavbar';

const Aboutus = () => {
  return (
    <>
      <AboutusNavbar />
      <div className="container mt-4 mb-4"> 
        <Row>
          <Card className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <Card.Body className="text-center">
              <Card.Title>Jonathan Gomez</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">TEAM FRONTEND</small>
            </Card.Footer>
          </Card>
          <Card className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <Card.Body className="text-center">
              <Card.Title>Facundo Chavez</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">TEAM BACKEND</small>
            </Card.Footer>
          </Card>
        </Row>
        <Row>
          <Card className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <Card.Body className="text-center">
              <Card.Title>Franco Cali</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">TEAM FRONTEND</small>
            </Card.Footer>
          </Card>
          <Card className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-4">
            <Card.Body className="text-center">
              <Card.Title>Cande Demelchiorre</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">TEAM BACKEND</small>
            </Card.Footer>
          </Card>
        </Row>
      </div>
    </>
  );
};

export default Aboutus;