import React from "react";
import PropTypes from "prop-types";

function Entry(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenEntryClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Entry.propTypes = {
  name: PropTypes.string.isRequired,
  pokemonType: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  whenEntryClicked: PropTypes.func
};


export default Entry;