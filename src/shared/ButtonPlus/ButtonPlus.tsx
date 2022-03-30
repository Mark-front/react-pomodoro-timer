import React from 'react';
import styles from './buttonplus.css';
import { IconPlus } from '../icons/IconPlus';
import { useDispatch } from 'react-redux';
import { addTimeTimerAction } from '../../store/timer/actions';

interface IButtonPlusProps {
  onClick: () => void;
}

export function ButtonPlus({onClick}: IButtonPlusProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      <IconPlus/>
    </button>
  );
}
