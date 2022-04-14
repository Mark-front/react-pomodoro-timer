import React from 'react';
import styles from './timerbuttonscontainer.css';
import { Indent } from '../Indent';
import { ButtonTimerOn } from '../ButtonTimerOn/ButtonTimerOn';
import { ButtonTimerOff } from '../ButtonTimerOff/ButtonTimerOff';

interface IProps {
  notTask?: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  isActive: boolean | null;
  isRest: boolean;
}


export function TimerButtonsContainer({isRest, notTask=true, pauseTimer, startTimer, stopTimer, resetTimer, isActive}: IProps) {
  return (
    <div className={styles.box}>
      <ButtonTimerOn isDisabled={notTask} startTimer={startTimer} pauseTimer={pauseTimer} isActive={isActive}/>
      <Indent indent={'right'} size={25}/>
      <ButtonTimerOff isRest={isRest} stopTimer={stopTimer} resetTimer={resetTimer} isActive={isActive}/>
    </div>
  );
}
