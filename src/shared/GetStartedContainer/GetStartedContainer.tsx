import React from 'react';
import styles from './getstartedcontainer.css';
import { GetStartedDescription } from '../GetStartedDescription/GetStartedDescription';
import { Indent } from '../Indent/Indent';
import { TasksContainer } from '../TasksContainer/TasksContainer';
import { NewTaskFormContainer } from '../NewTaskFormContainer';
import { GetTaskArr, TTaskArr } from '../../store/tasks/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { useEffect } from 'react';

export function GetStartedContainer() {
  const TaskArr = useSelector<RootState, TTaskArr[]>(state => state.taskArr.arr);
  const dispatch = useDispatch();
  const tasks = typeof localStorage !== "undefined" ? localStorage.getItem('tasksArr') : null;
  const tasksJSON = tasks !== null ? JSON.parse(tasks) : '{}';

  useEffect(() => {
    if(tasksJSON.length !== 0) {
      dispatch(GetTaskArr(tasksJSON))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasksArr', JSON.stringify(TaskArr));
  }, [TaskArr]);
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
