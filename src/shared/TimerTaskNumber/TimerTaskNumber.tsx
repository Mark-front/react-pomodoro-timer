import React from 'react';
import styles from './timertasknumber.css';

interface ITimerTaskNumberProps {
  number: number;
}

export function TimerTaskNumber({number}: ITimerTaskNumberProps) {
  return (
    <div className={styles.number}>
      Задача {number} - 
    </div>
  );
}
