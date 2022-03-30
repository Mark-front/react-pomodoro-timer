import React, { ChangeEvent, FormEvent } from 'react';
import styles from './newtaskform.css';
import { Button } from '../Button/Button';

interface INewTaskFormProps {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: FormEvent) => void;
  onClick?: () => void;
}

export function NewTaskForm({value, onChange, onSubmit, onClick}: INewTaskFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input placeholder='Название задачи' className={styles.input} onChange={onChange} value={value} type="text"  aria-label='Новая задача'/>
      <Button onClick={onClick} isDisabled={value.length >= 2 ? false : true} type='submit' color='green'>
        Добавить
      </Button>
    </form>
  );
}
