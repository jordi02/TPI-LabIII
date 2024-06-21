// AdminLogic.js
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
//import AdminItemList from "./AdminItemList";
import ItemAdmin from "./ItemAdmin";
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";

const AdminLogic = () => {

  const navigate = useNavigate(); // Obtén la función navigate

  //Lista con los items
  const [items, setItems] = useState([]);
  //const [loading, setLoading] = useState(true);

  //Trae los productos
  useEffect(() => {
      //setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "Products");

      getDocs(itemsCollection).then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(data);
        console.log(data);
        //setLoading(false);
      }).catch(error => {
        console.error("Error fetching documents: ", error);
        //setLoading(false);
      });
  }, [items]);

  // Agregar nuevo producto
  const [showAddForm, setShowAddForm] = useState(false); // Estado para mostrar el formulario de agregar producto
  const [newProduct, setNewProduct] = useState({ title: "", pictureUrl: "", price: "", description: "" }); // Estado para manejar los valores del formulario de nuevo producto

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const db = getFirestore();
      const itemsCollection = collection(db, "Products");
      await addDoc(itemsCollection, newProduct);
      alert("Producto agregado con éxito");
      setShowAddForm(false); // Ocultar el formulario de agregar producto
      setNewProduct({ title: "", pictureUrl: "", price: "", description: "" }); // Limpiar el formulario
      const snapshot = await getDocs(itemsCollection);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data); // Actualizar la lista de productos
    } catch (error) {
      console.error("Error agregando el producto: ", error);
      alert("Error agregando el producto");
    }
  };

  //Editar items
  const [editItem, setEditItem] = useState(null); // Estado para manejar el ítem en edición
  const [editValues, setEditValues] = useState({ title: "", price: "" }); // Estado para manejar los valores del formulario

  // Función para manejar el inicio de la edición
  const handleEdit = (item) => {
    setEditItem(item.id);
    setEditValues({ title: item.title, price: item.price });
  };

  // Función para manejar el cambio de los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Función para guardar los cambios
  const handleSave = async (id) => {
    try {
      const db = getFirestore();
      const itemDoc = doc(db, "Products", id);
      await updateDoc(itemDoc, {
        title: editValues.title,
        price: editValues.price,
      });
      alert("Producto actualizado con éxito");
      setEditItem(null); // Salir del modo de edición
      updateDelete(id); // Actualiza la lista después de la edición
      
    } catch (error) {
      console.error("Error actualizando el producto: ", error);
      alert("Error actualizando el producto");
    }
    navigate('/Adminlogic');
  };

  //Función para manejar la eliminación del producto
  const handleDelete = async (id) => {

    try {
      const db = getFirestore();
      const itemDoc = doc(db, "Products", id);
      await deleteDoc(itemDoc);
      alert("Producto eliminado con éxito");
      updateDelete(id); // Llama a la función para actualizar la lista
    } catch (error) {
      console.error("Error eliminando el producto: ", error);
      alert("Error eliminando el producto");
    }

  };

  //Actualiza la lista
  const updateDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (

    <>

      <div className="mt-5">
        <ItemAdmin items={items} showAddForm={showAddForm} setShowAddForm={setShowAddForm} newProduct={newProduct} handleAddChange={handleAddChange} handleAddProduct={handleAddProduct} handleEdit={handleEdit} handleChange={handleChange} handleSave={handleSave} editItem={editItem} setEditItem={setEditItem} editValues={editValues} handleDelete={handleDelete} />
      </div>

    </>

  );

};

export default AdminLogic;
