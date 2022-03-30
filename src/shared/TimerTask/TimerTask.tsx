import React from 'react';
import { TimerTaskName } from '../TimerTaskName';
import styles from './timertask.css';
import { TimerTaskNumber } from '../TimerTaskNumber/TimerTaskNumber';
import { Indent } from '../Indent/Indent';

interface ITimerTaskProps {
  taskName: string;
  taskNumber: number;
}

export function TimerTask({taskName, taskNumber}: ITimerTaskProps) {
  return (
    <div className={styles.box}>
      <TimerTaskNumber number={taskNumber}/>
      <Indent indent={'right'} size={5} />
      <TimerTaskName taskName={taskName} className={styles.name}/>
    </div>
  );
}
