import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="opportunity">Opportunity:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="opportunity"
        list="opportunities"
        type="text"
        className="form-control"
        placeholder="Select an opportunity to begin"
        id="opportunity"
      />
      <datalist id="opportunities">
        {props.opportunities.map(opportunity => <option value={opportunity} key={opportunity} />)}
      </datalist>

      {/* <label htmlFor="city">City:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="city"
        list="cities"
        type="text"
        className="form-control"
        placeholder="Select a city"
        id="city"
      />
      <datalist id="cities">
        {props.cities.map(city => <option value={city} key={city} />)}
      </datalist> */}

      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
