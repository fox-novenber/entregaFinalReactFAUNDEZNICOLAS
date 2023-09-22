import '../Item/Item.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({info}) => {

    return (
        <Link to= {`/detalle/${info.id}`} className='producto'>
            <img src={info.img}></img>
            <p>{info.name}</p>
        </Link> 
    )
}

export default Item