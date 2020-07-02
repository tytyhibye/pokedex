import React from "react";
import PropTypes from "prop-types";

function EntryDetail(props) {
  const { entry, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Details</h1>
      <h3>Name: {entry.name}</h3>
      <p>Type: {entry.type}</p>
      <p>Level: {entry.level}</p>
      <p>Location: {entry.location}</p>
      <p>Description: {entry.description}</p>
      <button onClick={props.onClickingEdit}>Update Entry</button>
      <button onClick={() => onClickingDelete(entry.id)}>Delete Entry</button>
      <hr />
    </React.Fragment>
  ); 
}

EntryDetail.propTypes = {
  entry: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default EntryDetail;