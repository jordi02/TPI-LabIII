import { useState, useEffect } from "react";
import Item from "../item/Item";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  //const [loading, setLoading] = useState(true);

  useEffect(() => {

    //setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "Products");

    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setItems(data);
      console.log(data);
      //setLoading(false);

    });

  },[]);

  return (

    <>
      <div className="mt-5">
        <Item items={items} />
      </div>
    </>

  );

};

export default ItemListContainer;
