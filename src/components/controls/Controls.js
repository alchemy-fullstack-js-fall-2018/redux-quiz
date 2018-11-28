import React from 'react';

const Controls = ({ name, greeting, onChangeNameInput, onChangeGreetingInput }) => {
  return (
    <div>
      <label>Greeting</label>
      <input value={greeting} onChange={onChangeGreetingInput} />
      <label>Name</label>
      <input value={name} onChange={onChangeNameInput} />
    </div>
  );
};

export default Controls;
