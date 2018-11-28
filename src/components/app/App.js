import React, { Fragment } from 'react';
import Controls from '../../containers/controls/Controls';
import Display from '../../containers/display/Display';

export default function App() {
  return (
    <Fragment>
      <h1>Name Tag App</h1>
      <Controls />
      <Display />
    </Fragment>
  );
}
