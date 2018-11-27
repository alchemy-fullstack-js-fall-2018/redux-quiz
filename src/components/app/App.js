import React, { Fragment } from 'react';
import ControlContainer from '../../containers/controls/Controls';
import DisplayContainer from '../../containers/display/Display';

export default function App() {
  return (
    <Fragment>
      <h1>NameTag</h1>
      <ControlContainer />
      <DisplayContainer />
    </Fragment>
  );
}
