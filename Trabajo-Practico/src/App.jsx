import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
//import AdminLogic from "./components/adminItems/AdminLogic"
//import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Car from "./components/car/Car";
import Contact from "./components/contact/Contact";
//import ItemDetailContainer from "./components/itemDetail/ItemDetailConteiner";
import ItemDetail from "./components/itemDetail/ItemDetail";
import SuperAdmin from "./components/superAdmin/SuperAdmin";
// Estilos Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/itemList/ItemListContainer";

function App() {

  return (

    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />} />
          <Route path="/superAdmin" element={<SuperAdmin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car" element={<Car />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>

    </>

  );
  //<Route path="/adminItems" element={<PrivateRoute> <AdminItems /></PrivateRoute>} />
}

export default App;
