import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carrito from "../../assets/navbar/car.png";
import Login from "../login/Login";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../userState/StateComponent";
import { Link } from "react-router-dom";
function NavBar() {
  const { userData, usuario, logout } = useContext(userContext);

  useEffect(() => {
    userData;
  }, [userData]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="/">PUROHABITO</Navbar.Brand>

        <Nav.Link href="/us">Sobre nosotros</Nav.Link>

        {/* Botón Productos */}
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
            {usuario ? (
              <>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  Hola {userData?.firstName}, bienvenido
                </p>
                <Button
                  className="m-1"
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => logout()}
                >
                  Cerrar sesion
                </Button>
              </>
            ) : (
              <>
                {/* Botón Registrarse */}
                <Button className="m-1" size="sm" variant="outline-secondary">
                  <Nav.Link href="/register">Registrarse</Nav.Link>
                </Button>

                {/* Botón Inicio de sesión */}
                <Login />
              </>
            )}

            {/* Botón Carrito */}
            <Navbar.Brand href="#home">
            <Link to="/cart/">
                <img
                  src={Carrito}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="carrito"
                />
              </Link>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default NavBar;
