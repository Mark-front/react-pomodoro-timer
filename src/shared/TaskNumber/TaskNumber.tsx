import React from 'react';
import styles from './tasknumber.css';

interface ITaskNumberProps {
  taskNumber: number;
}

export function TaskNumber({taskNumber}: ITaskNumberProps) {
  return (
    <div className={styles.number}>
      {taskNumber}
    </div>
  );
}
