import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState, useContext } from "react";
import { userContext } from "../userState/StateComponent";

const Login = () => {
  // Estados mostrar/ocultar boton Iniciar sesion
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setEmailSesion, setPasswordSesion, handleLogin } =
    useContext(userContext);

  return (
    <>
      <Button
        className="m-1"
        size="sm"
        variant="outline-secondary"
        style={{
          backgroundColor: "#f8f9fa",
          color: "#000",
          border: "1px solid #ced4da",
          padding: "0.5rem 1rem",
          fontSize: "1rem", // Tamaño de fuente ajustado
        }}
        onClick={handleShow}
      >
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form type="submit">
            <Form.Group className="mb-3">
              <Form.Label>Ingrese email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                autoFocus
                id="email"
                onChange={(e) => setEmailSesion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingrese su contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPasswordSesion(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin}>
            Ingresar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
