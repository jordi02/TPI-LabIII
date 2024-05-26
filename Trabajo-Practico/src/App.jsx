import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserState from "./components/userState/UserState";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import AdminItems from "./components/adminItems/AdminItems";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Car from "./components/car/Car";
import Contact from "./components/contact/Contact";
import Us from "./components/us/Us";
import ItemListContainer from "./components/itemList/ItemListContainer";

// Estilos Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <>

      <BrowserRouter>
        <UserState>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route path="/us" element={<Us />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/car" element={<Car />} />
            <Route path="/adminItems" element={<PrivateRoute> <AdminItems /></PrivateRoute>} />
          </Routes>
          <ToastContainer />
          <Footer />
        </UserState>
      </BrowserRouter>

    </>

  );

}

export default App;
