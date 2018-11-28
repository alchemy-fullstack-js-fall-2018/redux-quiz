import React, { Fragment } from 'react';

const Controls = ({ greeting, name, onGreetingChange, onNameChange }) => {
  return (
    <Fragment>
      <input value={greeting} onChange={onGreetingChange} />
      <input value={name} onChange={onNameChange} />
    </Fragment>
  );
};

export default Controls;
