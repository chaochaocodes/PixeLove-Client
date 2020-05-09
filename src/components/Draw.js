import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import actioncable from "actioncable";
import p5 from "p5";
import { api } from "../services/api"

function Draw(props) {

  const styleCoral = {
    color: "#e6847b",
    paddingTop: "10px"
    };
    const styleGrey = {
    color: "#6B6B6B",
    paddingTop: "10px"
    };
    
    const goBack = () => {
        props.history.push('/lobby');
    };

    useEffect(() => {
        api.room.getRoom(1).then(json => {
            console.log(json)
        })
    })

  const sketchRef = useRef();
  const cable = actioncable.createConsumer(
    "wss://pixelove-server-app.herokuapp.com/cable"
  );
  const channel = cable.subscriptions.create(
    {
      channel: "RoomChannel",
      id: 2
    },
    {
      connected: () => {
        console.log("connected!");
      },
      disconnected: () => {},
      received: data => {
        console.log(data);
      }
    }
  );

  const sketch = p => {
    const cols = 20,
      rows = 20;
    const grid = new Array(cols * rows).fill("ffffffff");
    let colorPicker;

    p.setup = () => {
      p.createCanvas(800, 800);
      colorPicker = p.createColorPicker("#ed225d");
      colorPicker.position(0, p.height + 5);
      p.strokeWeight(0.2);
    };

    p.draw = () => {
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          const index = i + j * cols;
          p.fill(grid[index]);
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

    p.colorSquare = () => {
      const { mouseX, mouseY, width, height, map } = p;
      if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
        const x = Math.floor(map(mouseX, 0, width, 0, cols));
        const y = Math.floor(map(mouseY, 0, height, 0, rows));
        const index = x + y * cols;
        grid[index] = colorPicker.value();
        // print out the id
      }
      p.loop();
    };
  }
  
  return (
    <>
      <Navbar/>
      <div className="content" align="center">
        <div className="draw">
            <div style={styleGrey}>How about we draw... </div>
            <div style={styleCoral} >a Mother's Day card</div>
        </div>

        <div ref={sketchRef}>{/* p5 sketch goes in heeya */}</div>

        <button onClick={goBack} type="submit" id="draw-btn">
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
