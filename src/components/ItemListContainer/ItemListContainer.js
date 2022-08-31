import React, { useEffect, useState } from 'react';
import { getFetch } from '../../Mock'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import Progress from '../Progress/Progress';

const ItemListContainer = () => {

    const [Productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then((respuesta) => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    return (
    <div>
        {
            loading
            ?
            <Progress/>
            :
            <ItemList Productos = {Productos}/>
        }
    </div>
    );
};

export default ItemListContainer;