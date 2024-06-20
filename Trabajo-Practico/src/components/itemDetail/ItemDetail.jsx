import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetail.css";

const ItemDetail = () => {
    //const { title, stock, pictureUrl, detail } = item;

    const [item, setItem] = useState({});
    //const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        //setLoading(true);
        const db = getFirestore();
        const itemDoc = doc(db, "Products", id);
        getDoc(itemDoc).then((snapshot) => {
            setItem({ ...snapshot.data(), id: snapshot.id });
            //setLoading(false);
        });
    }, [id]);

    return (

        <div className="mt-5">
            <div className="card-class2">
                <img className="img-detail" src={item?.pictureUrl} alt="Card image cap" />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{item?.title}</h5>
                    <p className="card-text">{`${item?.stock} Disponibles!`}</p>
                    <p className="card-text">{item?.detail}</p>
                </div>
            </div>
        </div>

    );
};

export default ItemDetail;
