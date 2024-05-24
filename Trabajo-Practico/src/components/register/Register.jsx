import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../credenciales";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";


const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await createUserWithEmailAndPassword(auth, email, password);
      const usuario = auth.currentUser;
      console.log(usuario);

      if (usuario) {

        // Guardando nuevo usuario en DB
        await setDoc(doc(db, "Users", usuario.uid), {

          email: usuario.email,
          firstName: nombre,
          lastName: apellido,
          role: "user",

        });
      }

      console.log("Usuario registrado exitosamente!");
      toast.success("Usuario registrado exitosamente!", {
        position: "top-center",
      });

    } catch (error) {

      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",

      });

    }

  };

  return (

    <form onSubmit={handleRegister} style={{ marginBottom: "100px" }}>
      <h3>Registro de nuevo usuario</h3>

      <div className="mb-3">
        <label>Nombre/s</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej Pedro"
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Apellido/s</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej Gonzalez"
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email de registro</label>
        <input
          type="email"
          className="form-control"
          placeholder="ejemp@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
      <p className="forgot-password text-right">
        Si ya estas registrado <a href="/">Inicia sesion</a>
      </p>
    </form>

  );

}

export default Register;