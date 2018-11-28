import React, { Fragment } from 'react';
import DisplayContainer from '../../containers/DisplayContainer';
import ControlsContainer from '../../containers/ControlsContainer';

export default function App() {
  return (
    <Fragment>
      <ControlsContainer />
      <h1>Name Tag:</h1>
      <DisplayContainer />
    </Fragment>

  );
}
