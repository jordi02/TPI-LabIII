// ItemAdmin.js
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import "./ItemAdmin.css";

const ItemAdmin = ({ item, onDelete }) => {
  const { title, price, pictureUrl, id } = item;

  // Función para manejar la eliminación
  const handleDelete = async (id) => {
    try {
      const db = getFirestore();
      const itemDoc = doc(db, "Products", id);
      await deleteDoc(itemDoc);
      alert("Producto eliminado con éxito");
      onDelete(id); // Llama a la función pasada desde el componente padre para actualizar la lista
    } catch (error) {
      console.error("Error eliminando el producto: ", error);
      alert("Error eliminando el producto");
    }
  };

  return (
    <div className="shell">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="wsk-cp-product">
              <div className="wsk-cp-img">
                <img
                  className="card-img-top img-responsive"
                  src={pictureUrl}
                  alt="Card image cap"
                />
              </div>
              <div className="wsk-cp-text">
                <div className="title-product">
                  <h3>{title}</h3>
                </div>
                <div className="card-foter">
                  <div className="wcf-left">
                    <span className="price">${price}</span>
                  </div>
                  <div className="wcf-right">
                    <Link to={`/edit/${id}`}>
                      <Button variant="primary" className='edit-btn'>Editar</Button>
                    </Link>
                    <Button
                      variant="danger"
                      className="delete-btn"
                      onClick={() => handleDelete(id)}
                    >
                      Borrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAdmin;
