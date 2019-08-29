import React from 'react';
import PropTypes from 'prop-types';

function AddMarkdown({ formInputSubmit, formInputChange, formInput }) {
  return (
    <form onSubmit={event => formInputSubmit(event, formInput)}>
      <input value={formInput} onChange={formInputChange}/>
      <button>+</button>
    </form>
  );
}

AddMarkdown.propTypes = {
  formInputSubmit: PropTypes.func.isRequired,
  formInput: PropTypes.string.isRequired,
  formInputChange: PropTypes.func.isRequired
};

export default AddMarkdown;
