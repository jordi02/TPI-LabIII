import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { userContext } from "../userState/StateComponent";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import "./Cart.css"; 

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
    sendOrder(totalPrice, {
      name: userData?.firstName,
      email: userData?.email,
    });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <a className="nav-link nop" href="/">
          No hay productos! Agrega alguno
        </a>
      ) : (
        <>
          <div className="cart-container">
            <ul className="list-unstyled">
              {cartItems.map(({ item, quantity }) => (
                <li key={item.id} className="card mb-3">
                  <img
                    className="card-img-top"
                    src={item.pictureUrl}
                    alt="Imagen del producto"
                  />
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h4 className="card-title">{item.title}</h4>
                    <h5 className="card-text">{`Cantidad: ${quantity}`}</h5>
                    <p className="card-text">{`Precio: $${
                      item.price * quantity
                    }`}</p>
                    <button
                      className="btn btn-dark"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn btn-clear" onClick={() => clear()}>
              Vaciar Carrito
            </button>
            {usuario ? (
              <form onSubmit={handleSubmit} className="form mt-3">
                <p>Datos del Usuario:</p>
                <p>{`Nombre: ${userData?.firstName}`}</p>
                <p>{`Email: ${userData?.email}`}</p>
                <p className="total-price">{`Total: $${totalPrice}`}</p>
                <button type="submit" className="btn btn-dark mt-3">
                  Enviar pedido
                </button>
              </form>
            ) : (
              <Login />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
