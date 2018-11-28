import React, { Fragment } from 'react';

export default function Display({ name, greeting }) {
  return (
    <Fragment>
      <h1>{name}</h1>
      <h1>{greeting}</h1>
    </Fragment>
  );
}
