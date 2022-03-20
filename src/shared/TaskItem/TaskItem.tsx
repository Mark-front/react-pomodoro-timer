import React from 'react';
import styles from './taskitem.css';
import { TaskNumber } from '../TaskNumber/TaskNumber';
import { TimerTaskName } from '../TimerTaskName/TimerTaskName';
import { TaskMenuButton } from '../TaskMenuButton/TaskMenuButton';
import { Indent } from '../Indent/Indent';

interface ITaskItemProps {
  taskNumber: number;
  taskName: string;
}

export function TaskItem({taskName, taskNumber}: ITaskItemProps) {
  return (
    <li key={taskNumber} className={styles.item}>
      <TaskNumber taskNumber={taskNumber}/>
      <Indent indent={'right'} size={10}/>
      <TimerTaskName taskName={taskName}/>
      <TaskMenuButton/>
    </li>
  );
}
