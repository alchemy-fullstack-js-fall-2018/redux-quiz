import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, greeting }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{greeting}</p>
    </div>
  );
};

Display.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired
};

export default Display;
