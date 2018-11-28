import React, { Fragment } from 'react';
import DisplayContainer from '../../containers/display/DisplayContainer';
import ControlsContainer from '../../containers/controls/ControlsContainer';

export default function App() {
  return (
    <Fragment>
      <h1>App</h1>
      <DisplayContainer />
      <ControlsContainer />
    </Fragment>

  );
}
