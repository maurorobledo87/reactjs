import React from 'react';
import Logo from '../img/logo.png';
import './NavBar.css';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = ({listaLinks}) => {
    return (
        <nav className='navbar'>
            <NavLink to={''}><img className='logo' alt='logo' src={Logo} /></NavLink>
          
            {listaLinks.map((elemento)=>{
                return <NavLink to={elemento.route} key={elemento.id} className='list'>{elemento.name}</NavLink>
            })}
            <NavLink className='login' to={''}>Login</NavLink>
            <NavLink to={"/cart"}>
                <CartWidget/>
            </NavLink>         
                        
        </nav>
    );
};
export default NavBar; 