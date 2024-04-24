import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Car from "./components/car/Car";
import Contact from "./components/contact/Contact";
import Us from "./components/us/Us";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/us" element={<Us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car" element={<Car />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
