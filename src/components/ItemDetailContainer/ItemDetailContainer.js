import React, { useEffect, useState } from 'react';
import { getFetch } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail';
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
            <ItemDetail Productos = {Productos}/>
        }
    </div>
    );
};

export default ItemListContainer;