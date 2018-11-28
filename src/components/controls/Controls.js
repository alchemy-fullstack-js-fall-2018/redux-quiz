import React, { Fragment } from 'react';

const Controls = ({ name, greeting, onChangeNameInput, onChangeGreetingInput }) => {
  return (
    <Fragment>
      <label>Greeting</label>
      <input value={greeting} onChange={onChangeGreetingInput} />
      <label>Name</label>
      <input value={name} onChange={onChangeNameInput} />
    </Fragment>
  );
};

export default Controls;
