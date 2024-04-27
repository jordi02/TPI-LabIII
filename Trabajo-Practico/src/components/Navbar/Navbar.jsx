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



function NavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const authentication = async(e) => {
    e.preventDefault()

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email)
    console.log(password)

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

            {    /* Boton Inicio de sesion */    }
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
                <Form onSubmit={authentication}>
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
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    //controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Ingrese su contraseña:</Form.Label>
                    <Form.Control type="password" rows={1} id="password" name="password"/>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Ingresar
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            {/* <div className="dropdown">
              <Button type="button" className="m-1" style={{ transform: 'scale(1.1)', fontSize: "10px" }} variant="outline-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Iniciar sesion
              </Button>
              <form className="dropdown-menu p-4">
                <div className="mb-3">
                  <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
                      <label className="form-check-label" htmlFor="dropdownCheck2">
                        Remember me
                      </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
              </form>
            </div> */}
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
