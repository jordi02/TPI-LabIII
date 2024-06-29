// Orders.jsx
import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../userState/StateComponent";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import "./Orders.css"; 

const Orders = () => {
  const { userData } = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");

      let ordersQuery;

      if (userData?.role.includes("admin")) {
        ordersQuery = query(ordersCollection);
      } else {
        ordersQuery = query(ordersCollection, where("buyer.email", "==", userData.email));
      }

      const querySnapshot = await getDocs(ordersQuery);
      const fetchedOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(fetchedOrders);
    };

    if (userData) {
      fetchOrders();
    }
  }, [userData]);

  return (
    <div className="container mt-5">
      <h2>{userData?.role.includes("admin") ? "Todas las Compras" : "Mis Compras"}</h2>
      <div className="row">
        {orders.map((order) => (
          <div key={order.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Orden ID: {order.id}</h5>
                <p className="card-text">Nombre: {order.buyer.name}</p>
                <p className="card-text">Email: {order.buyer.email}</p>
                <p className="card-text">Total: ${order.total}</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>{item.item.title} x {item.quantity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
