import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);
    const [stock] = useState(5);

    const CounterUp = () => {
        if (counter < stock){
        setCounter(counter + 1);
        }
    };

    const CounterDown = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
        
    }

    return (
    <div className="ItemCount">
        <h1>Stock actual: {stock} unidades</h1>
        <div className='cantidad'>
        <button className='restar' onClick={CounterDown}>-</button>
        <p>{counter}</p>
        <button className='sumar' onClick={CounterUp}>+</button>
        </div>
        <button className='carrito'>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;