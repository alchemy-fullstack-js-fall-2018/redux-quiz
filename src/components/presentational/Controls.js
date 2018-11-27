import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ name, greeting, changeName, changeGreeting }) => {


  return (
    <section>
      <label htmlFor="name">Name</label>
      <input
        name="name" type="text"
        value={name} onChange={changeName}
      ></input>
      <label htmlFor="greeting">Greeting</label>
      <input
        name="greeting" type="text"
        value={greeting} onChange={changeGreeting}
      ></input>
    </section>
  );
};

Controls.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  changeGreeting: PropTypes.func.isRequired
};

export default Controls;
