import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carrito from "../../assets/navbar/car.png";
import { Outlet } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

// Modulos Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credenciales"


function NavBar() {

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
      window.location.href="/login"
      toast.success("El usuario se registró existosamente!", {
        position: "top-center",
      });

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position:"bottom-center"
      });
      
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">PUROHABITO</Navbar.Brand>
        <Nav.Link href="/us">Sobre nosotros</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Button className="m-1" size="sm" variant="outline-secondary">
              <Nav.Link href="/register">Registrarse</Nav.Link>
            </Button>

            {    /* Boton Inicio de sesion */}
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
                  <Form.Group
                    className="mb-3"
                  //controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Ingrese email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      autoFocus
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                  //controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Ingrese su contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      rows={1}
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

            <Navbar.Brand href="#home">
              <Nav.Link href="/car">
                <img
                  src={Carrito}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="carrito"
                />
              </Nav.Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default NavBar;
