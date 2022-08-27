import React from 'react';
import "./ItemListContainer.css";


const ItemListContainer = ({title}) => {
    return (
        <div className='greeting'>
			<h1>{title}</h1>
		</div>
    );
};

export default ItemListContainer;