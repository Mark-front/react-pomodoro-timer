import React, { ChangeEvent, FormEvent } from 'react';
import styles from './newtaskformcontainer.css';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { UpdateTaskInput } from '../updateTaskInput/actions';
import { TTaskArr, UpdateTaskArr } from '../../store/tasks/actions';
import { generateRandomString } from '../utils/react/generateRandomIndex';

interface IProps {
  arrTasks: TTaskArr[];
}

export function NewTaskFormContainer({arrTasks}: IProps) {
  const value = useSelector<RootState, string>(state => state.taskInputText.text);
  const dispatch = useDispatch();
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(UpdateTaskInput(event.target.value)); 
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  
  function buttonClick() {
    dispatch(UpdateTaskArr({value, id: generateRandomString(), number: 1}));
    dispatch(UpdateTaskInput('')); 
  }


  return (
    <NewTaskForm value={value} onChange={handleChange} onSubmit={handleSubmit} onClick={buttonClick}/>
  );
}
