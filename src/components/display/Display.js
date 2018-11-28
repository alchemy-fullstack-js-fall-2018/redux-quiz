import React, { Fragment } from 'react';

export default function Display({ name, greeting }) {
  return (
    <Fragment>
      <h3>{greeting}</h3>
      <h3>My name is: {name}</h3>
    </Fragment>
  );
}
