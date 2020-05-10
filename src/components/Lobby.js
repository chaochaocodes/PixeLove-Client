import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import useModal from './useModal';
import Modal from './Modal';

import { Link } from "react-router-dom";
import { api } from "../services/api";

function Lobby() {
  const [rooms, setRooms] = useState([]);

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

  // MODAL STATE 
  const {isShowing, toggle} = useModal();

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
                Room {room.id}
                </button>
              </Link>
            );
          })}
        </div>

        <button onClick={() => createRoom()}>+</button>
        <button onClick={toggle}> Modal </button>
        <Modal
          isShowing={isShowing}
          hide={toggle} />
      </div>
    </>
  );
}

export default Lobby;
