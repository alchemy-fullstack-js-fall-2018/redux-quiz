import React, { Fragment } from 'react';

const Control = ({ inputValue1, inputValue2, onChangeInput }) => {
  return (
    <Fragment>
      <input value={inputValue1} onChange={onChangeInput} />
      <input value={inputValue2} onChange={onChangeInput} />
    </Fragment>
  );
};

export default Control;
