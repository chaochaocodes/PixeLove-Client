import React, {useEffect, useRef} from 'react';
import Navbar from './Navbar';
import actioncable from 'actioncable'
import p5 from "p5"

function Draw(){

    const sketchRef = useRef()
    const cable = actioncable.createConsumer('ws://localhost:3000/cable')
    const channel = cable.subscriptions.create({
        channel: "RoomChannel",
        id: 1
    }, {
        connected: () => {
            console.log("connected!")
        },
        disconnected: () => {

        },
        received: data => {
            console.log(data)
        }
    });

    const sketch = (p) => {

    }

    useEffect(() => {

    }, [])
    const styleCoral = {
        color: "#e6847b",
        paddingTop: "10px",
    }
    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    return(
        <>
            <Navbar/>
            <div className="content" align="center">
                <div className="draw">
                    <div style={styleGrey}>How about we draw... </div>
                    <div style={styleCoral} >a Mother's Day card</div>
                </div>

                <button type="submit" className="button-style" onClick={handleClick}> Back </button>
                {/* <button type="submit" className="button-style"> Save </button> */}
                <button type="submit" className="button-style"> Submit </button>
            </div>
        </>
    )
}

export default Draw;