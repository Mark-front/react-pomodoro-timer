import React from 'react';
import styles from './statisticsday.css';
import { MinutesPerTask } from '../MinutesPerTask/MinutesPerTask';

interface IStatisticsDayProps {
  howDay: string;
  min: number | undefined;
}

export function StatisticsDay({min, howDay}: IStatisticsDayProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.day}>{howDay}</h3>
      <div className={styles.data}>
        {min ? <>Вы работали над задачами в течении <MinutesPerTask isFull={true} className={styles.time} minutesDefault={min}/></> : 'Нет данных'}
      </div>
    </div>
  );
}