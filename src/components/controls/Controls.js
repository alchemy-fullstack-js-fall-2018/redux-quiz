import React, { Fragment } from 'react';

const Controls = ({ greeting, onChangeInput }) => {
  return (
    <Fragment>
      <input name="greeting" type="text" value={greeting} onChange={onChangeInput} />
    </Fragment>
  );
};

export default Controls;
