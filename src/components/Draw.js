import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import actioncable from "actioncable";
import p5 from "p5";
import { api, WS_ROOT } from "../services/api"

function Draw(props) {

    const [room, setRoom] = useState({})
    const [sketch, setSketch] = useState({})
    const [channel, setChannel] = useState({})

    useEffect(() => {
        api.room.getRoom(1).then(json => {
            setRoom(json)
        })
        if (room.hasOwnProperty("id")) {
            setSketch(new p5(sketchInstance, sketchRef.current));
            const cable = actioncable.createConsumer(
                WS_ROOT
              );
            
              setChannel(cable.subscriptions.create(
                {
                  channel: "RoomChannel",
                  id: room.id
                },
                {
                  connected: () => {
                    console.log("connected!");
                  },
                  disconnected: () => {},
                  received: data => {
                    sketch.changeColor(data)
                  }
                }
              ));
        }
    }, [room.hasOwnProperty("id")])

  const sketchRef = useRef();

  const sketchInstance = p => {
    const cols = 20, rows = 20;
    const { cells } = room;
    cells.sort((a,b) => a.index - b.index)
    let colorPicker;

    p.setup = () => {
      p.createCanvas(800, 800);
      colorPicker = p.createColorPicker("#ed225d");
      colorPicker.position(0, p.height + 5);
      p.strokeWeight(0.2);
      console.log(room)
    };

    p.draw = () => {
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          const index = i + j * cols;
          p.fill(cells[index].color || "ffffff");
          p.rect(
            p.map(i, 0, cols, 0, p.width),
            p.map(j, 0, rows, 0, p.width),
            p.map(i + 1, 0, cols, 0, p.width),
            p.map(j + 1, 0, rows, 0, p.width)
          );
        }
      }
      p.noLoop();
    };

    p.websocket = () => {
      const { mouseX, mouseY, width, height, map } = p;
      if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
        const x = Math.floor(map(mouseX, 0, width, 0, cols));
        const y = Math.floor(map(mouseY, 0, height, 0, rows));
        const index = x + y * cols;
        api.cell.updateColor({id: cells[index].id, color: colorPicker.value()})
        // print out the id
      }
      p.loop();
    };

    p.mouseDragged = () => {
      p.websocket();
    };

    p.mouseClicked = () => {
      p.websocket();
    };

    p.changeColor = (data) => {
        console.log(data)
    }
  };

  const styleCoral = {
    color: "#e6847b",
    paddingTop: "10px"
  };
  const styleGrey = {
    color: "#6B6B6B",
    paddingTop: "10px"
  };

  const handleClick = () => {};

  

  return (
    <>
      <Navbar />
      <div className="content" align="center">
        <div className="draw">
          <div style={styleGrey}>How about we draw... </div>
          <div style={styleCoral}>a Mother's Day card</div>
        </div>
        <div ref={sketchRef}>{/* p5 sketch goes in heeya */}</div>

        <button type="submit" className="button-style" onClick={handleClick}>
          {" "}
          Back{" "}
        </button>
        {/* <button type="submit" className="button-style"> Save </button> */}
        <button type="submit" className="button-style">
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
}

export default Draw;
