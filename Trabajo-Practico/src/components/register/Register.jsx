import { useContext } from "react";
import { userContext } from "../userState/StateComponent";

const Register = () => {
  const {
    setEmailRegister,
    setPasswordRegister,
    setNombreRegister,
    setApellidoRegister,
    handleRegister,
  } = useContext(userContext);

  return (
    <form onSubmit={(e) => handleRegister(e, "user")} style={{ marginBottom: "100px" }}>
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
        Si ya estás registrado <a href="/">Inicia sesión</a>
      </p>
    </form>
  );
};

export default Register;
