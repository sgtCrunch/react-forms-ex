import React, { useState } from "react";



/** Form for creating a new box.
 *
 * Has state for the height/width/color of the box; on submission,
 * sends {height, width, color} to fn rec'd from parent
 *
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { height: 0, width: 0, color: "#000000" };
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    /** Send {height, width, color} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      addBox(formData);
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
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
  
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />

        <label htmlFor="color">Color:</label>
        <input
          type="color"
          id="color"
          name="color"
          onChange={handleChange}
        />
  
        <button>Add a new box!</button>
      </form>
    );
  };
  
  export default NewBoxForm;
  