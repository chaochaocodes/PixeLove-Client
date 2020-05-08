import React from 'react';
import logo from '../images/Untitled_Artwork-1 2 cropped.png';
import {Link} from 'react-router-dom';


function Navbar(){
    const stylePeach = {
        color: "#EFB0A1",
        fontSize: 50,
    }
    const styleGrey = {
        color: "#6B6B6B",
        fontSize: 50,
    }

    return(
        <div className="navbar" align="left">
            <Link to="/" style={styleGrey}>Pixe</Link>
            <Link to="/" style={stylePeach}>Love</Link>
            <div id="navbar-logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}

export default Navbar;