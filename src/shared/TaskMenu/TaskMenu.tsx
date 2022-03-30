import React from 'react';
import styles from './taskmenu.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { DeleteTaskButton } from '../DeleteTaskButton/DeleteTaskButton';
import { EditTaskButton } from '../EditTaskButton/EditTaskButton';
import { ReduceTaskButton } from '../ReduceTaskButton/ReduceTaskButton';
import { IncreaseTaskButton } from '../IncreaseTaskButton/IncreaseTaskButton';

interface ITaskMenuProps {
  isOpen: boolean;
  btnRef: React.RefObject<HTMLButtonElement>;
  itemId: string;
  onClose: () => void;
  setEdit: () => void;
  onModalOpen: () => void;
}

export function TaskMenu({onModalOpen, setEdit, itemId, onClose, isOpen, btnRef}: ITaskMenuProps) {

  return (
    <Dropdown
      onClose={onClose}
      isOpen={isOpen} 
      top={btnRef.current?.getBoundingClientRect().top ? btnRef.current?.getBoundingClientRect().top+scrollY + 27 : 0}
      left={btnRef.current?.getBoundingClientRect().left ? btnRef.current?.getBoundingClientRect().left+scrollX - 69 : 0}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <IncreaseTaskButton itemId={itemId}/>
        </li>
        <li className={styles.item}>
          <ReduceTaskButton itemId={itemId}/>
        </li>
        <li className={styles.item}>
          <EditTaskButton setEdit={setEdit} itemId={itemId}/>
        </li>
        <li className={styles.item}>
          <DeleteTaskButton onOpen={onModalOpen} itemId={itemId}/>
        </li>
      </ul>
    </Dropdown>
  );
}
