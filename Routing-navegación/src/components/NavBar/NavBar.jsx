import React from 'react'
import "./NavBar.css"

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='nav-container'>
            <ul className='nav-ul'>
                <Link className='nav-li' to="/">Home</Link>
                <Link className='nav-li' to="/about">About</Link>
                <Link className='nav-li' to="/contact">Contact</Link>
                <Link className='nav-li' to="/category/Human">Human</Link>
                <Link className='nav-li' to="/category/Alien">Alien</Link>
            </ul>
        </nav>
    )
}

export default NavBar