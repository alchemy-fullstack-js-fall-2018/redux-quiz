import React, { Fragment } from 'react';
import ControlsContainer from '../../containers/ControlsContainer';
import DisplayContainer from '../../containers/DisplayContainer';


export default function App() {
  return (
    <Fragment>
      <h1>App</h1>
      <ControlsContainer />
      <DisplayContainer />
    </Fragment>

  );
}
