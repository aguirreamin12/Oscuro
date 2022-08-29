import React from 'react';
import "./ItemListContainer.css";
import ItemCount from '../ItemCount/ItemCount.js';

const ItemListContainer = ({title}) => {

    const onAdd = (cantidad) =>{
        console.log(`Se agregaron ${cantidad} unidades`)
    }

    return (
        <div className='greeting'>
			<h1>{title}</h1>

            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
		</div>
    );
};

export default ItemListContainer;