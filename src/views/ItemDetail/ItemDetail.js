import React from 'react'
import "./ItemDetail.css";
import ItemCount from '../../components/ItemCount/ItemCount'
import Swal from 'sweetalert2'

function ItemDetail({ Productos }) {

    const onAdd = () =>{
Swal.fire({
  position: 'center',
  icon: 'success',
  text: '¡Has agregado este producto a tu carrito!',
  showConfirmButton: false,
  timer: 10000,
  footer: '<a href="/cart">Click aquí para finalizar tu compra</a>'
})
    }


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
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
                </div>
            </p>
        </div>
	);
};

export default ItemDetail;