import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

function Lobby(){

    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    return(
        <> 
        <div className="content">
        <Navbar/>
            <div className="lobby" style={styleGrey}>
                The Lobby
            </div>

            <div id="join-card">
                <Link to="/draw"><button type="button">Join</button></Link>
            </div>

            <button id="new-card-btn" type="submit" className="button-style"> + </button>
        </div>
        </>
    )
}

export default Lobby;