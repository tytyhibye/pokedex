import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Poke-Name' />
        <input
          type='text'
          name='pokemonType'
          placeholder='Pokemon Type' />
        <input
          type='number'
          name='level'
          placeholder='Level' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          type='text'
          name='description'
          placeholder='Discription..' />
        <button type='submit'>{props.buttonText}</button>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;