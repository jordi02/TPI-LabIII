import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder, clear, removeItem } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
  };

  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ item, quantity }) => {
      total += parseInt(item.price) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

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
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="">Ingrese sus datos:</label>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email@" />
            <input type="tel" placeholder="Telefono" />
            <button type="submit" className="btn btn-dark">
              Enviar pedido
            </button>
          </form>
          <h1 className="bg-dark text-white">{`El total es $${totalPrice}`}</h1>
        </>
      )}
    </>
  );
};

export default Cart;
