import React, { useState } from "react";
import '../ItemDetail/ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


export const ItemDetail = ({data}) => {

    const [goToCart,setGoToCart]= useState(false)
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart (true)
        addProduct (data, quantity)
    }


    return (
        <div className="container">
            <div className="detail">
                <img className="detail-img" src={data.img}></img>
                <div>
                    <h1> {data.description} </h1>
                    {
                        goToCart
                            ? <Link to = '/cart'> terminar compra</Link>
                            : <ItemCount  initial = {1} stock={5} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default ItemDetail