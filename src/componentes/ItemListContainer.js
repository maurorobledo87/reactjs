import React from 'react';
import './ItemListContainer.css';

export const ItemListContainer = ({nombre, apellido, productos}) => {
    return (
        <>
            <h1 className='saludo'>BIENVENIDO {nombre} {apellido}</h1> 
            <p className='saludo'>Disfruta de nuestros productos</p>
            <div className='grillaProductos'>
            {productos.map((elemento,index)=>{
               return <>
                <div className='cajaProducto'>
                    <p>{elemento.nombre}</p>
                    <p>{elemento.precio}</p>
                </div>
            </>
            }
            )}
            </div>
        </>
    )
}

