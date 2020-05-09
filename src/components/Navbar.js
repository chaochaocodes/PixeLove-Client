import React from 'react';
import logo from '../images/Untitled_Artwork-1 2 cropped.png';
import {Link} from 'react-router-dom';


function Navbar(){
    const stylePeach = {
        color: "#EFB0A1",
    }
    const styleGrey = {
        color: "#6B6B6B",
    }

    return(
        <div className="topnav" >
                <Link to="/" style={styleGrey}>Pixe</Link>
                <Link to="/" style={stylePeach}>Love</Link>
                <div id="navbar-logo">
                    <Link to="/"><img src={logo} alt="logo"/></Link> 
                </div>
        </div>
    )
}

export default Navbar;