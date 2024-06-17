// AdminLogic.js
import { useState, useEffect } from "react";
import AdminItemList from "./AdminItemList";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const AdminLogic = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "Products");

    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      console.log(data);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <div className="mt-5">
        <AdminItemList items={items} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default AdminLogic;
