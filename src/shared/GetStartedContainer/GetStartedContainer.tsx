import React from 'react';
import styles from './getstartedcontainer.css';
import { GetStartedDescription } from '../GetStartedDescription/GetStartedDescription';
import { Indent } from '../Indent/Indent';
import { TasksContainer } from '../TasksContainer/TasksContainer';
import { NewTaskFormContainer } from '../NewTaskFormContainer';
import { TTaskArr } from '../../store/tasks/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

export function GetStartedContainer() {
  const TaskArr = useSelector<RootState, TTaskArr[]>(state => state.taskArr.arr);



  return (
    <div className={styles.box}>
      <h1 className={styles.header}>
        Ура! Теперь можно начать работать:
      </h1>
      <GetStartedDescription/>
      <Indent indent={'bottom'} size={25} />
      <NewTaskFormContainer arrTasks={TaskArr}/>
      <Indent indent={'bottom'} size={25} />
      <TasksContainer arrTasks={TaskArr}/>
    </div>
  );
}
