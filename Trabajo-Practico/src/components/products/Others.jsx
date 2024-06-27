import { useEffect, useState } from 'react';
import Item from '../item/Item';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const Others = () => {
    const [others, setOthers] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, 'Products');

            // Construir la consulta para filtrar por categoría
            const q = query(itemsCollection, where('category', '==', "otros"));

            try {
                const snapshot = await getDocs(q);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setOthers(data);
                console.log('Productos filtrados por categoría:', data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h2>Otros productos</h2>
            <ul>
                <div className="mt-5">
                    <Item items={others} />
                </div>
            </ul>
        </div>
    );
};

export default Others;