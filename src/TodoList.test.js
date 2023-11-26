import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

//Smoke and snapshot tests for TodoList, Todo, and NewTodoForm

it("TodoList renders without crahsing", () => {
    render(<TodoList/>);
});

it("TodoList matches snapshot", () => {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Todo renders without crahsing", () => {
    render(<Todo removeBox={()=>"test"}/>);
});

it("Todo matches snapshot", () => {
    const {asFragment} = render(<Todo removeTodo={()=>"test"}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("NewTodoForm renders without crahsing", () => {
    render(<NewTodoForm addTodo={()=>"test"}/>);
});

it("NewTodoForm matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm addBox={()=>"test"}/>);
    expect(asFragment()).toMatchSnapshot();
});

//testing form functionality
it("works when adding multiple new todos on load", function(){
    const { container } = render(
        <TodoList/>    
    );
    
    //expect their not to be a new box in dom
    expect(
        container.querySelector("Todo")
    ).not.toBeInTheDocument();

    const infoInput = getByLabelText("Info:");
    const submitBtn = queryByText("Add a new box!")

    // fill out the form
    fireEvent.change(infoInput, { target: { value: "Test Todo" }});
    fireEvent.click(submitBtn);

});