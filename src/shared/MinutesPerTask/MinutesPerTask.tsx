import React from 'react';
import styles from './minutespertask.css';

interface IMinutesPerTask {
  minutesDefault: number;
}

export function MinutesPerTask({minutesDefault}: IMinutesPerTask) {
  let hour = 0;
  if(minutesDefault > 60) {
    hour = Math.floor(minutesDefault/60);
    minutesDefault = minutesDefault - (hour*60)
  }
  return ( 
    <div className={styles.minutes}>
      {minutesDefault !== 0 && hour <= 0 ? `${minutesDefault} мин` : null} 
      {hour !== 0 && hour === 1? `${hour} час ${minutesDefault} мин` : null}
      {hour > 1 && hour <= 4 || (hour % 10 <= 4 && hour > 21) ? `${hour} часа ${minutesDefault} мин` : null}
      {hour >= 5 && hour <= 20 || (hour % 10 >= 5 && hour > 24) ? `${hour} часов ${minutesDefault} мин` : null}
    </div>
  );
}
