import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

//Smoke and snapshot tests for BoxList, Box, and NewBoxForm

it("BoxList renders without crahsing", () => {
    render(<BoxList/>);
});

it("BoxList matches snapshot", () => {
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("Box renders without crahsing", () => {
    render(<Box removeBox={()=>"test"}/>);
});

it("Box matches snapshot", () => {
    const {asFragment} = render(<Box removeBox={()=>"test"}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("NewBoxForm renders without crahsing", () => {
    render(<NewBoxForm addBox={()=>"test"}/>);
});

it("NewBoxForm matches snapshot", () => {
    const {asFragment} = render(<NewBoxForm addBox={()=>"test"}/>);
    expect(asFragment()).toMatchSnapshot();
});

//testing form functionality
it("works when adding multiple new boxes on load", function(){
    const { container } = render(
        <BoxList/>    
    );
    
    //expect their not to be a new box in dom
    expect(
        container.querySelector("Box")
    ).not.toBeInTheDocument();

    const heightInput = container.getByLabelText("Height:");
    const widthInput = container.getByLabelText("Width:");
    const colorInput = container.getByLabelText("Color:");
    const submitBtn = container.queryByText("Add a new box!")

    // fill out the form
    fireEvent.change(heightInput, { target: { value: 100 }});
    fireEvent.change(widthInput, { target: { value: 100 }});
    fireEvent.change(colorInput, { target: { value: "#00000" }});
    fireEvent.click(submitBtn);


});