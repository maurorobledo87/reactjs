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

    const onAdd = (cont) => {
        console.log('agregaste ' + cont + ' productos') 
    }

    return (
        <> 
        <div className='cajaProducto'>
       { 
       show ?  
       productos.map((elemento, index)=>{
           return(
            <Item {...elemento} onAdd={onAdd} key={index}></Item>
        );
        })
            : <p>Loading...</p>
            }
        </div>
        {
            
        }
       
        </>)

}