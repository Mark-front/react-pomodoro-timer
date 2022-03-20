import React from 'react';
import styles from './timerbuttonscontainer.css';
import { Button } from '../Button/Button';
import { Indent } from '../Indent';

interface IProps {
  startTimer: () => void;
  stopTimer: () => void;
}


export function TimerButtonsContainer({startTimer, stopTimer}: IProps) {
  return (
    <div className={styles.box}>
      <Button onClick={startTimer} type="button" color="green">Старт</Button>
      <Indent indent={'right'} size={25}/>
      <Button onClick={stopTimer} type="button" color="grey">Стоп</Button>
    </div>
  );
}
