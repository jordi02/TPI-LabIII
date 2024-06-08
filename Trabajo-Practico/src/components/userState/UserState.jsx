import { useState, useEffect } from "react";
import { userContext } from "./StateComponent";
//Modulo Firebase
import { auth } from "../../credenciales";

const UserState = ({ children }) => {

    // Actualicion estado de usuario
    const [usuario, setUsuario] = useState();

    // useEffect(() => {
    //     auth.onAuthStateChanged((usuario) => {
    //         setUsuario(usuario);
    //     });
    // });

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged((usuario) => {
            setUsuario(usuario); // Actualizando el estado con la información del usuario autenticado
        });

        return () => unsubscribe(); // Cancelando o cerrando la suscripción y/o proceso para evitar que se inicien varias cuentas a la vez

    }, []); // Array de dependencias vacío para que solo se ejecute 1 vez

    const logout = () => {

        auth.signOut() // Llamada a Firebase para cerrar sesión
            .then(() => {
                setUsuario(null);
            })
            .catch(error => {
                console.error("Error al cerrar sesión: ", error);
            });
    };

    return (

        <userContext.Provider value={{ usuario, logout }}>
            {children}
        </userContext.Provider>

    )
    
}

export default UserState
