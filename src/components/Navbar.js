import React from 'react';
import {Link} from 'react-router-dom';
import navlogo from '../images/logo_slant.png'

function Navbar(){
    const stylePink = {
        color: "#ffa09a",
    }
    const styleGrey = {
        color: "#6B6B6B",
    }

    return(
        <div className="topnav" >
                <Link to="/" style={styleGrey}>Pixe</Link>
                <Link to="/" style={stylePink}>Love</Link>
                <div id="navbar-logo">
                    <Link to="/"><img src={navlogo} alt="logo"/></Link> 
                </div>
        </div>
    )
}

export default Navbar;