import React, { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {getDoc, collection, doc} from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [productoDetalle, setProductoDetalle] = useState([]);
    const [loading, setLoading] = useState(true);       
    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection,id);
        getDoc(refDoc)
        .then((result) => {
            const produ = {
               id,
                ...result.data()
            }
            setProductoDetalle(produ);
            setLoading(!loading);
        })
        .catch(()=>{
            console.log('Error')
        })
    }, [id]);

    return (
            <div className="cardContainer">
                { loading ?
                    <p>Loading...</p>
                    :
                    <ItemDetail productoDetalle={productoDetalle} />
                }
            </div>
        )
}