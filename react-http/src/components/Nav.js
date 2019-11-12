import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle ={
        color: "white"
    }
    return (
        <nav className="nav-links">
            <h3>Logo</h3>
            <ul>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link >
                <Link style={navStyle} to='/contact'>
                    <li>Contact</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav
