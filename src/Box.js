import React, { useState } from "react";


const Box = ({boxColor, boxHeight, boxWidth, removeBox}) => {

    const boxStyle = {
        color:boxColor,
        height:boxHeight,
        width:boxWidth
    };

    return (
        <div style={boxStyle}>
            <button className="RemoveButton" onClick={removeBox}>X</button>
        </div>
    );
}

export default Box;
