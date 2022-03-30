import React from 'react';
import { Button } from '../Button/Button';
import styles from './buttontimeroff.css';

interface IProps {
  resetTimer: () => void;
  isActive: boolean | null;
  isRest: boolean;
}

export function ButtonTimerOff({isRest, isActive, resetTimer }: IProps) {
  function howButton() {
    if(isActive === null) {//если нет задачи 
      return <Button isDisabled={true} onClick={resetTimer} type="button" color="grey">Стоп</Button>
    } else {
      if(isActive !== null && isActive && !isRest) {// есть задача и включен и не отдых
        return <Button onClick={resetTimer} type="button" color="red">Стоп</Button> 
      } else {
        if(!isActive && !isRest) {//есть задача и отдых
          return <Button onClick={resetTimer} type="button" color="red">Сделано</Button> 
        } else {
          return <Button onClick={resetTimer} type="button" color="red">Пропустить</Button>
        }
      }
    }
  }

  return (
    howButton()
  );
}
