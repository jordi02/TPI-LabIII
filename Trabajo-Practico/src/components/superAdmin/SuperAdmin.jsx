import { useContext, useState } from "react";
import { userContext } from "../userState/StateComponent";

const SuperAdmin = () => {
  const {
    setEmailRegister,
    setPasswordRegister,
    setNombreRegister,
    setApellidoRegister,
    handleRegister,
  } = useContext(userContext);

  const [rol, setRol] = useState("user"); // Estado local para el rol

  const handleRoleChange = (e) => {
    setRol(e.target.value);
  };

  return (
    <form onSubmit={(e) => handleRegister(e, rol)} style={{ marginBottom: "100px" }}>
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

      <div className="mb-3">
        <label>Rol</label>
        <select
          className="form-control"
          onChange={handleRoleChange}
          value={rol}
          required
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">SuperAdmin</option>
        </select>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </div>
      <p className="forgot-password text-right">
        Si ya estás registrado <a href="/">Inicia sesión</a>
      </p>
    </form>
  );
};

export default SuperAdmin;
