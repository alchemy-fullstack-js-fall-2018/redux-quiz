import React, { Fragment } from 'react';

const Control = ({ inputValue, onChangeInput }) => {
  return (
    <Fragment>
      <input value={inputValue} onChange={onChangeInput} />
    </Fragment>
  );
};

export default Control;
