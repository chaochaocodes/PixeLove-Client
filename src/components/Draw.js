import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import actioncable from "actioncable";
import p5 from "p5";
import { api, WS_ROOT } from "../services/api"

function Draw(props) {

    const [room, setRoom] = useState({})
    const [sketch, setSketch] = useState({})
    const [cable, setCable] = useState(actioncable.createConsumer(
        WS_ROOT
      ))

    useEffect(() => {
        api.room.getRoom(1).then(json => {
            setRoom(json)
        })
        if (room.hasOwnProperty("id")) {
            setSketch(new p5(sketchInstance, sketchRef.current));
        }
    }, [room.hasOwnProperty("id")])

  const sketchRef = useRef();

  const sketchInstance = p => {
    const { cells } = room;
    const square = 20;
    cells.sort((a,b) => a.index - b.index)
    let colorPicker;
    const channel = cable.subscriptions.create(
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
            p.changeColor(data)
          }
        }
      );

    p.setup = () => {
      p.createCanvas(p.windowWidth / 2, p.windowWidth / 2);
      colorPicker = p.createColorPicker("#ed225d");
      colorPicker.position(0, p.height + 5);
      p.strokeWeight(0.2);
    };

    p.draw = () => {
      for (var i = 0; i < square; i++) {
        for (var j = 0; j < square; j++) {
          const index = i + j * 20;
          p.fill(cells[index].color || "ffffff");
          p.rect(
            p.map(i, 0, 20, 0, p.width),
            p.map(j, 0, 20, 0, p.width),
            p.map(i + 1, 0, 20, 0, p.width),
            p.map(j + 1, 0, 20, 0, p.width)
          );
        }
      }
      p.noLoop();
    };

    p.websocket = () => {
      const { mouseX, mouseY, width, height, map } = p;
      if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
        const x = Math.floor(map(mouseX, 0, width, 0, 20));
        const y = Math.floor(map(mouseY, 0, height, 0, 20));
        const index = x + y * square;
        api.cell.updateColor({id: cells[index].id, color: colorPicker.value()})
        // print out the id
      }
    };

    p.mouseDragged = () => {
      p.websocket();
    };

    p.mouseClicked = () => {
      p.websocket();
    };

    p.changeColor = (data) => {
        const { index, color} = data.cell
        cells[index].color = color
        p.loop();
    }

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth / 2, p.windowWidth / 2);
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


  const handleClick = () => {
    props.history.push('/lobby')
  };

  return (
    <>
      <Navbar/>
      <div className="content" align="center">
        <div className="draw">
            <div style={styleGrey}>How about we draw... </div>
            <div style={styleCoral} >a Mother's Day card</div>
        </div>

        <div ref={sketchRef}>{/* p5 sketch goes in heeya */}</div>

        <button onClick={handleClick} type="submit" id="draw-btn">
          {" "}
          Back{" "}
        </button>

        <button type="submit" id="draw-btn">
          {" "}
          Submit{" "}
        </button>
        </div>
    </>
  );
}

export default Draw;
