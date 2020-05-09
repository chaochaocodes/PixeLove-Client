import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { api } from "../services/api";

function Lobby() {
  const [rooms, setRooms] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    api.room.getRooms().then(json => {
      setRooms(json);
    });
  }, []);

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

        <div id="join-container">
          {rooms.map(room => {
            return (
              <Link to={`/room/${room.id}`}>
                <button type="button" id="join-btn">
                  Join Room {room.id}
                </button>
              </Link>
            );
          })}
        </div>

        {/* <button onClick={() => createRoom()}>+</button> */}
        <button id="myBtn">Open Modal</button>

        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
