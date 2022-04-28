import React, {useState, useContext} from "react";
import './ItemDetail.css';
import { ItemCount } from '../itemCount/ItemCount';
import { NavLink } from "react-router-dom";
import { contexto } from "../../cartContext/CartContext";

export const ItemDetail = ({productoDetalle})=>{
    
    const {addItem, isInCart, getCantidadProducts, getTotalCarrito } = useContext(contexto);
    const [finalizarCompra, setFinalizarCompra] = useState(true);

    const onAdd = (contador) => {
        addItem(productoDetalle,contador);
        setFinalizarCompra(false);
        isInCart(productoDetalle.id);
        getTotalCarrito(Number(productoDetalle.precio), contador);
        getCantidadProducts();
    }

    return (
        <>
            <div className="cardDetalle" id={productoDetalle.id}>
                <img src={productoDetalle.img} alt='imagen-producto'/>
                <h1>{productoDetalle.nombre}</h1>
                <p>Stcok disponible: {productoDetalle.stock}</p>
                <p>Material: {productoDetalle.material}</p>
                <p>Precio: {productoDetalle.precio}</p>
            </div>
               {
                    finalizarCompra ?
                        <ItemCount stock={productoDetalle.stock} initial={1} nombre={productoDetalle.nomb} precio={productoDetalle.precio} id={productoDetalle.id} onAdd={onAdd}/>
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