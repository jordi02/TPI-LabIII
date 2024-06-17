import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemDoc = doc(db, "items", id);
        getDoc(itemDoc).then((snapshot) => {
            setItem({ ...snapshot.data(), id: snapshot.id });
            setLoading(false);
           ;
        });
    }, [id]);
    return (
        <>
            <div className="mt-5">
                <ItemDetail item={item} />
            </div>
        </>
    );
};




export default ItemDetailContainer;