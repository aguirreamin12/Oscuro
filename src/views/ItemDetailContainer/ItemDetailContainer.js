import React, { useEffect, useState } from 'react';
import { getFetch } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail';
import Progress from '../../components/Progress/Progress';

const ItemDetailContainer = () => {

    const [Productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then((respuesta) => setProductos(respuesta.find(prod => prod.id === 1)))
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

export default ItemDetailContainer;