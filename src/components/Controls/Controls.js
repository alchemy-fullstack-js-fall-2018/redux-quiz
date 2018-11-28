import React, { Fragment } from 'react';

const Controls = ({ greeting, name, updateGreeting, updateName }) => {
  return (
    <Fragment>
      Name: <input value={name} onChange={updateName} />
      Greeting: <input value={greeting} onChange={updateGreeting} />
    </Fragment>
  );
};

export default Controls;
