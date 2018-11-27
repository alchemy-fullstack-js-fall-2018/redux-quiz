import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Display = ({ greeting, name }) => {
  return (
    <Fragment>
      <h2>{greeting}</h2>
      <h3>{name}</h3>
    </Fragment>
  );
};

Display.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Display;
