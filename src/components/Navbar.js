import React from 'react';
import {Link} from 'react-router-dom';
import navlogo from '../images/logo_navbar.png'

function Navbar(){
    const stylePink = {
        color: "#ffa09a",
    }
    const styleGrey = {
        color: "#6B6B6B",
    }

    return(
        <div className="topnav" >
            <Link id="nav-link" to="/" style={styleGrey}>Pixe</Link>
            <Link id="nav-link" to="/" style={stylePink}>Love</Link>
            <div id="navbar-logo">
                <Link className="nav-link" to="/"><img src={navlogo} alt="logo"/></Link> 
            </div>
        </div>
    )
}

export default Navbar;