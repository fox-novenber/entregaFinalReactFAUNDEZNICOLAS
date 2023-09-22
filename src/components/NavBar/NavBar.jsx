import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom'

export  const NavBar = () => {
    return(
        <div className="container">
            <nav className="nav">
                <div className="marca">
                    <NavLink className="navlink" to = '/'> mi eccomerse</NavLink> 
                </div>
                <ul className="navlista">
                    <li>
                    <NavLink className="navlink" to = '/categoria/celular'> celulares</NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to = '/categoria/Tablet'> tablets </NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to = '/categoria/relog'> reloges </NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to = '/cart'>
                        <CartWidget/>
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar