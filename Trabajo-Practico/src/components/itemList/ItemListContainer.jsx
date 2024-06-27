import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import Siete from "../../assets/itemListContainer/7.jpg";
import Ocho from "../../assets/itemListContainer/8.jpg";
import Nueve from "../../assets/itemListContainer/9.jpg";
import Diez from "../../assets/itemListContainer/10.jpg";
import './ItemListContainer.css';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Products");

    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
      setFilteredItems(data); // Inicialmente mostrar todos los items
    });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredItems(items); // Mostrar todos los productos si no hay término de búsqueda
    } else {
      const filtered = items.filter((item) => {
        const titleMatch = item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || categoryMatch;
      });
      setFilteredItems(filtered);
    }
  }, [searchTerm, items]);

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Nueve} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px", borderRadius: "5px", margin: "0 auto", maxWidth: "50%" }}>
              <h5>Consulta nutricional</h5>
              <p>Ofrecemos consultas online y presenciales para tu comodidad y conveniencia.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Diez} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px", borderRadius: "5px", margin: "0 auto", maxWidth: "50%" }}>
              <h5>Libro disponible</h5>
              <p>Adquirilo en nuestra tienda y obtené descuentos exclusivos</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Siete} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px", borderRadius: "5px", margin: "0 auto", maxWidth: "50%" }}>
              <h5>Master en nutricion deportiva</h5>
              <p>Junto a la UCAM y al ICNS, 2 años de pura capacitación</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Ocho} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "10px", borderRadius: "5px", margin: "0 auto", maxWidth: "50%" }}>
              <h5>Nuevos productos en nuestros catálogos</h5>
              <p>HXNutrition nos acercan Fit Food Gourmet, para llenarte de energía</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-5">
        <h1>Productos</h1>
        <div className="search-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Buscar por título o categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '300px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
        <Item items={filteredItems} />
      </div>
    </>
  );
};

export default ItemListContainer;
