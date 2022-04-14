import React, { useRef, useState } from 'react';
import styles from './taskitem.css';
import { TaskNumber } from '../TaskNumber/TaskNumber';
import { TimerTaskName } from '../TimerTaskName/TimerTaskName';
import { TaskMenuButton } from '../TaskMenuButton/TaskMenuButton';
import { Indent } from '../Indent/Indent';
import { TaskMenu } from '../TaskMenu/TaskMenu';
import { useEffect } from 'react';
import { ModalDeleteItem } from '../ModalDeleteItem';
import { useDispatch } from 'react-redux';
import { DeleteTasksItem } from '../../store/tasks/actions';
import classNames from 'classnames';

interface ITaskItemProps {
  taskName: string;
  itemId: string;
  itemNumber: number;
}

export function TaskItem({itemId, taskName, itemNumber}: ITaskItemProps) {
  const btnRef = useRef<HTMLButtonElement>(null); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditActive, setEditActive] = useState(false);
  const [isModalOpend, setIsModalOpend] = useState(false);
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(DeleteTasksItem(itemId));
  }

  useEffect(() => {
    setIsDropdownOpen(isDropdownOpen);
    setEditActive(isEditActive);
  }, [isDropdownOpen, isEditActive]);
  
  return (
    <li id={itemId} className={classNames(styles.item)}>
      <TaskNumber taskNumber={itemNumber}/>
      <Indent indent={'right'} size={10}/>
      <TimerTaskName
        itemId={itemId} 
        isEdit={isEditActive} 
        taskName={taskName}
        setEdit={() => setEditActive(!isEditActive)}
        />
      <TaskMenuButton btnRef={btnRef} onClick={() => { 
          setIsDropdownOpen(!isDropdownOpen)
        }}/>
      <TaskMenu 
        setEdit={() => setEditActive(!isEditActive)}
        itemId={itemId}
        btnRef={btnRef} 
        onClose={() => setIsDropdownOpen(false)} 
        onModalOpen={() => setIsModalOpend(true)}
        isOpen={isDropdownOpen}
        />
      {isModalOpend && (<ModalDeleteItem onDelete={deleteItem} onClose={() => {setIsModalOpend(false)}}/>)}
    </li>
  );
}
