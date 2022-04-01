import React from 'react';
import './Item.css';
import { ItemCount } from './ItemCount';

export const Item = ({img, nombre, precio, onAdd})=>{
    return (
        <>
            <div className='producto'>
                <img alt='img producto' src={img}/>
                <p>{nombre}</p>
                <p>{precio}</p>
                <button>Detalles</button>
                <ItemCount stock={10} initial={0} funcion={onAdd}></ItemCount>
            </div>
        </>
    )
    
}