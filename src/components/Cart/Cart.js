import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css'


const Cart = () => {

    const { cart, getItemPrice } = useContext(CartContext);

    if (cart.length <= 0) {
        return (
            <div className="carritoVacio">
                    <h1>El carrito de compras está vacío</h1>
                    <Link to='/'><button class="cta">
    <span class="hover-underline-animation"> Hacer compras </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button></Link>
                    </div>
        )
    }
    

    return(
        <div className="finishCompra">
            {
                cart.map((Productos) => <ItemCart key={Productos.id} Productos={Productos}/>)
            }
            <p className="totalPrice">
                Total: {getItemPrice()}
            </p>
            <Link to='/Shop'><button className="btnASendAction">Finalizar Compra</button></Link>        
        </div>
    )
}

export default Cart;