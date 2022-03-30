import React from 'react';
import { useDispatch } from 'react-redux';
import { AddTaskNumberAction} from '../../store/tasks/actions';
import { MenuButtonIconPlus } from '../icons/MenuButtonIconPlus';
import { Indent } from '../Indent';
import styles from './increasetaskbutton.css';

interface IIncreaseTaskButtonProps {
  itemId: string;
}

export function IncreaseTaskButton({itemId}:IIncreaseTaskButtonProps) {
  const dispatch = useDispatch();

  function addItemNumber() {
    dispatch(AddTaskNumberAction(itemId))
  }
  return (
    <button onClick={addItemNumber} className={styles.button}>
      <MenuButtonIconPlus/>
      <Indent indent={'right'} size={8}/>
      Увеличить
    </button>
  );
}
