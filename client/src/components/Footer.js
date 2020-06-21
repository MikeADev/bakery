import React from 'react'
import CupcakeLogo from '../assets/images/cupcake.svg'

export const Footer = () => {
    return (
        <footer className="content-paragraph">
            <div className="bottom">
                <img src={CupcakeLogo} alt="cupcake logo" />
                <h1 className="heading">TastyPastry</h1>
                <p>Copyright &copy; 2020. All rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer