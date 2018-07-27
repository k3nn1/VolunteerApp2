import React from "react";


export const Dropdown = props => (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
        {props.children}
    </button>
);

// export const Dropdown = props => (
//   <div className="form-group">

   /* <select>
        {this.props.dropdown-value.map((name) => <option>{name}</option>)}
    </select> */

    /* <select id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="landscaping">Landscaping</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select> */