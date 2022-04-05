import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

const productosIniciales = [
    {id:1, nombre:'Camiseta Argentina', precio:1300, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg', categoria: "futbol"},
    {id:2, nombre:'Camiseta Alemania', precio:1500, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f1fd9b843f84dd8a08daa990116c5a8_9366/Camiseta_Titular_Alemania_Blanco_EH6103_01_laydown.jpg', categoria: "futbol"},
    {id:3, nombre:'Camiseta Real Madrid', precio: 1200, img:'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a0e3da04ee4d4f2fa393ab7400cf909e_9366/Camiseta_Local_Oficial_Real_Madrid_20-21_Blanco_FM4736_01_laydown.jpg', categoria: "futbol"},
    {id:4, nombre:'Boston Celtics', precio: 1100, img:'https://images.footballfanatics.com/boston-celtics/boston-celtics-fanatics-branded-nba-play-offs-21-22-dunk-graphic-t-shirt-mens_ss4_p-13321535+u-3kf40kyf95ba5djbsyaw+v-0336fc954c714f32ad32e46828ee88d9.jpg?_hv=1&w=900', categoria: "basquet"},
    {id:5, nombre:'LA Lakers', precio: 1450, img:'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-fanatics-branded-true-classic-graphic-t-shirt-mens_ss4_p-12085783+u-148er2otadf8kj1mj8sy+v-5192957109534905a46f91075198cd20.jpg?_hv=1&w=900', categoria: "basquet"},
    {id:6, nombre:'Miami Heats', precio: 1550, img:'https://images.footballfanatics.com/miami-heat/miami-heat-fanatics-branded-nba-play-offs-21-22-dunk-graphic-t-shirt-mens_ss4_p-13321544+u-10unxc5znf1edp3nttv9+v-d54818e667a347c5a7f7ded4e3b50637.jpg?_hv=1&w=900', categoria: "basquet" }, 
    {id:7, nombre:'Red Bull Racing', precio: 2050, img:'https://images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-polo_ss4_p-13300699+u-2e78bwhasmsuzi5zyiun+v-c201179ba83d4aeea1d46bdc9f96dfb4.jpg?_hv=1&w=340', categoria: "formula1" },
    {id:8, nombre:'Ferrari', precio: 2300, img:'https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2022-team-charles-leclerc-t-shirt_ss4_p-13300626+u-cu7zp6f3tjc6yh8v2srz+v-e71a9545e7c24bcdb0f6de8c3c689ab2.jpg?_hv=1&w=900', categoria: "formula1" },
    {id:9, nombre:'Mercedes', precio: 2150, img:'https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2022-team-t-shirt-black_ss4_p-13300567+u-eutxfv4porjwk2sziso7+v-f9305d5a775b41f585f419fd10c5c54f.jpg?_hv=1&w=340', categoria: "formula1" },
]
const promesa = new Promise ((res, rej) => {
setTimeout(() => {
    res(productosIniciales);
}, 2000);
});


export const ItemListContainer = ({nombre, apellido}) => {

    const [productos, setProductos] = useState([]);
    const [show, setShow] = useState(false);
    const {name} = useParams();

    useEffect(()=>{
        setShow(false);
        promesa.then((pepe)=>{
            if(name){
                setProductos(pepe.filter( (producto) => producto.categoria === name ))
            } else{
                setProductos(pepe);
            }
            setShow(true);
        })
        .catch(()=>{
            console.log('error!')
        })
    },[name]);

    return (
        <>
            <h1 className='saludo'>BIENVENIDO {nombre} {apellido}</h1> 
            <p className='saludo'>Disfruta de nuestros productos</p>
            {
                show ?
                <ItemList arrayProductos={productos}></ItemList>            
                : <p>Loading...</p>
            }
            
        </>
    )
}

