import React, {useContext} from "react";
import { contexto } from "./CartContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import './Cart.css';

export const Cart = () => {
    const {cart, removeItem, clear, total} = useContext(contexto);

    const deleteElement = (id) =>{
        removeItem(id);
    }
    const vaciarCarrito = () => {
        clear();
    }

    const productoCarrito = cart.map((item)=>{
        return(
            <li className="listaCarrito" key={item.id}>
                <img src={item.img} alt='foto-producto' className='img-carrito' />
                <p>{item.nomb}</p>
                <p>{item.precio}</p>
                <p>{item.quantity}</p>
                <DeleteIcon className='btnDeleteProduct' onClick={(()=>deleteElement(item.id))} />
            </li>
        )
    })

    return(
       <div className="cartContainer">
                    <div>
                        {productoCarrito}
                    </div>
            <p>TOTAL: {total}</p>
            <button className="btnCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <NavLink to={'/'}>
                <button className='btnCarrito'>Volver al inicio</button>
            </NavLink>
        </div>
    )
}