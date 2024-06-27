// NavBar.jsx
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Carrito from "../../assets/navbar/car.png";
import Login from "../login/Login";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../userState/StateComponent";

function NavBar() {
  const { userData, usuario, logout } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    userData;
  }, [userData]);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirigir a la página principal
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          PUROHABITO
        </Navbar.Brand>

        <Nav.Link as={Link} to="/us">
          Sobre nosotros
        </Nav.Link>

        <NavDropdown title="Productos" id="basic-nav-dropdown" className="mr-3">
          <NavDropdown.Item as={Link} to="/proteins">
            Proteinas
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/creatins">
            Creatinas
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/multivitamins">
            Multivitaminicos
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/others">
            Otros
          </NavDropdown.Item>
        </NavDropdown>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
            {usuario && (
              <Nav.Link as={Link} to="/orders">
                {userData && userData.role && (userData.role.includes("admin") || userData.role.includes("superadmin")) ? "Compras" : "Mis Compras"}
              </Nav.Link>
            )}

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
                {userData &&
                  userData.role &&
                  userData.role.includes("admin") &&
                  !userData.role.includes("superadmin") && (
                    <Button
                      className="m-1"
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => navigate("/AdminLogic")}
                    >
                      Administrar items
                    </Button>
                  )}
                {userData &&
                  userData.role &&
                  userData.role.includes("superadmin") && (
                    <Button
                      className="m-1"
                      size="sm"
                      variant="outline-secondary"
                      onClick={() => navigate("/SuperAdmin")}
                    >
                      Administrar usuarios
                    </Button>
                  )}
                <Button
                  className="m-1"
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => handleLogout()}
                >
                  Cerrar sesion
                </Button>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/register"
                  className="m-1"
                  size="sm"
                  variant="outline-secondary"
                >
                  Registrarse
                </Button>
                <Login />
              </>
            )}

            <Navbar.Brand>
              <Link to="/cart">
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
