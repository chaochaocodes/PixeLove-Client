import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { api } from "../services/api";

function Lobby(){

    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }


    const createRoom = () => {
        console.log("I am here");
        api.room.newRoom().then(json => console.log(json));
      };

    return(
        <> 
        <Navbar/>
        <div className="content" align="center">
            <div className="lobby" style={styleGrey}>
                The Lobby
            </div>
            <div id="join-card">
                <Link to="/draw"><button type="button" id="join-btn">Join</button></Link>
            </div>

            <button onClick={() => createRoom()}>Create Room</button>

        </div>
        </>
    )
}

export default Lobby;