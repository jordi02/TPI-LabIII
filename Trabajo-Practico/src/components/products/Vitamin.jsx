import { useEffect, useState } from 'react';
import Item from '../item/Item';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const Vitamins = () => {
    const [vitamins, setVitamins] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, 'Products');

            // Construir la consulta para filtrar por categoría
            const q = query(itemsCollection, where('category', '==', "multivitaminicos"));

            try {
                const snapshot = await getDocs(q);
                const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setVitamins(data);
                console.log('Productos filtrados por categoría:', data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h2>Todos nuestros Multivitaminicos</h2>
            <ul>
                <div className="mt-5">
                    <Item items={vitamins} />
                </div>
            </ul>
        </div>
    );
};

export default Vitamins;