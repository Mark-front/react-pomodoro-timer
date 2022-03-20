import React, { useState } from 'react';
import { TTaskArr } from '../../store/tasks/actions';
import { TaskItem } from '../TaskItem';
import styles from './tasklist.css';
import { useEffect } from 'react';

interface ITaskListProps {
  arrItems: TTaskArr[];
}

export function TaskList({arrItems}: ITaskListProps) {
  return (
    <ul className={styles.list}>
      {arrItems.length > 0 ? 
        arrItems.map((item, index) => (
          <TaskItem taskNumber={index+1} taskName={item.value}/>
        )) : null
      }
    </ul>
  );
}
