import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./ItemAdmin.css";

const ItemAdmin = ({ items, showAddForm, setShowAddForm, newProduct, handleAddChange, handleAddProduct, handleDelete, handleEdit, handleChange, handleSave, editItem, setEditItem, editValues }) => {

  return (
    <>
      <div className="mt-5">
        <button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancelar" : "Agregar producto"}
        </button>
        {showAddForm && (
          <div>
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleAddChange}
              placeholder="Nombre del producto"
            />
            <input
              type="text"
              name="pictureUrl"
              value={newProduct.pictureUrl}
              onChange={handleAddChange}
              placeholder="URL de la imagen"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleAddChange}
              placeholder="Precio"
            />
            <input
              type="text"
              name="detail"
              value={newProduct.detail}
              onChange={handleAddChange}
              placeholder="Descripción"
            />
            <input
              type="number"
              name="stock"
              value={newProduct.stock}
              onChange={handleAddChange}
              placeholder="Stock"
            />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleAddChange}
              placeholder="Categoria"
            />
            <button onClick={handleAddProduct}>Guardar</button>
          </div>
        )}
      </div>

      <div className="container">
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-sm">
              <div className="shell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="wsk-cp-product">
                        <div className="wsk-cp-img">
                          <img className="card-img-top img-responsive" src={item.pictureUrl} alt="Card image cap" />
                        </div>
                        <div className="wsk-cp-text">
                          {editItem === item.id ? (
                            <div className="edit-fields">
                              <input
                                type="text"
                                name="title"
                                value={editValues.title}
                                onChange={handleChange}
                              />
                              <input
                                type="text"
                                name="pictureUrl"
                                value={editValues.pictureUrl}
                                onChange={handleChange}
                              />
                              <input
                                type="number"
                                name="price"
                                value={editValues.price}
                                onChange={handleChange}
                              />
                              <input
                                type="number"
                                name="stock"
                                value={editValues.stock}
                                onChange={handleChange}
                              />
                              <div className="button-group">
                                <Button variant="success" onClick={() => handleSave(item.id)}>
                                  Guardar
                                </Button>
                                <Button variant="secondary" onClick={() => setEditItem(null)}>
                                  Cancelar
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="title-product">
                                <h3>{item.title}</h3>
                              </div>
                              <div className="card-foter">
                                <div className="wcf-left">
                                  <span className="price">${item.price}</span>
                                </div>
                                <div className="wcf-right">
                                  <Link to={`/edit/${item.id}`}>
                                    <Button variant="primary" className='edit-btn' onClick={() => handleEdit(item)}>Editar</Button>
                                  </Link>
                                  <Button variant="danger" className="delete-btn" onClick={() => handleDelete(item.id)}>Borrar</Button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ItemAdmin.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ItemAdmin;


