import React, {useState, useContext} from "react";
import './ItemDetail.css';
import { ItemCount } from './ItemCount';
import { NavLink } from "react-router-dom";
import { contexto } from "./CartContext";

export const ItemDetail = ({productoJson})=>{
    
    const {addItem, isInCart, getCantidadProducts, getTotalCarrito } = useContext(contexto);

    const [finalizarCompra, setFinalizarCompra] = useState(true);

    const onAdd = (contador) => {
        addItem(productoJson,contador);
        setFinalizarCompra(false);
        isInCart(productoJson.id);
        getTotalCarrito(Number(productoJson.precio), contador);
        getCantidadProducts();
    }

    return (
        <>
            <div className="cardDetalle" id={productoJson.id}>
                <img src={productoJson.img} alt='imagen-producto'/>
                <h1>{productoJson.nombre}</h1>
                <p>Stcok disponible: {productoJson.stock}</p>
                <p>Material: {productoJson.material}</p>
                <p>Precio: {productoJson.precio}</p>
            </div>
               {
                    finalizarCompra ?
                        <ItemCount stock={productoJson.stock} initial={1} nombre={productoJson.nomb} precio={productoJson.precio} id={productoJson.id} onAdd={onAdd}/>
                    :
                    <>
                        <NavLink to={'/cart'}>
                                <button className='btnCarrito btnFinalizarCompra' >Ir al carrito</button>
                        </NavLink>
                        <NavLink to={'/'}>
                            <button className='btnCarrito btnFinalizarCompra'>Seguir comprando</button>
                        </NavLink>
                    </>
               }           
        </>
    )
}