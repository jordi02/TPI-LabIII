import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
    const { title, stock, pictureUrl, detail } = item;

    return (
        <div className="card-class2">
            <img className="img-detail" src={pictureUrl} alt="Card image cap" />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{`${stock} Disponibles!`}</p>
                <p className="card-text">{detail}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
