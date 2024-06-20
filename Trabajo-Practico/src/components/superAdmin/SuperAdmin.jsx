import { useContext, useState } from "react";
import { userContext } from "../userState/StateComponent";
import { doc, deleteDoc, getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../../credenciales"; // Asegúrate de que la ruta es correcta

const SuperAdmin = () => {
  const {
    setEmailRegister,
    setPasswordRegister,
    setNombreRegister,
    setApellidoRegister,
    handleRegister,
  } = useContext(userContext);

  const [activeSection, setActiveSection] = useState("none");
  const [rol, setRol] = useState("user");
  const [editEmail, setEditEmail] = useState("");
  const [deleteEmail, setDeleteEmail] = useState("");

  // Función para encontrar el documento de usuario por email
  const findUserDocByEmail = async (email) => {
    const userQuery = query(collection(db, "Users"), where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) {
      throw new Error("Usuario no encontrado");
    }
    return querySnapshot.docs[0].ref; // Retorna la referencia del documento
  };

  const handleDelete = async () => {
    try {
      const userDocRef = await findUserDocByEmail(deleteEmail);
      await deleteDoc(userDocRef);
      alert('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      alert('Error al eliminar el usuario: ' + error.message);
    }
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <div className="btn-group" role="group">
        <button onClick={() => setActiveSection("add")} className="btn btn-primary">
          Agregar
        </button>
        <button onClick={() => setActiveSection("edit")} className="btn btn-warning">
          Editar
        </button>
        <button onClick={() => setActiveSection("delete")} className="btn btn-danger">
          Borrar
        </button>
      </div>

      {activeSection === "add" && (
        <form onSubmit={(e) => handleRegister(e, rol)} style={{ marginTop: "20px" }}>
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
              onChange={(e) => setRol(e.target.value)}
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
      )}

      {activeSection === "edit" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Editar Usuario</h3>
          <div className="mb-3">
            <label>Email del usuario a editar</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemp@gmail.com"
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-warning">
              Editar
            </button>
          </div>
        </div>
      )}

      {activeSection === "delete" && (
        <div style={{ marginTop: "20px" }}>
          <h3>Borrar Usuario</h3>
          <div className="mb-3">
            <label>Email del usuario a borrar</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemp@gmail.com"
              onChange={(e) => setDeleteEmail(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button onClick={handleDelete} className="btn btn-danger">
              Borrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdmin;
