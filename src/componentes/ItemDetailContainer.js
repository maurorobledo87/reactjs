import React, { useEffect, useState } from "react";
import {ItemDetail} from './ItemDetail';

let api = fetch('https://mocki.io/v1/d0fc5fa2-6ec8-4707-83f0-7055af3b9901')
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
    useEffect(()=>{
        promise.then(()=>{
            setProductoDetalle(api);
        })
        .catch(()=>{
            console.log('Error')
        })
    },[]);
    return (
        <>
        <div className="cardContainer">
            {
            productoDetalle.map((productoJson)=>{
                return(
                    <>
                    <ItemDetail {...productoJson}></ItemDetail>
                    </>
                )
            })
            }
        </div>
        </>
    )
}