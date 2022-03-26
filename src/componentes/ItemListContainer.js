import React from 'react';
import './ItemListContainer.css';
import { ItemCount } from './ItemCount';

export const ItemListContainer = ({nombre, apellido, productos}) => {
    const onAdd = (cont) => {
        console.log('agregaste ' + cont + ' productos') 
    }
    return (
        <>
            <h1 className='saludo'>BIENVENIDO {nombre} {apellido}</h1> 
            <p className='saludo'>Disfruta de nuestros productos</p>
            <div className='grillaProductos'>
                {productos.map((elemento,index)=>{
                    return( 
                        <div key={index}>
                            <div className='cajaProducto'>
                                <p>{elemento.nombre}</p>
                                <p>{elemento.precio}</p>
                            </div>
                        </div>
                        )}
                )}
            </div>
            <ItemCount stock={10} initial={0} funcion={onAdd}></ItemCount>
        </>
    )
}

