import React, { Fragment } from 'react';

const Controls = ({ greeting, onTextChange }) => {
  return (
    <Fragment>
      <input value={greeting} onChange={onTextChange} />
    </Fragment>
  );
};

export default Controls;
