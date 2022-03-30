import React from 'react';
import { useDispatch } from 'react-redux';
import { MenuButtonIconMinus } from '../icons/MenuButtonIconMinus';
import { Indent } from '../Indent';
import styles from './reducetaskbutton.css';
import {RemoveTaskNumberAction } from '../../store/tasks/actions';

interface IReduceTaskButtonProps {
  itemId: string;
}

export function ReduceTaskButton({itemId}:IReduceTaskButtonProps) {
  const dispatch = useDispatch();


  function removeItemNumber() {
    dispatch(RemoveTaskNumberAction(itemId))
  }

  return (
    <button onClick={removeItemNumber} className={styles.button}>
      <MenuButtonIconMinus/>
      <Indent indent={'right'} size={8}/>
      Уменьшить
    </button>
  );
}
