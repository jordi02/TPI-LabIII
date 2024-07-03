import { useContext, useState } from "react";
import { userContext } from "../userState/StateComponent";
import { deleteDoc, getDocs, query, where, collection, updateDoc } from "firebase/firestore";
import { db } from "../../credenciales"; 

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
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [currentUserDoc, setCurrentUserDoc] = useState(null);

  // Función para encontrar el documento de usuario por email
  const findUserDocByEmail = async (email) => {
    const userQuery = query(collection(db, "Users"), where("email", "==", email));
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) {
      throw new Error("Usuario no encontrado");
    }
    return querySnapshot.docs[0]; // Retorna el documento completo
  };

  const handleDelete = async () => {
    try {
      const userDoc = await findUserDocByEmail(deleteEmail);
      await deleteDoc(userDoc.ref);
      alert('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('Error eliminando usuario:', error);
      alert('Error al eliminar el usuario: ' + error.message);
    }
  };

  const handleEdit = async () => {
    try {
      const userDoc = await findUserDocByEmail(editEmail);
      setCurrentUserDoc(userDoc);
      setEditFirstName(userDoc.data().firstName || "");
      setEditLastName(userDoc.data().lastName || "");
    } catch (error) {
      console.error('Error encontrando usuario:', error);
      alert('Error al encontrar el usuario: ' + error.message);
    }
  };

  const handleUpdate = async () => {
    if (!currentUserDoc) {
      alert("Primero encuentra un usuario");
      return;
    }

    try {
      const updatedData = {};
      if (editFirstName) updatedData.firstName = editFirstName;
      if (editLastName) updatedData.lastName = editLastName;

      await updateDoc(currentUserDoc.ref, updatedData);

      alert('Usuario actualizado exitosamente');
      // Limpia el estado después de la actualización
      setEditEmail("");
      setEditFirstName("");
      setEditLastName("");
      setCurrentUserDoc(null);
    } catch (error) {
      console.error('Error actualizando usuario:', error);
      alert('Error al actualizar el usuario: ' + error.message);
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
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button onClick={handleEdit} className="btn btn-warning">
              Buscar
            </button>
          </div>
          {currentUserDoc && (
            <div style={{ marginTop: "20px" }}>
              <div className="mb-3">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={editFirstName}
                  onChange={(e) => setEditFirstName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  value={editLastName}
                  onChange={(e) => setEditLastName(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button onClick={handleUpdate} className="btn btn-success">
                  Actualizar
                </button>
              </div>
            </div>
          )}
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
              value={deleteEmail}
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
