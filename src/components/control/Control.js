import React, { Fragment } from 'react';

const Control = ({ inputValue1, inputValue2, onChangeInputGreeting, onChangeInputName }) => {
  return (
    <Fragment>
      <input value={inputValue1} onChange={onChangeInputGreeting} />
      <input value={inputValue2} onChange={onChangeInputName} />
    </Fragment>
  );
};

export default Control;
