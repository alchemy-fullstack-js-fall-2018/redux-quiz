import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => {
  return (
    <h1>
      {greeting} {name}
    </h1>
  );
};

Display.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
};

export default Display;
