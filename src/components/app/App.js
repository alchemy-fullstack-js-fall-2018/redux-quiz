import React, { Fragment } from 'react';
import GreetingContainer from '../../containers/controls/GreetingContainer';
import NameContainer from '../../containers/display/NameContainer';

export default function App() {
  return (
    <Fragment>
      <GreetingContainer />
      <NameContainer />
    </Fragment>
  );
}
