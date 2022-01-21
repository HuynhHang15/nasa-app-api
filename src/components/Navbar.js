import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/NASA_logo.png'


function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className='navbar-links'>
                <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                <Link to='/anyphoto' style={{textDecoration: 'none', color: 'white'}}>Picture of the day</Link>
                <Link to='/videos' style={{textDecoration: 'none', color: 'white'}}>Videos</Link>
            </div>
        </div>
    )
}

export default Navbar
