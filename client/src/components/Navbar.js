import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/`}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/products`}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/cart`}>Cart</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
