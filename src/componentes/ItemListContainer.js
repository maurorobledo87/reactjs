import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import {getDocs, collection, query, where, orderBy} from 'firebase/firestore';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from './firebase/firebase'

    export const ItemListContainer = ({nombre, apellido}) => {

    const inicial = [];
    const [productos, setProductos] = useState(inicial);
    const [show, setShow] = useState(false);
    const {name} = useParams();

   useEffect(() => {    
        const productosCollection = collection(db, 'productos');
        let q;
        if(name===undefined){
            q = query(productosCollection, orderBy("categoria"));
        } else{
            q = query(productosCollection, where("categoria", "==", name));
        }
        getDocs(q)
        .then((result)=>{
                const docs = result.docs;
                const lista = docs.map(product => {
                    const id = product.id;
                    const producto = {
                       id,
                        ...product.data()
                    }
                    return producto;
                })
                setProductos(lista);
                setShow(true);
        })
        .catch(() => {
            console.log('Error')
        });
    }, [name]);

    return(
        <>
            <h1 className='saludo'>BIENVENIDO {nombre} {apellido}</h1>
            <p className='saludo'>Disfruta de nuestros productos</p>
                {
                   show ?
                   <ItemList productos={productos} id={productos.id}></ItemList>
                   :
                    <p>Loading...</p>
                }
        </>
    )
}

