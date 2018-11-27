import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({ inputValue, onChangeInput, label }) => {
  return (
    <Fragment>
      <label>&nbsp;{label}&nbsp;</label>
      <input value={inputValue} onChange={onChangeInput} />
    </Fragment>
  );
};

Controls.propTypes = {
  inputValue: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired
};

export default Controls;
