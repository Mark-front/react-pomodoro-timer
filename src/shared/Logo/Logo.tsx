import React from 'react';
import styles from './logo.css';
import { TomatoIcon } from '../icons/TomatoIcon';

export function Logo() {
  return (
    <a className={styles.link} href="#">
      <TomatoIcon/> 
      <span className={styles.text}>
        pomodoro_box
      </span>
    </a>
  );
}
