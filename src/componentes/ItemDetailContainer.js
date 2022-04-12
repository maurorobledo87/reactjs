import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from './ItemDetail';

let api = fetch('https://mocki.io/v1/08a4734e-7caa-4120-8fb6-6cc6024bb5b7')
.then((response)=>response.json())
.then((apiJson)=>{
api = apiJson
})

const promise = new Promise((res)=>{
    setTimeout(() => {
        res(api)
    }, 2000);
}) 

export const ItemDetailContainer = () => {
    const [productoDetalle, setProductoDetalle] = useState([]);
    const {id} = useParams();
    // const getItems = async
    useEffect(()=>{
        promise.then(()=>{
            const filtrado = api.filter((a)=>{return a.id === Number(id)})
            setProductoDetalle(filtrado);
        })
        .catch(()=>{
            console.log('Error')
        })
    },[id]);
    return (
        <>
        <div className="cardContainer">
            {
            productoDetalle.map((productoJson)=>{
                return(                    
                    <ItemDetail {...productoJson} key={productoJson.id}></ItemDetail>
                )
            })
            }
        </div>
        </>
    )
}