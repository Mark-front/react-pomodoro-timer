import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { DeleteTasksItem} from '../../store/tasks/actions';
import { IconTrash } from '../icons/IconTrash';
import { Indent } from '../Indent';
import { ModalDeleteItem } from '../ModalDeleteItem';
import styles from './deletetaskbutton.css';

interface IDeleteTaskButtonProps {
  itemId: string;
  onOpen?: () => void;
}

export function DeleteTaskButton({onOpen}: IDeleteTaskButtonProps) {
  return (
    <button onClick={onOpen} className={styles.button}> 
      <IconTrash/>
      <Indent indent={'right'} size={8}/>
      Удалить
    </button>
  );
}
