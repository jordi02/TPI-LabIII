import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

// Modulos Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credenciales"

const Login = () => {

  // Estados mostrar/ocultar boton Iniciar sesion
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Estados usuario en Inicio de sesion
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(auth, email, password);
      console.log("El usuario se registró existosamente!");
      window.location.href = "/login"
      toast.success("El usuario se registró existosamente!", {
        position: "top-center",
      });

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center"
      });

    }
  }

  return (

    <>

      <Button
        className="m-1"
        size="sm"
        variant="outline-secondary"
        onClick={handleShow}
      >
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Ingrese email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                autoFocus
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ingrese su contraseña:</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
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

}

export default Login