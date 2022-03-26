import React, {useState} from 'react';
 

export const ItemCount = ({stock, initial, funcion }) => {
    const [contador, setContador] = useState (1);
    const sumar = () => {
        if (contador < stock) {
            setContador (contador + 1);
            } else {
                console.log('no hay mas stock')
            }

    }
    const restar = () => {
        if (contador > initial) {
        setContador (contador - 1)
        }
    }
    const agregarAlCarrito = () => {
        funcion(contador);
    }
    return (
        <>
        <h1>{contador}</h1>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={agregarAlCarrito} >Agregar al carrito </button>

        </>
    )
}

