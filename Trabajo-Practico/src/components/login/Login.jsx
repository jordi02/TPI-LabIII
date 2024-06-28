// src/components/login/Login.jsx
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { userContext } from "../userState/StateComponent";
import useDarkMode from "../hooks/useDarkMode"; // Importa el hook de modo oscuro

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setEmailSesion, setPasswordSesion, handleLogin } =
    useContext(userContext);
  const [isDarkMode] = useDarkMode(); // Obtén el estado del modo oscuro

  return (
    <>
      <Button
        className="m-1"
        size="sm"
        variant="outline-secondary"
        style={{
          backgroundColor: isDarkMode ? "#333" : "#f8f9fa",
          color: isDarkMode ? "#fff" : "#000",
          border: "1px solid #ced4da",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
        }}
        onClick={handleShow}
      >
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className={isDarkMode ? "bg-dark text-light" : ""}
        >
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className={isDarkMode ? "bg-dark text-light" : ""}>
          <Form type="submit">
            <Form.Group className="mb-3">
              <Form.Label>Ingrese email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                autoFocus
                id="email"
                onChange={(e) => setEmailSesion(e.target.value)}
                className={
                  isDarkMode ? "bg-dark text-light border-secondary" : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingrese su contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPasswordSesion(e.target.value)}
                className={
                  isDarkMode ? "bg-dark text-light border-secondary" : ""
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className={isDarkMode ? "bg-dark" : ""}>
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
