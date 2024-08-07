import { useState, useEffect } from "react";
import { userContext } from "./StateComponent";
import { toast } from "react-toastify";
import { auth, db } from "../../credenciales";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

// eslint-disable-next-line react/prop-types
const UserState = ({ children }) => {

  // Registro de usuario
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nombreRegister, setNombreRegister] = useState("");
  const [apellidoRegister, setApellidoRegister] = useState("");


  const handleRegister = async (e, rol = "user") => {

    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, emailRegister, passwordRegister);
      const usuario = auth.currentUser;
      console.log(usuario);

      if (usuario) {
        // Guardando nuevo usuario en DB
        await setDoc(doc(db, "Users", usuario.uid), {

          email: usuario.email,
          firstName: nombreRegister,
          lastName: apellidoRegister,
          role: rol, // Usando el rol recibido como parámetro

        });

      }
      console.log("Usuario registrado exitosamente!");
      toast.success("Usuario registrado exitosamente!", {
        position: "top-center",
      });

    } catch (error) {

      console.log(error.message);
      toast.error("Error al registrarse", {
        position: "bottom-center",

      });

    }

  };

  // Inicio de sesion
  const [emailSesion, setEmailSesion] = useState(null)
  const [passwordSesion, setPasswordSesion] = useState(null)
  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      await signInWithEmailAndPassword(auth, emailSesion, passwordSesion);
      const usuarioSesion = auth.currentUser;
      console.log("El usuario se registró existosamente!");
      toast.success("Sesión iniciada exitosamente", {
        position: "top-center",
      });

      if (usuarioSesion) {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          //Obteniendo datos del usuario y creando localStorage para persistencia de datos
          const fetchedUserData = await getUserData(usuarioSesion.uid);
          setUserData(fetchedUserData);
          localStorage.setItem("userData", JSON.stringify(fetchedUserData));
        }

      }

    } catch (error) {
      console.log(error.message);
      toast.error("Error iniciando sesión", {
        position: "bottom-center"
      });

    }

  }

  // Funcion para obtener datos del usuario
  const getUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "Users", uid));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Actualicion estado de usuario
  const [usuario, setUsuario] = useState();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async (usuario) => {
      setUsuario(usuario); // Actualizando el estado con la información del usuario autenticado
      if (usuario) {
        const userData = await getUserData(usuario.uid);
        setUserData(userData); // Actualiza userData cuando el estado de autenticación cambie
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        setUserData(null);
        localStorage.removeItem("userData");
      }
    });

    return () => unsubscribe(); // Cancelando o cerrando la suscripción y/o proceso para evitar que se inicien varias cuentas a la vez

  }, []); // Array de dependencias vacío para que solo se ejecute 1 vez

  // Cerrando sesion
  const logout = () => {

    auth.signOut() // Llamada a Firebase para cerrar sesión
      .then(() => {
        setUsuario(null);
        setUserData(null);
        localStorage.removeItem("userData");
        toast.success("Sesión finalizada exitosamente", {
          position: "top-center",
        });
      })
      .catch(error => {
        console.error("Error al cerrar sesión: ", error);
      });

  };

  return (

    <userContext.Provider value={{ setEmailRegister, setEmailSesion, setPasswordRegister, setPasswordSesion, setNombreRegister, setApellidoRegister, handleRegister, handleLogin, setUserData, userData, usuario, logout }}>
      {children}
    </userContext.Provider>

  );

};

export default UserState;
