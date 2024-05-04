import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Car from "./components/car/Car";
import Contact from "./components/contact/Contact";
import Us from "./components/us/Us";
import { useEffect, useState } from "react";

// Estilos Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Modulos Firebase
import { auth } from "./credenciales"


function App() {

  // Actualicion estado de usuario
  const [usuario, setUsuario] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((usuario) => {
      setUsuario(usuario)
    });
  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={usuario ? <Navigate to="/login" /> : <NavBar />}
        />
        <Route path="/us" element={<Us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <ToastContainer/>
      <Footer />
    </>
  );
}

export default App;
