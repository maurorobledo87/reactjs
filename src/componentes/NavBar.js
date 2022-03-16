import React from 'react';
import Logo from '../img/logo.png';
import './NavBar.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <a href='./app.js'><img className='logo' alt='logo' src={Logo} /></a>
            <ul className='listaNav'>
                <li ><a className='list' href='#'>Fútbol</a></li>
                <li ><a className='list' href='#'>Basquet</a></li>
                <li ><a className='list' href='#'>Beisbol</a></li>
            </ul>
            <button className='login'>Login</button>
            <AddShoppingCartIcon />
        </nav>
    );
};
export default NavBar; 