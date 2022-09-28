import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Progress from '../../components/Progress/Progress';
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {

    const [Productos, setProductos] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();


    useEffect(() => {
        
    }, [id])

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