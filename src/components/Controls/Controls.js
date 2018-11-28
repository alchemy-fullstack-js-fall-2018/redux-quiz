import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  nameValue,
  onNameInput,
  onGreetingInput,
  greetingValue,
  nameLabel,
  greetingLabel
}) => {
  return (
    <Fragment>
      <label>&nbsp;{greetingLabel}&nbsp;</label>
      <input value={greetingValue} onChange={onGreetingInput} />
      <label>&nbsp;{nameLabel}&nbsp;</label>
      <input value={nameValue} onChange={onNameInput} />
    </Fragment>
  );
};

Controls.propTypes = {
  nameValue: PropTypes.string.isRequired,
  onNameInput: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
  greetingLabel: PropTypes.string.isRequired,
  greetingValue: PropTypes.string.isRequired,
  onGreetingInput: PropTypes.func.isRequired
};

export default Controls;
