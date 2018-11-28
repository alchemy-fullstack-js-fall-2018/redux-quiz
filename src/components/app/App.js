import React, { Fragment } from 'react';
import DisplayContainer from '../../container/DisplayContainer';
import Control from '../../container/Control';

export default function App() {
  return (
    <Fragment>
      <h1>App</h1>
      <DisplayContainer />
      <Control />
    </Fragment>
  );
}
