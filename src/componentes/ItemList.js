import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from './Item';

export const ItemList  = ({productos}) => {
    return (
        <> 
            <div className='cajaProducto'>
        {          
            productos.map((elemento, index)=>{
                return(
                    <NavLink to={'/producto/'+elemento.id} key={index}>
                        <Item {...elemento} />
                    </NavLink>
                    );
                })
        }
        </div>          
        </>
        )
}