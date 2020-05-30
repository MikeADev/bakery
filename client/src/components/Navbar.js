import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <ul className="navbar-nav subheading">
                        <li className="nav-item">
                            <NavLink activeClassName='active' exact to={`/`}>Home</NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' to={`/about`}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' to={`/products`}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' to={`/contact`}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='active' to={`/cart`}>Cart</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
