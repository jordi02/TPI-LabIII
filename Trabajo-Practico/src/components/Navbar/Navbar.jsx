import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import Carrito from "../../assets/navbar/car.png"
//import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// //Modulos Firebase
// import appFirebase from "../../credenciales"
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth(appFirebase)

function NavBar() {

  // const [usuario, setUsuario] = useState(null)

  // onAuthStateChanged(auth, (usuarioFirebase) => {

  //   if (usuarioFirebase) {
  //     setUsuario(usuarioFirebase);
  //   } else {
  //     setUsuario(null);
  //   }
  // });


  return (
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home">PUROHABITO</Navbar.Brand>
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
            <Button><Nav.Link href="/register">REGISTRARSE</Nav.Link></Button>
            <Button><Nav.Link href="/login">Iniciar sesion</Nav.Link></Button>
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
      <Outlet/>
    </Navbar>

  );

}

export default NavBar;