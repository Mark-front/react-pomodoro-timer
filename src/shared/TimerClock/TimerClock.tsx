import React from 'react';
import styles from './timerclock.css';

interface ITimerClockProps {
  min: number;
  sec: number;
}

export function TimerClock({min, sec}: ITimerClockProps) {

  return (
    <div className={styles.clock}>
      {(min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)}
    </div>
  );
}
