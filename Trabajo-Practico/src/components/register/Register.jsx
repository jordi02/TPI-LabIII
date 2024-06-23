import { useContext, useState } from "react";
import { userContext } from "../userState/StateComponent";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Register = () => {

  const navigate = useNavigate();
  const { setEmailRegister, setPasswordRegister, setNombreRegister, setApellidoRegister, handleRegister, setEmailSesion, setPasswordSesion, handleLogin } = useContext(userContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(e, "user");
    navigate('/');
  };

  // Estados mostrar/ocultar boton Iniciar sesion
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Login = async (e) => {
    e.preventDefault();
    await handleLogin(e);
    navigate('/');
  };

  return (

    <form onSubmit={(e) => handleSubmit(e, "user")} style={{ marginBottom: "100px" }}>
      <h3>Registro de nuevo usuario</h3>

      <div className="mb-3">
        <label>Nombre/s</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej Pedro"
          onChange={(e) => setNombreRegister(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Apellido/s</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej Gonzalez"
          onChange={(e) => setApellidoRegister(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email de registro</label>
        <input
          type="email"
          className="form-control"
          placeholder="ejemp@gmail.com"
          onChange={(e) => setEmailRegister(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPasswordRegister(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
      <p className="forgot-password text-right">
        Si ya estás registrado <a href="#" onClick={handleShow} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
          Inicia sesión
        </a>
      </p>

      {show && (
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
          <Button variant="primary" onClick={Login}>
            Ingresar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>)}

    </form>

  );

};

export default Register;
