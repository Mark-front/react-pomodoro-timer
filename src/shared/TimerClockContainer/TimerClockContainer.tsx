import React from 'react';
import styles from './timerclockcontainer.css';
import { ButtonPlus } from '../ButtonPlus/ButtonPlus';
import { Indent } from '../Indent/Indent';
import { TimerClock } from '../TimerClock/TimerClock';
import { TTimerClockState } from '../../store/timer/reducer';

interface IProps {
  valueClock: {
    minutes: number;
    seconds: number;
  };
  isActive: boolean | null;
  addClick: () => void;
  isRest: boolean;
}


export function TimerClockContainer({isRest, addClick, isActive, valueClock}: IProps) {
  return (
    <div className={styles.box}>
      <TimerClock isRest={isRest} isActive={isActive} sec={valueClock.seconds} min={valueClock.minutes}/>
      <Indent indent={'right'} size={25}/>
      <ButtonPlus onClick={addClick}/>
    </div>
  );
}
