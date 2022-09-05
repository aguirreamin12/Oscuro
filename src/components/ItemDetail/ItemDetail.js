import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {
	return (
		<div className='ItemDetail'>
            <img className='Producto' src='https://media1.sistemacontinuo.com.ar/5289/remera-hombre-sublimable.jpg' alt='Remera Blanca'></img>

            <h1 className='nombreProducto'>Remera Blanca</h1>
            <p className='details'>
                <ul>
                    <li>Material: algodón con un 80% de poliester</li>
                    <li>Cuello redondo</li>
                    <li>Excelente confección con unas costuras resistentes</li>
                    <li>Color: blanco</li>
                </ul>
                <h2 className='precio'>Precio: $2700</h2>
                <div className='counter'>
                <ItemCount stock={5} initial={1}/>
                </div>
            </p>
        </div>
	);
};

export default ItemDetail;