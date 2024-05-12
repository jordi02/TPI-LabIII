import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../navbar/CartContext";

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);

  const { title, stock, pictureUrl, detail } = item;

  const onAdd = (amount) => {

    addItem(item, amount);

  };

  return (

    <div className="card-class2">
      <img className="img-detail" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{`${stock} Disponibles!`}</p>
        <p className="card-text">{`${detail}`}</p>
      </div>
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-dark">Ir al carrito</button>
        </Link>
      </div>
    </div>

  );
  
};

export default ItemDetail;
