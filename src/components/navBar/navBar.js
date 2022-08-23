import React from 'react';
import "./navBar.css";
import logo from './logo.png';
import cart from './cart.png'

const NavBar = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <nav>
                <ul className='nav-links'> 
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Remeras</a></li>
                    <li><a href='#'>Buzos</a></li>
                </ul>
            </nav>
            <div className='cart'>
            
            <img src={cart} alt='carrito'></img>

            </div>
        </header>
    );
};

export default NavBar;