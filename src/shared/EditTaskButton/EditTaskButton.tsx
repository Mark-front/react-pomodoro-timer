import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { TTaskArr } from '../../store/tasks/actions';
import { MenuButtonIconPencil } from '../icons/MenuButtonIconPenсil';
import { Indent } from '../Indent';
import styles from './edittaskbutton.css';

interface IEditTaskButtonProps {
  itemId: string;
  setEdit: () => void;
}

export function EditTaskButton({setEdit}: IEditTaskButtonProps) {
  function editItemName() {
    setEdit();
  }
  
  return (
    <button onClick={editItemName} className={styles.button}>
      <MenuButtonIconPencil/>
      <Indent indent={'right'} size={8}/>
      Редактировать
    </button>
  );
}
