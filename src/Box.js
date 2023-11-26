import React from "react";


const Box = ({boxId = 1, boxColor="#000", boxHeight=100, boxWidth=100, removeBox}) => {

    const boxStyle = {
        backgroundColor:boxColor,
        height:boxHeight+"px",
        width:boxWidth+"px"
    };

    return (
        <div style={boxStyle} >
            <button className="RemoveButton" onClick={()=>removeBox(boxId)}>X</button>
        </div>
    );
}

export default Box;
