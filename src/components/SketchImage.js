import React, { useRef, useEffect, useState } from "react"
import p5 from 'p5'

const SketchImage = ({cells}) => {

    const sketchRef = useRef()
    const [sketch, setSketch] = useState(new p5)

    useEffect(() => {
        setSketch(new p5(sketchInstance, sketchRef.current))
    }, [cells])

    const sketchInstance = (p) => {
        cells.sort((a,b) => a.index - b.index)
        const square = 20

        p.setup = () => {
            p.createCanvas(p.windowWidth / 2, p.windowWidth / 2);
            p.strokeWeight(.2)

        }

        p.draw = () => {
            for (var i = 0; i < square; i++) {
              for (var j = 0; j < square; j++) {
                const index = i + j * square;
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
    }
    return (
        <div ref={sketchRef}>
        </div>

    )
}