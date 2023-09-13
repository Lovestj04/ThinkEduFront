// src/TablaDetalleCursado.js
import React from 'react';
import { Container, Table,} from 'react-bootstrap';
import ColorSchemesExample2 from "./NavbarSubject"

const data = [
  { materia: 'Matemáticas', año: 1, nota: 8 },
  { materia: 'Lengua y Literatura', año: 1, nota: 9 },
  { materia: 'Biología', año: 1, nota: 7 },
  { materia: 'Física', año: 1, nota: 8 },
  { materia: 'Química', año: 1, nota: 6 },
  { materia: 'Economía', año: 1, nota: 9 },
  { materia: 'Geografía', año: 1, nota: 7 },
  { materia: 'Historia', año: 1, nota: 8 },
  { materia: 'Educación Física', año: 1, nota: 10 },
  // Año 2
  { materia: 'Matemáticas', año: 2, nota: 9 },
  { materia: 'Lengua y Literatura', año: 2, nota: 8 },
  { materia: 'Biología', año: 2, nota: 7 },
  { materia: 'Física', año: 2, nota: 8 },
  { materia: 'Química', año: 2, nota: 7 },
  { materia: 'Economía', año: 2, nota: 8 },
  { materia: 'Geografía', año: 2, nota: 9 },
  { materia: 'Historia', año: 2, nota: 8 },
  { materia: 'Educación Física', año: 2, nota: 9 },
  // Año 3
  { materia: 'Matemáticas', año: 3, nota: 10 },
  { materia: 'Lengua y Literatura', año: 3, nota: 9 },
  { materia: 'Biología', año: 3, nota: 8 },
  { materia: 'Física', año: 3, nota: 9 },
  { materia: 'Química', año: 3, nota: 8 },
  { materia: 'Economía', año: 3, nota: 9 },
  { materia: 'Geografía', año: 3, nota: 7 },
  { materia: 'Historia', año: 3, nota: 10 },
  { materia: 'Educación Física', año: 3, nota: 10 },
  // Año 4
  { materia: 'Matemáticas', año: 4, nota: 10 },
  { materia: 'Lengua y Literatura', año: 4, nota: 9 },
  { materia: 'Biología', año: 4, nota: 8 },
  { materia: 'Física', año: 4, nota: 10 },
  { materia: 'Química', año: 4, nota: 9 },
  { materia: 'Economía', año: 4, nota: 10 },
  { materia: 'Geografía', año: 4, nota: 9 },
  { materia: 'Historia', año: 4, nota: 10 },
  { materia: 'Educación Física', año: 4, nota: 10 },
];

const Subjects = () => {
  return (
  
    <>
    <ColorSchemesExample2 />

    
    <Container className="mt-4">

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Materia</th>
          <th>Año</th>
          <th>Nota Final</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.materia}</td>
            <td>{item.año}</td>
            <td>{item.nota}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
    </>
  );
};

export default Subjects;