import React from 'react';

const Display = ({ greeting, name }) => {
  return (
    <div>
      <p>{greeting}</p>
      <p>{name}</p>

    </div>
  );
};

export default Display;
