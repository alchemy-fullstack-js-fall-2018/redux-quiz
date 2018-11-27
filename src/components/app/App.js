import React, { Fragment } from 'react';
import ControlsContainer from '../../containers/controls/ControlsContainer';
import DisplayContainer from '../../containers/display/DisplayContainer';

export default function App() {
  return (
    <Fragment>
      <h1>Redux Quiz NameTag Generator</h1>
      <ControlsContainer/>
      <DisplayContainer/>
    </Fragment>
  );
}
