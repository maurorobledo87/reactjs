import React from "react";
import './ItemDetail.css';

export const ItemDetail = ({id, nombre, stock, material, precio, img})=>{
    return (
        <>
            <div className="cardDetalle">
                <img src={img}/>
                <h1>{nombre}</h1>
                <p>Stcok disponible: {stock}</p>
                <p>Material: {material}</p>
                <p>Precio: {precio}</p>
            </div>
        </>
    )
}