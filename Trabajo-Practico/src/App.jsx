import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Proteins from "./components/products/Proteins";
import Creatins from "./components/products/Creatins";
import Vitamins from "./components/products/Vitamin";
import Others from "./components/products/Others";
import Us from "./components/us/Us";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import Cart from "./components/cart/Cart";
import CartProvider from "./components/CartContext";
import AdminLogic from "./components/adminItems/AdminLogic";
import SuperAdmin from "./components/superAdmin/SuperAdmin";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Orders from "./components/orders/Orders";
import NotFound from "./components/notFound/NotFound";
// Estilos Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route index path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetail />} />
              <Route path="/proteins" element={<Proteins />} />
              <Route path="/creatins" element={<Creatins />} />
              <Route path="/multivitamins" element={<Vitamins />} />
              <Route path="/others" element={<Others />} />
              <Route path="/us" element={<Us />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/AdminLogic" element={<PrivateRoute><AdminLogic /></PrivateRoute>}/>
              <Route path="/edit/:id" element={<PrivateRoute><AdminLogic /></PrivateRoute>}/>
              <Route path="/SuperAdmin" element={<PrivateRoute><SuperAdmin /></PrivateRoute>}/>
            </Routes>
          </main>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
