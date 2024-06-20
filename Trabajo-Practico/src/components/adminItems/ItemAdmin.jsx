// ItemAdmin.js
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import "./ItemAdmin.css";

const ItemAdmin = ({ items, handleDelete, handleEdit, handleChange, handleSave, editItem, setEditItem, editValues }) => {

  //const { title, price, pictureUrl, id } = item;

  return (

    <div className="container">
      <div className="row">

        {items.map((item) => (
          <div key={ItemAdmin.id} className="col-sm">
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
                              name="price"
                              value={editValues.price}
                              onChange={handleChange}
                            />
                            <Button variant="success" onClick={() => handleSave(item.id)}>
                              Guardar
                            </Button>
                            <Button variant="secondary" onClick={() => setEditItem(null)}>
                              Cancelar
                            </Button>
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
        ))};

      </div>
    </div>

  );

};

ItemAdmin.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ItemAdmin;
