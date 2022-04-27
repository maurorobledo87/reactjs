import React from 'react';
import './Item.css';


export const Item = ({img, nombre, precio})=>{
    return (
        <>
            <div className='producto'>
                <img alt='img producto' src={img}/>
                <p>{nombre}</p>
                <p>{precio}</p>
                <button>Detalles</button>
                
            </div>
        </>
    )
    
}