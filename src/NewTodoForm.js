import React, { useState } from "react";



/** Form for creating a new todo.
 *
 * Has state for the info of the todo; on submission,
 * sends {info} to fn rec'd from parent
 *
 */

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = { height: 0, width: 0, color: "#000000" };
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    /** Send {Todo} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      addTodo(formData);
      setFormData(INITIAL_STATE);
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value }= evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    /** render form */
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="info">What needs to be done:</label>
        <input
          type="Text"
          id="info"
          name="info"
          value={formData.info}
          onChange={handleChange}
        />

        <button>Add a new todo!</button>
      </form>
    );
  };
  
  export default NewTodoForm;
  