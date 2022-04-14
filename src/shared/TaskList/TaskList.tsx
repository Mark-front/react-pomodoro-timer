import React from 'react';
import { TTaskArr } from '../../store/tasks/actions';
import { TaskItem } from '../TaskItem';
import styles from './tasklist.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

interface ITaskListProps {
  arrItems: TTaskArr[];
}

export function TaskList({arrItems}: ITaskListProps) {
  return (
    <ul className={styles.list}>
      <TransitionGroup>
        {arrItems.length > 0 ? 
          arrItems.map((item) => (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames="item"
            >
              <TaskItem itemNumber={item.number} itemId={item.id} taskName={item.value}/>
            </CSSTransition>
          )) : null
        }
      </TransitionGroup>
    </ul>
  );
}
