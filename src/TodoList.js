import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id ));
    }

    const renderTodos = () => {
        return (
            <div>
                {todos.map(todo => (
                    <Todo key={todo.id} todoId={todo.id} todoInfo={todo.info} removeTodo={removeTodo}/>
                ))}
            </div>
        );
    };

    const addTodo = todo => {
        let newTodo = {...todo, id: uuid()};
        setTodos(todos => [...todos, newTodo]);
    }

    return (
        <div className="TodoList">
            {renderTodos()}
            <NewTodoForm addTodo={addTodo}/>
        </div>
    );

}

export default TodoList;

