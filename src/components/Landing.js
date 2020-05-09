import React from 'react';
import logo from '../images/Untitled_Artwork-1 2.png';
import {Link} from 'react-router-dom';


function Landing(){
    const stylePink = {
        color: "#ffa09a",
        paddingTop: "10px",
    }
    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    return(
        <div className="content" align="center">
            <div className="title">
                <div style={styleGrey} >Pixe</div>
                <div style={stylePink} >Love</div>
            </div>
            <div id="landing-logo">
                <img src={logo} alt="logo" />
            </div>
            <Link to="/lobby"> <button type="button">Enter</button></Link>
        </div>
    )
}

export default Landing;