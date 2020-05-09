import React from 'react';
import Navbar from './Navbar';

function Draw(){

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

            <button type="submit" className="button-style"> Back </button>
            {/* <button type="submit" className="button-style"> Save </button> */}
            <button type="submit" className="button-style"> Submit </button>
        </div>
        </>
    )
}

export default Draw;