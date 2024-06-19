import { useState, useEffect } from "react";
import { userContext } from "./StateComponent";
import { toast } from "react-toastify";
import { auth, db } from "../../credenciales";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

const UserState = ({ children }) => {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [nombreRegister, setNombreRegister] = useState("");
  const [apellidoRegister, setApellidoRegister] = useState("");
  const [rolRegister, setRolRegister] = useState("user"); // Nuevo estado para el rol

  const handleRegister = async (e, rol = "user") => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, emailRegister, passwordRegister);
      const usuario = auth.currentUser;
      console.log(usuario);

<<<<<<< Updated upstream
      if (usuario) {
        // Guardando nuevo usuario en DB
        await setDoc(doc(db, "Users", usuario.uid), {
          email: usuario.email,
          firstName: nombreRegister,
          lastName: apellidoRegister,
          role: rol, // Usando el rol recibido como parámetro
=======
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

    // Inicio de sesion
    const [emailSesion, setEmailSesion] = useState(null)
    const [passwordSesion, setPasswordSesion] = useState(null)
    const [userData, setUserData] = useState(null);

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            await signInWithEmailAndPassword(auth, emailSesion, passwordSesion);
            const usuarioSesion = auth.currentUser;
            console.log("El usuario se registró existosamente!");
            toast.success("El usuario se registró existosamente!", {
                position: "top-center",

            });

            if (usuarioSesion) {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user !== null) {
                    //Obtener datos del usuario
                    const userData = await getUserData(usuarioSesion.uid);
                    console.log("Datos del usuario:", userData);
                }

            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center"
            });

        }

    }

    useEffect(() => {
        setUserData(userData);
    }, [userData]);

    // Obteniendo datos del usuario
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

        const unsubscribe = auth.onAuthStateChanged((usuario) => {
            setUsuario(usuario); // Actualizando el estado con la información del usuario autenticado
>>>>>>> Stashed changes
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

  const [emailSesion, setEmailSesion] = useState(null);
  const [passwordSesion, setPasswordSesion] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, emailSesion, passwordSesion);
      const usuarioSesion = auth.currentUser;
      console.log("El usuario se registró existosamente!");
      toast.success("El usuario se registró existosamente!", {
        position: "top-center",
      });
      if (usuarioSesion) {
        // Obtener datos del usuario
        const userData = await getUserData(usuarioSesion.uid);
        console.log("Datos del usuario:", userData);
        //window.location.href = "/login"
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

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

<<<<<<< Updated upstream
  const [usuario, setUsuario] = useState();
=======
        <userContext.Provider value={{ setEmailRegister, setEmailSesion, setPasswordRegister, setPasswordSesion, setNombreRegister, setApellidoRegister, handleRegister, handleLogin, setUserData, userData, usuario, logout }}>
            {children}
        </userContext.Provider>
>>>>>>> Stashed changes

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usuario) => {
      setUsuario(usuario);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    auth.signOut()
      .then(() => {
        setUsuario(null);
      })
      .catch(error => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <userContext.Provider value={{
      setEmailRegister,
      setEmailSesion,
      setPasswordRegister,
      setPasswordSesion,
      setNombreRegister,
      setApellidoRegister,
      setRolRegister, // Nuevo setter para el rol
      handleRegister,
      handleLogin,
      usuario,
      logout
    }}>
      {children}
    </userContext.Provider>
  );
};

export default UserState;
