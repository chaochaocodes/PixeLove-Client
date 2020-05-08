import React from 'react';
import Navbar from './Navbar';

function Draw(){

    const stylePeach = {
        color: "#EFB0A1",
        paddingTop: "10px",
    }
    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    return(

        <div className="content">
            <Navbar/>
            <div className="draw">
                <div style={styleGrey}>How about we draw... </div>
                <div style={stylePeach} >a Mother's Day card</div>
            </div>
            <button type="submit" className="button-style"> Back </button>
            <button type="submit" className="button-style"> Submit </button>
        </div>
    )
}

export default Draw;