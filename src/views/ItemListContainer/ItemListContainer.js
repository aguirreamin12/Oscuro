import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import Progress from '../../components/Progress/Progress';

// FIREBASE
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemListContainer = () => {

    const [Productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const getProductos = async () => {
		const q = query(
			collection(db, 'oscuro') 
		);
		const docs = [];
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setProductos(docs);
	};

    useEffect(() => {
		getProductos();
	}, []);

    return (
    <div className='ItemList'>
        
        {Productos.map((productos) => {
            return (
                <div key={productos.id}>
                    <ItemList Productos = {Productos}/>
                </div>
            )
            
        })}
        
    </div>

    );
};

export default ItemListContainer;