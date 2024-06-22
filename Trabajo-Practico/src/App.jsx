import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import AdminLogic from "./components/adminItems/AdminLogic";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
//import ItemDetailContainer from "./components/itemDetail/ItemDetailConteiner";
import ItemDetail from "./components/itemDetail/ItemDetail";
import SuperAdmin from "./components/superAdmin/SuperAdmin";
// Estilos Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemListContainer from "./components/itemList/ItemListContainer";
import CartProvider from "./components/CartContext";

function App() {

  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/AdminLogic" element={<PrivateRoute> <AdminLogic /></PrivateRoute>} />
            <Route path="/edit/:id" element={<PrivateRoute><AdminLogic /></PrivateRoute>} />
            <Route path="/SuperAdmin" element={<PrivateRoute><SuperAdmin /></PrivateRoute>} />
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
    
  );
  
}

export default App;
