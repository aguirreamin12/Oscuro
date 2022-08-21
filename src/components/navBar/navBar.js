import React from 'react';
import "./navBar.css";
import logo from './logo.png';

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
        </header>
    );
};

export default NavBar;