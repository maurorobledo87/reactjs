import React from 'react';
import Logo from '../img/logo.png';
import './NavBar.css';
import { CartWidget } from './CartWidget';

const NavBar = ({children, listaLinks}) => {
    return (
        <nav className='navbar'>
            <a href='./app.js'><img className='logo' alt='logo' src={Logo} /></a>
          
            {listaLinks.map((elemento,index)=>{
                return <a key={index} className='list' href='#'>{elemento}</a>
            })}
            <button className='login'>Login</button>
            <CartWidget></CartWidget>            
        </nav>
    );
};
export default NavBar; 