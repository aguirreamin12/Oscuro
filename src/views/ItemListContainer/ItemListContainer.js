import React, { useEffect, useState } from 'react';
import { getFetch } from '../../Mock'
import ItemList from '../../components/ItemList/ItemList';
import Progress from '../../components/Progress/Progress';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

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
    <div className='ItemList'>
        <Link to='/item'>
        {
            loading
            ?
            <Progress/>
            :
            <ItemList Productos = {Productos}/>
        }
        </Link>
    </div>

    );
};

export default ItemListContainer;