import React from 'react';

export default function Controls({ name, greeting, onChangeNameInput, onChangeGreetingInput }) {
  return (
    <div>
      <label>Name</label>
      <input value={name} onChange={onChangeNameInput} />
      <label>Greeting</label>
      <input value={greeting} onChange={onChangeGreetingInput} />
    </div>
  );
}
