import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../CartContext";
import "./ItemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "Products", id);
    getDoc(itemDoc).then((snapshot) => {
      setItem({ ...snapshot.data(), id: snapshot.id });
    });
  }, [id]);

  const handleIncrease = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(item, quantity);
  };

  return (
    <div className="mt-5">
      <div className="item-detail-container">
        <img className="img-detail" src={item?.pictureUrl} alt="Item" />
        <div className="item-detail-body">
          <h5 className="item-detail-title">{item?.title}</h5>
          <p className="item-detail-text">{item?.detail}</p>
          <p className="item-detail-price">{`$${item?.price}`}</p>

          <div className="quantity-controls">
            <button
              onClick={handleDecrease}
              className="btn btn-outline-secondary"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="btn btn-outline-secondary"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn btn-primary add-to-cart-btn"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
