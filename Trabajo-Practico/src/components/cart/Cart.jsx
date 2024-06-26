// Cart.jsx
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { userContext } from "../userState/StateComponent";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder, clear, removeItem } = useContext(CartContext);
  const { userData, usuario } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder(totalPrice, { name: userData?.firstName, email: userData?.email });
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <a className="nav-link nop" href="/">
          No hay productos! Agrega alguno
        </a>
      ) : (
        <>
          <ul>
            {cartItems.map(({ item, quantity }) => (
              <div key={item.id} className="card" style={{ width: "20rem" }}>
                <img
                  className="card-img-top"
                  src={item.pictureUrl}
                  alt="Card image cap"
                />
                <div className="card-body d-flex flex-column justify-content-center">
                  <h4 className="card-title">{item.title}</h4>
                  <h5 className="card-text">{`Llevas ${quantity}`}</h5>
                  <p className="card-text">{`$${item.price * quantity}`}</p>
                </div>
                <button
                  className="btn btn-dark"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </ul>
          <button className="btn btn-dark" onClick={() => clear()}>
            Vaciar Carrito
          </button>
          {usuario ? (
            <form onSubmit={handleSubmit} className="form">
              <p>Datos del Usuario:</p>
              <p>{`Nombre: ${userData?.firstName}`}</p>
              <p>{`Email: ${userData?.email}`}</p>
              <button type="submit" className="btn btn-dark">
                Enviar pedido
              </button>
            </form>
          ) : (
            <Login />
          )}
          <h1 className="bg-dark text-white">{`El total es $${totalPrice}`}</h1>
        </>
      )}
    </>
  );
};

export default Cart;
