import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <h1>{name}</h1>
    </div>
  );
};

Display.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Display;
