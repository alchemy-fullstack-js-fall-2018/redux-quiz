import React, { Fragment } from 'react';
import DisplayContainer from '../../containers/DisplayContainer';
import ControlsContainer from '../../containers/ControlsContainer';

export default function App() {
  return (
    <Fragment>
      <h1>App</h1>
      <DisplayContainer />
      <ControlsContainer />
    </Fragment>

  );
}
