import React, { useState } from 'react';
import styles from './taskscontainer.css';
import { TaskList } from '../TaskList/TaskList';
import { MinutesPerTask } from '../MinutesPerTask/MinutesPerTask';
import { Indent } from '../Indent/Indent';
import { TTaskArr } from '../../store/tasks/actions';
import { useEffect } from 'react';

interface ITasksContainerProps {
  arrTasks: TTaskArr[];
}

export function TasksContainer({arrTasks}: ITasksContainerProps) {
  return (
    <div className={styles.box}>
      <TaskList arrItems={arrTasks}/> 
      <Indent indent={'bottom'} size={19}/>
      <MinutesPerTask minutesDefault={25*arrTasks.reduce((s, i) => s = s + i.number, 0)}/>
    </div>
  );
}
