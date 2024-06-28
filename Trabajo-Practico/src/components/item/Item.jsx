// src/components/Item/Item.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import useDarkMode from "../hooks/useDarkMode"; // Importa el hook de modo oscuro
import "./Item.css";

const Item = ({ items }) => {
  const [isDarkMode] = useDarkMode(); // Obtén el estado del modo oscuro

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-sm">
            <div className="shell">
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div
                      className={`wsk-cp-product ${isDarkMode ? "dark" : ""}`}
                    >
                      <div className="wsk-cp-img">
                        <img
                          className="card-img-top img-responsive"
                          src={item?.pictureUrl}
                          alt="Card image cap"
                        />
                      </div>
                      <div className="wsk-cp-text">
                        <div className="title-product">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="card-foter">
                          <div className="wcf-left">
                            <span className="price">${item?.price}</span>
                          </div>
                          <div className="wcf-right">
                            <Link to={`/item/${item?.id}`}>
                              <Button variant="success" className="buy-btn">
                                Comprar
                              </Button>
                            </Link>
                          </div>
                        </div>
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
  );
};

Item.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Item;
