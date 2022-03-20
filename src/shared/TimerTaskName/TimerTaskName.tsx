import React from 'react';
import styles from './timertaskname.css';
import classNames from 'classnames';

interface ITimerTaskNameProps {
  taskName?: string;
  className?: string;
}

export function TimerTaskName({className, taskName}: ITimerTaskNameProps) {
  const classes = classNames(styles.name, className)
  return (
    <div className={classes}>
      {taskName}
    </div>
  );
}
