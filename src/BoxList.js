import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id ));
    }

    const renderBoxes = () => {
        return (
            <div>
                {boxes.map(box => (
                    <Box key={box.id} boxId = {box.id} boxWidth={box.width} 
                    boxHeight = {box.height} boxColor = {box.color} removeBox={removeBox}/>
                ))}
            </div>
        );
    };

    const addBox = box => {
        let newBox = {...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    }

    return (
        <div className="BoxList">
            {renderBoxes()}
            <NewBoxForm addBox={addBox}/>
        </div>
    );

}

export default BoxList;

