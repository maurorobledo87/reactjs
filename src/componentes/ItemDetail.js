import React, {useState} from "react";
import './ItemDetail.css';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({id, nombre, stock, material, precio, img})=>{
    
    const [cantidadProductos, setCantidadProductos] = useState(1); 
    const [productoCarrito, setProductoCarrito] = useState({});
    const [productosCarrito, setProductosCarrito] = useState([]);
    const onAdd = (contador) => {

        setCantidadProductos(contador); 
        // console.log('Agregaste ' + cantidadProductos + ' del producto ' + id);
        setProductoCarrito({img, nombre, precio, id, cantidadProductos});
        // console.log(productoCarrito);
        
        return(productoCarrito) 
    }
    const listaCarrito = () => { 
        setProductosCarrito([...productosCarrito,productoCarrito]) ;
        console.log(productosCarrito);
    }
    return (
        <>
            <div className="cardDetalle" id={id}>
                <img src={img} alt='imagen-producto'/>
                <h1>{nombre}</h1>
                <p>Stcok disponible: {stock}</p>
                <p>Material: {material}</p>
                <p>Precio: {precio}</p>
            </div>
            <ItemCount stock={10} initial={0} id={id} onAdd={onAdd} productoCarrito={productoCarrito}></ItemCount>
            <button className= 'btnCarrito' onClick={listaCarrito}>Finalizar compra</button>
        </>
    )
}