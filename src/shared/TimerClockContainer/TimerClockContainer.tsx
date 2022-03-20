import React from 'react';
import styles from './timerclockcontainer.css';
import { ButtonPlus } from '../ButtonPlus/ButtonPlus';
import { Indent } from '../Indent/Indent';
import { TimerClock } from '../TimerClock/TimerClock';
import { TTimerClockState } from '../../store/timer/reducer';

interface IProps {
  valueClock: TTimerClockState;
}


export function TimerClockContainer({valueClock}: IProps) {
  return (
    <div className={styles.box}>
      <TimerClock sec={valueClock.seconds} min={valueClock.minutes}/>
      <Indent indent={'right'} size={25}/>
      <ButtonPlus/>
    </div>
  );
}
