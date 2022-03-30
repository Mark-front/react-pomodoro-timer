import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import styles from './timertaskname.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { EditTasksItem } from '../../store/tasks/actions';

interface ITimerTaskNameProps {
  itemId?: string;
  isEdit?: boolean; 
  taskName?: string;
  className?: string;
  setEdit?: () => void;
}

const NOOP = () => {};

export function TimerTaskName({isEdit, setEdit = NOOP, itemId,  className, taskName}: ITimerTaskNameProps) {
  const classes = classNames(styles.name, className);
  const [value, setValue] = useState(taskName);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setValue(value);
  }, [value]);
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      dispatch(EditTasksItem(itemId, value));
      setEdit();
    }
  }
  return (
    <>
    { isEdit ?
      <input type="text" onFocus={blur} className={styles.input} value={value} onKeyDown={handleKeyDown} onChange={handleChange}/> :
      <div className={classes}>
        {taskName}
      </div>
    }
    </>
  );
}
