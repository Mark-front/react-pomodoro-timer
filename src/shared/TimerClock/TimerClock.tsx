import React from 'react';
import styles from './timerclock.css';
import classNames from 'classnames';

interface ITimerClockProps {
  isActive: boolean | null
  min: number;
  sec: number;
  isRest: boolean;
}

export function TimerClock({isRest, isActive, min, sec}: ITimerClockProps) {
  const classActive = classNames(styles.clock, styles.active);
  const classRest = classNames(styles.clock, styles.rest);

  return (
    <div className={(isActive === false || isActive === null) ? styles.clock : 
                    (isRest) ? classRest : classActive}>
      {(min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec)}
    </div>
  );
}
