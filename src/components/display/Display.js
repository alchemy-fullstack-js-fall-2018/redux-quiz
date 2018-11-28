import React from 'react';
import styles from './Display.css';

export default function Display({ name, greeting }) {
  return (
    <div id={styles.nameTag }>
      <h3>{greeting}</h3>
      <h3>My name is: {name}</h3>
    </div>
  );
}
