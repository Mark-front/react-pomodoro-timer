import React from 'react';
import { TimerTaskName } from '../TimerTaskName';
import styles from './timertask.css';
import { TimerTaskNumber } from '../TimerTaskNumber/TimerTaskNumber';
import { Indent } from '../Indent/Indent';

export function TimerTask() {
  return (
    <div className={styles.box}>
      <TimerTaskNumber/>
      <Indent indent={'right'} size={5} />
      <TimerTaskName className={styles.name}/>
    </div>
  );
}
