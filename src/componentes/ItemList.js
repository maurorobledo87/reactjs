import React, { useEffect, useState } from 'react';
import { Item } from './Item';


export const ItemList  = ({arrayProductos}) => {
    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(()=>{
        arrayProductos.then((pepe)=>{
            setProductos(pepe);
            setShow(!show);
        })
        .catch(()=>{
            console.log('error!')
        })
    },[]);

    const mostrarProducto = productos.map((elemento, index)=>{
        return (
            <div className='producto' key={index}>
                <img alt='img producto' src={elemento.img}/>
                <p>{elemento.nombre}</p>
                <p>{elemento.precio}</p>
                <button>Detalles</button>
            </div>
        )
    })
    return (
        <> 
        {
            show ?  <Item producto={mostrarProducto}></Item>
            : <p>Loading...</p>
        }
       
        </>)

}