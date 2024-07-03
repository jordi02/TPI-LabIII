import { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };

    const batch = writeBatch(db);
    const idList = cartItems.map((product) => product.item.id);
    const withoutStock = [];
    const collectionRef = collection(db, "Products");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "in", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Muchas gracias por confiar en nosotros! Su orden de compra: ${addResponse.id}`);
    } else {
      alert(
        "La compra no se completó. No hay suficientes artículos en stock de alguno de los productos selecionados. Disculpe las molestias."
      );
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((element) => element.item.id !== itemId));
  };

  const clear = () => {
    setCartItems([]);
  };

  const addItem = (item, quantity) => {
    const existingItem = cartItems.find(
      (element) => element.item.id === item.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((element) =>
          element.item.id === item.id
            ? { ...element, quantity: element.quantity + quantity }
            : element
        )
      );
    } else {
      setCartItems([...cartItems, { item, quantity }]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, sendOrder, removeItem, clear, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
