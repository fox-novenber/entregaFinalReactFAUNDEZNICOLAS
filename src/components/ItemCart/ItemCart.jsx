import React from "react";
import { useCartContext, useContext } from "../../context/CartContext";
import './ItemCart.css';



const ItemCart = ({ product }) => {

    const {removeProduct} = useCartContext ()


    return (
        <div className="itemcart">
            <img src={ product.img} alt={product.description}/>
            <div>
                <p>Titulo: {product.name} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio Uni. : {product.price} </p>
                <p>Subtotal: {product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)}> ELIMINAR </button>

            </div>

        </div>
    )
}

export default ItemCart