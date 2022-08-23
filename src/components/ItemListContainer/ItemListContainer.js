import React from 'react';
import "./ItemListContainer.css";

const ItemListContainer = (greeting) => {
    return (
        <div className='greeting'>
			<h1>{greeting.title}</h1>
		</div>
    );
};

export default ItemListContainer;