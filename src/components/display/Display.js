import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => {
  return (
    <h1 style={{ greeting, name }}></h1>
  );
};

Display.propTypes = {
  text: PropTypes.string.isRequired
};

export default Display;
