import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditEntryForm(props) {
  const { entry } = props;

  function handleEditEntryFormSubmission(event) {
    event.preventDefault();
    props.onEditEntry({ name: event.target.name.value, location: event.target.location.value, pokemonType: event.target.pokemonType.value, description: event.target.description.value, level: event.target.level.value, id: entry.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditEntryFormSubmission}
        buttonText="Update Entry" />
    </React.Fragment>
  );
}

EditEntryForm.propTypes = {
  onEditEntry: PropTypes.func
}

export default EditEntryForm;