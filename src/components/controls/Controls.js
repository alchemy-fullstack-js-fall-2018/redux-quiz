import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({ nameValue, greetingValue, onNameChange, onGreetingChange }) => {
  return (
    <Fragment>
      <input value={nameValue}  onChange={onNameChange} />
      <input value={greetingValue} onChange={onGreetingChange} />
    </Fragment>
  );
};

Controls.propTypes = {
  nameValue: PropTypes.string.isRequired,
  greetingValue: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onGreetingChange: PropTypes.func.isRequired
};

export default Controls;
