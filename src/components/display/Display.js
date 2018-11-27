import React, { Fragment } from 'react';

const Display = ({ greeting, name }) => {
  return (
    <Fragment>
      <h1>Greeting</h1>
      <h2>{greeting}</h2>
      <h2>{name}</h2>
    </Fragment>

  );
};

export default Display;
