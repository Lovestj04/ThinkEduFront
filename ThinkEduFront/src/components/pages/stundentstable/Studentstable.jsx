import React, { useState } from "react";
import { Container, Table, Button, Modal, Form, Alert } from "react-bootstrap";
import ColorSchemesExample3 from "./NavbarStudent"
import './styles.css'

function Studentstable() {
  const [students, setStudents] = useState([
    {
      id: 1,
      nombre: "John",
      apellido: "Doe",
      anioCursado: "3er año",
      numeroExpediente: "12345",
      cuotaAlDia: true,
      activo: true,
    },
    // Agregar más alumnos aquí
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    id: Date.now(),
    nombre: "",
    apellido: "",
    anioCursado: "",
    numeroExpediente: "",
    cuotaAlDia: true,
    activo: true,
  });

  const [randomId, setRandomId] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleViewDetails = (id) => {
    // Lógica para ver detalles del alumno
    console.log("Ver detalles del alumno con ID:", id);
  };

  const handleDeactivate = (id) => {
    // Lógica para dar de baja a un alumno
    console.log("Dar de baja al alumno con ID:", id);
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, activo: false } : student
    );
    setStudents(updatedStudents);
  };

  const handleCreateStudent = () => {
    // Validar que se completen todos los campos obligatorios
    if (
      !newStudent.nombre ||
      !newStudent.apellido ||
      !newStudent.anioCursado
    ) {
      setShowError(true);
      return;
    }

    // Generar un ID único aleatorio
    const randomId = Math.floor(Math.random() * 1000000); // Cambia 1000000 según tus necesidades

    // Lógica para crear un nuevo alumno con el ID aleatorio
    setStudents([
      ...students,
      {
        id: randomId,
        nombre: newStudent.nombre,
        apellido: newStudent.apellido,
        anioCursado: newStudent.anioCursado,
        numeroExpediente: randomId.toString(), // Convertir el ID a cadena
        cuotaAlDia: newStudent.cuotaAlDia,
        activo: newStudent.activo,
      },
    ]);

    setShowModal(false);
    setNewStudent({
      id: Date.now(),
      nombre: "",
      apellido: "",
      anioCursado: "",
      numeroExpediente: "",
      cuotaAlDia: true,
      activo: true,
    });

    setRandomId(randomId); // Actualizar el estado del ID aleatorio
    setShowError(false); // Ocultar el mensaje de error
  };

  return (
    <>
    <ColorSchemesExample3/>
    <Container className="mt-4">
      <h1>Lista de Alumnos</h1>
      <Table striped bordered hover>
        {/* Cabecera de la tabla */}
        <thead>
          <tr>
            <th>Nombre Apellido</th>
            <th>Año de cursado actual</th>
            <th>Numero Expediente (ID)</th>
            <th>Cuota al día</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.nombre} {student.apellido}</td>
              <td>{student.anioCursado}</td>
              <td>{student.numeroExpediente}</td>
              <td>
                <span style={{ color: student.cuotaAlDia ? "green" : "orange" }}>
                  {student.cuotaAlDia ? "Sí" : "No"}
                </span>
              </td>
              <td>
                <Button
                  variant="primary"
                  className="mr-2"
                  onClick={() => handleViewDetails(student.id)}
                >
                  Ver Detalles
                </Button>
                {student.activo ? (
                  <Button
                    variant="danger"
                    onClick={() => handleDeactivate(student.id)}
                  >
                    Dar de Baja
                  </Button>
                ) : (
                  <span style={{ color: "red" }}>Inactivo</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" onClick={() => setShowModal(true)}>
        Crear Alumno Nuevo
      </Button>

      {/* Modal para crear un nuevo alumno */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Alumno Nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showError && (
            <Alert variant="danger" className="mb-3">
              Por favor, completa todos los campos obligatorios.
            </Alert>
          )}
          <Form>
            {/* Campos de formulario para el nuevo alumno */}
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del alumno"
                value={newStudent.nombre}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, nombre: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido del alumno"
                value={newStudent.apellido}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, apellido: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="anioCursado">
              <Form.Label>Año de Cursado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Año de cursado del alumno"
                value={newStudent.anioCursado}
                onChange={(e) =>
                  setNewStudent({ ...newStudent, anioCursado: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="numeroExpediente">
              <Form.Label>Numero Expediente (ID)</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID del alumno"
                value={newStudent.numeroExpediente}
                onChange={(e) =>
                  setNewStudent({
                    ...newStudent,
                    numeroExpediente: e.target.value,
                  })
                }
                disabled // Deshabilitar la edición del ID
              />
            </Form.Group>
            {/* Otros campos del formulario */}
            {/* ... */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" className="button-create"  onClick={handleCreateStudent}>
            Crear Alumno
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
}

export default Studentstable;
