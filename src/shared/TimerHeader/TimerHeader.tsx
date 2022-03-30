import React from 'react';
import styles from './timerheader.css';
import { TimerTaskName } from '../TimerTaskName/TimerTaskName';
import { TimerPomidorNumber } from '../TimerPomidorNumber/TimerPomidorNumber';
import classNames from 'classnames';
interface ITimerHeaderProps {
  taskName: string;
  isActive: boolean | null;
  isRest: boolean;
}

export function TimerHeader({isRest, taskName, isActive}: ITimerHeaderProps ) {
  const classActive = classNames(styles.box, styles.active);
  const classRest = classNames(styles.box, styles.rest);
  return (
    <div className={(isActive === false || isActive === null) ? styles.box : 
                    (isRest) ? classRest : classActive }>
      <TimerTaskName taskName={taskName} className={styles.text}/>
      <TimerPomidorNumber/>
    </div>
  );
}
