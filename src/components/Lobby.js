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
        <Navbar/>
        {/* <div className="content" align="center"> */}
            <div className="lobby" style={styleGrey} align="center">
                The Lobby
            </div>
            <div id="join-card">
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
            </div>

            <button type="submit" id="add-btn"> + </button>
        {/* </div> */}
        </>
    )
}

export default Lobby;