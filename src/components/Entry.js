import React from "react";
import PropTypes from "prop-types";

function Entry(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenEntryClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        {/* - Type: {props.type} */}
        {/* <p><em>Level: {props.level}</em></p>
        <p><em>Location: {props.location} </em></p>
        <p><em>Description: {props.description} </em></p> */}
        <hr />
      </div>
    </React.Fragment>
  );
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  level: PropTypes.number,
  location: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenEntryClicked: PropTypes.func
};


export default Entry;