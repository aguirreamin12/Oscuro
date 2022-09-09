import React from 'react';
import "./navBar.css";
import logo from './logo.png';
import cart from './cart.png'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="header">
            <NavLink to='/'>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            </NavLink>
            <nav>
                <ul className='nav-links'> 
                    <NavLink to='/'> <li>Inicio</li></NavLink>
                    <NavLink to={`/categories/remeras`}><li>Remeras</li></NavLink>
                    <NavLink to={`/categories/buzos`}><li>Buzos</li></NavLink>
                </ul>
            </nav>
            <div className='cart'>
            
            <img src={cart} alt='carrito'></img>

            </div>
        </header>
    );
};

export default NavBar;