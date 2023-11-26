import React from "react";

import "./Todo.css";


const Todo = ({todoId = 1, todoInfo="test", removeTodo}) => {

    return (
        <div className="TodoDiv">
            <button className="RemoveButton" onClick={()=>removeTodo(todoId)}>X</button>
            <h3>{todoInfo}</h3>
        </div>
    );
}

export default Todo;
