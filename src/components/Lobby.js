import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { api } from "../services/api";

function Lobby() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.room.getRooms().then(json => {
      setRooms(json);
    });
  });

  const styleGrey = {
    color: "#6B6B6B",
    paddingTop: "10px"
  };

  const createRoom = () => {
    api.room.newRoom().then(json => console.log(json));
  };

  return (
    <>
      <Navbar />
      <div className="content" align="center">
        <div className="lobby" style={styleGrey}>
          The Lobby
        </div>
        {rooms.map(room => {
          return (
            <div id="join-card">
              <Link to="/draw">
                <button type="button" id="join-btn">
                  Join {room.id}
                </button>
              </Link>
            </div>
          );
        })}

        <button onClick={() => createRoom()}>Create Room</button>
      </div>
    </>
  );
}

export default Lobby;
