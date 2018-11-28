import React, { Fragment } from 'react';

const Controls = ({ name, greeting, onChangeNameInput, onChangeGreetingInput }) => {
  return (
    <Fragment>
      <label>Name</label>
      <input value={name} onChange={onChangeNameInput} />
      <label>Greeting</label>
      <input value={greeting} onChange={onChangeGreetingInput} />
    </Fragment>
  );
};

export default Controls;
