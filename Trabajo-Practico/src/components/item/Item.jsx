import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importar botón de React Bootstrap
import "./Item.css";

const Item = ({ item }) => {
    const { title, price, stock, pictureUrl, detail, id, category } = item;
    return (
        <div className="shell">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="wsk-cp-product">
                            <div className="wsk-cp-img">
                                <img className="card-img-top img-responsive" src={pictureUrl} alt="Card image cap" />
                            </div>
                            <div className="wsk-cp-text">
                                <div className="title-product">
                                    <h3>{title}</h3>
                                </div>
                                <div className="card-foter">
                                    <div className="wcf-left"><span className="price">${price}</span></div>
                                    <div className="wcf-right">
                                        <Link to={`/item/${id}`}>
                                            {/* Botón de React Bootstrap */}
                                            <Button variant="success" className='buy-btn'>Comprar</Button>
                                        </Link>
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

export default Item;
