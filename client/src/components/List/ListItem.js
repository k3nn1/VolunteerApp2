import React from "react";

export const ListItem = props => (
  <li className="list-group-item">

  <button type="submit" value="Submit" id="heartButton">
    <i className="fa fa-heart fa-lg"id="red"></i>
  </button>
  {'\u00A0'}
  {/* <i className="fa fa-heart fa-lg" id="red"></i> */}
    {props.children}
  </li>
);