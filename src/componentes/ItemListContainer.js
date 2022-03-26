import React from 'react';
import './ItemListContainer.css';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';

const productosIniciales = [
    {id:1, nombre:'Camiseta Argentina', precio:1300, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg'},
    {id:2, nombre:'Camiseta Alemania', precio:1500, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f1fd9b843f84dd8a08daa990116c5a8_9366/Camiseta_Titular_Alemania_Blanco_EH6103_01_laydown.jpg'},
    {id:3, nombre:'Camiseta Real Madrid', precio: 1200, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0e3da04ee4d4f2fa393ab7400cf909e_9366/Camiseta_Local_Oficial_Real_Madrid_20-21_Blanco_FM4736_01_laydown.jpg'}
]
const promesa = new Promise ((res, rej) => {
setTimeout(() => {
    res(productosIniciales);
}, 2000);
});


export const ItemListContainer = ({nombre, apellido}) => {
    const onAdd = (cont) => {
        console.log('agregaste ' + cont + ' productos') 
    }
    return (
        <>
            <h1 className='saludo'>BIENVENIDO {nombre} {apellido}</h1> 
            <p className='saludo'>Disfruta de nuestros productos</p>
            <ItemList arrayProductos={promesa}></ItemList>
            
            <ItemCount stock={10} initial={0} funcion={onAdd}></ItemCount>
        </>
    )
}

