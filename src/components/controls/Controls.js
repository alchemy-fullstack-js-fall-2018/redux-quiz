import React, { PureComponent, Fragment } from 'react';



const Controls = ({ greeting, name, handleGreetingChange, handleNameChange }) => {
  return (
    <Fragment>
      <label htmlFor="greeting">Greeting: </label>
      <input type="text" name="greeting" value={greeting} onChange={handleGreetingChange} />

      <label htmlFor="name">Name: </label>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
    </Fragment>
  );
};

export default Controls;
