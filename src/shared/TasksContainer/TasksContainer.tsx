import React from 'react';
import styles from './taskscontainer.css';
import { TaskList } from '../TaskList/TaskList';
import { MinutesPerTask } from '../MinutesPerTask/MinutesPerTask';
import { Indent } from '../Indent/Indent';
import { TTaskArr } from '../../store/tasks/actions';

interface ITasksContainerProps {
  arrTasks: TTaskArr[];
}

export function TasksContainer({arrTasks}: ITasksContainerProps) {
  return (
    <div className={styles.box}>
      <TaskList arrItems={arrTasks}/> 
      <Indent indent={'bottom'} size={19}/>
      
      <MinutesPerTask minutesDefault={arrTasks !== [] ? 25*arrTasks.reduce((s, i) => s = s + i.number, 0) : 0}/>
    </div>
  );
}
