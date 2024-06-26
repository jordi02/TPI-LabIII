import { useState, useEffect } from "react";
import Item from "../item/Item";
//import Uno from "../../assets/itemListContainer/1.jpg";
import Dos from "../../assets/itemListContainer/2.jpg";
import Tres from "../../assets/itemListContainer/3.jpg";
import Cuatro from "../../assets/itemListContainer/4.jpg";
import Cinco from "../../assets/itemListContainer/5.jpg";
import './ItemListContainer.css';
//Modulos Firebase
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

  }, []);

  return (

    <>

      <div className="container-fluid">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Cinco} className="d-block w-100 carousel-image" alt="Uno" />
            </div>
            <div className="carousel-item">
              <img src={Dos} className="d-block w-100 carousel-image" alt="Dos" />
            </div>
            <div className="carousel-item">
              <img src={Tres} className="d-block w-100 carousel-image" alt="Tres" />
            </div>
            <div className="carousel-item">
              <img src={Cuatro} className="d-block w-100 carousel-image" alt="Cuatro" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Item items={items} />
      </div>

    </>

  );

};

export default ItemListContainer;
