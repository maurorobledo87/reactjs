import React, {useState,useContext, useEffect} from 'react';
import './CartWidget.css';
import AddShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contexto } from "../../cartContext/CartContext";

export const CartWidget = () => {
    const {counter} = useContext(contexto);
    const [carroVacio, setCarroVacio] = useState(false);

    useEffect(()=>{
        if(counter === 0){
            setCarroVacio(false)
        } else if(counter > 0){
            setCarroVacio(true)
        }
    }, [counter]);

    return(
        <div className='carritoCant'>
            <AddShoppingCartIcon className='iconoCarrito' />
            {
               carroVacio &&
                <p className='cantCarrito'>{counter}</p>
            }
        </div>
    )
}