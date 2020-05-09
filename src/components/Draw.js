import React from 'react';
import Navbar from './Navbar';

function Draw(props){

    const styleCoral = {
        color: "#e6847b",
        paddingTop: "10px",
    }
    const styleGrey = {
        color: "#6B6B6B",
        paddingTop: "10px",
    }

    const goBack = () => {
        props.history.push('/lobby');
    };

    return(
        <>
        <Navbar/>
        <div className="content" align="center">
            <div className="draw">
                <div style={styleGrey}>How about we draw... </div>
                <div style={styleCoral} >a Mother's Day card</div>
            </div>

            <button onClick={goBack} type="submit" id="draw-btn"> Back </button>
            {/* <button type="submit" className="button-style"> Save </button> */}
            <button type="submit" id="draw-btn"> Submit </button>
        </div>
        </>
    )
}

export default Draw;