import React from 'react';
import styles from './buttonplus.css';
import { IconPlus } from '../icons/IconPlus';

export function ButtonPlus() {
  return (
    <button className={styles.button}>
      <IconPlus/>
    </button>
  );
}
