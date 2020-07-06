import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewEntryForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewEntryFormSubmission}
        buttonText="Submit Pokemans" />
    </React.Fragment>
  );
  function handleNewEntryFormSubmission(event) {
    event.preventDefault();
    props.onNewEntryCreation({ name: event.target.name.value, location: event.target.location.value, pokemonType: event.target.pokemonType.value, level: event.target.level.value, description: event.target.description.value, id: v4() });
  }
}
NewEntryForm.propTypes = {
  onNewEntryCreation: PropTypes.func
};

export default NewEntryForm;