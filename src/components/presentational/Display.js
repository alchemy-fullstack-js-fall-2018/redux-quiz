import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, greeting }) => {

  return (
    <section>
      <p>{name}</p>
      <p>{greeting}</p>
    </section>
  );
};

Display.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired
};

export default Display;
