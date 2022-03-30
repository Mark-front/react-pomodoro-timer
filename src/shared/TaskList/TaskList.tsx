import React, { useState } from 'react';
import { TTaskArr } from '../../store/tasks/actions';
import { TaskItem } from '../TaskItem';
import styles from './tasklist.css';

interface ITaskListProps {
  arrItems: TTaskArr[];
}

export function TaskList({arrItems}: ITaskListProps) {
  return (
    <ul className={styles.list}>
      {arrItems.length > 0 ? 
        arrItems.map((item) => (
          <TaskItem itemNumber={item.number} itemId={item.id} key={item.id} taskName={item.value}/>
        )) : null
      }
    </ul>
  );
}
