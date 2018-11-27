import React, { Fragment } from 'react';
import Display from '../display/Display';
import DisplayContainer from '../../container/DisplayContainer';

export default function App() {
  return (
    <Fragment>
      <h1>App</h1>
      <Display />
      <DisplayContainer />
    </Fragment>
  );
}
