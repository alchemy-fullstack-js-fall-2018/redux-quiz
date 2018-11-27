import React from 'react'

export default function Display({ name, greeting }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{greeting}</h1>
    </div>
  );
}
