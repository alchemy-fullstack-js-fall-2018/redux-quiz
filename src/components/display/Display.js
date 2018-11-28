import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Display = ({ name, greeting }) => {
  return (
    <Fragment>
      <h1>{greeting}</h1>
      <h2>{name}</h2>
    </Fragment>
  );
};

Display.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired
};

export default Display;
