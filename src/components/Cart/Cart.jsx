import React from "react";
import { useCartContext } from "../../context/CartContext";
import {Link} from 'react-router-dom'
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext ()
    
    const order= {

        comprador: {
            name: 'NICOLAS',
            email: 'nicolas@nicolas.com',
            telefono: '123456789',
            direccion: ' av. siempre viva 123'
        },
        items: cart.map (product => ({id: product.id, description: product.description, price: product.price, quantity: product.quantity})), 
        total: totalPrice(),        
    }

    const handleClik = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then (({id}) => console.log (id))
    
    }


    if (cart.length === 0) {
        
        return (
            <>
                <p>No hay elementos en el carrito </p>
                <Link to = '/' > Hacer Compras </Link>
            </>
        )
    }
    
    return (
        <>
            {
                cart.map( product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                Total: {totalPrice()}
            </p>
            <button onClick={handleClik}> EMITIR COMPRA </button>
        </>
    )
}

export default Cart