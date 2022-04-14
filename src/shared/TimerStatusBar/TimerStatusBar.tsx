import React from 'react';
import styles from './timerstatusbar.css';

interface ITimerStatusBarProps {
  timeStart: number;
  timeNow: number;
}

export function TimerStatusBar({timeStart, timeNow}: ITimerStatusBarProps) {
  return (
    <div className={styles.box}>
      <span className={styles.bar} style={{width: `${((timeStart - timeNow)/timeStart)*100}%`}}></span>
    </div>
  );
}
