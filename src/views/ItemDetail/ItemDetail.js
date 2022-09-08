import React from 'react'
import "./ItemDetail.css";

const ItemDetail = ({Productos}) => {
	return (
		<div className='ItemDetail'>
        
            
            <img src={Productos.img} alt={Productos.nombre}/>
            <p className='details'>
                <h1 className='nombreProducto'>{Productos.nombre}</h1>
                <ul>
                    <li>Material: {Productos.material}</li>
                    <li>Cuello: {Productos.cuello}</li>
                    <li>Color: {Productos.color}</li>
                    
                </ul>
                <h2 className='precio'>Precio: ${Productos.precio}</h2>
                <div className='counter'>
                </div>
            </p>
        </div>
	);
};

export default ItemDetail;