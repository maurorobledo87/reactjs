import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from './Item';


export const ItemList  = ({arrayProductos}) => {

    const onAdd = (cont) => {
        console.log('agregaste ' + cont + ' productos') 
    }

    return (
        <> 
        <div className='cajaProducto'>
       {          
        arrayProductos.map((elemento, index)=>{
            return(
                <NavLink to={'/producto/'+elemento.id} key={index}>
                    <Item {...elemento} onAdd={onAdd} />
                </NavLink>
                );
            })
        }
        </div>
     
       
        </>)

}