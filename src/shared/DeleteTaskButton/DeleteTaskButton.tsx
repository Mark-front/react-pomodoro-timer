import React from 'react';
import { IconTrash } from '../icons/IconTrash';
import { Indent } from '../Indent';
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
