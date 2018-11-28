import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Controls = ({ greeting, name, updateGreeting, updateName }) => {
  return (
    <Fragment>
      Name: <input value={name} onChange={updateName} />
      Greeting: <input value={greeting} onChange={updateGreeting} />
    </Fragment>
  );
};

Controls.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  updateGreeting: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired
};

export default Controls;
