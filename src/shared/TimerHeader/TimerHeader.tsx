import React from 'react';
import styles from './timerheader.css';
import { TimerTaskName } from '../TimerTaskName/TimerTaskName';
import { TimerPomidorNumber } from '../TimerPomidorNumber/TimerPomidorNumber';

export function TimerHeader() {
  return (
    <div className={styles.box}>
      <TimerTaskName className={styles.text}/>
      <TimerPomidorNumber/>
    </div>
  );
}
