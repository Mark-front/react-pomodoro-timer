import React from 'react';
import { Button } from '../Button/Button';
import styles from './buttontimeron.css';

interface IProps {
  startTimer: () => void;
  stopTimer: () => void;
  isActive: boolean | null;
  isDisabled: boolean;
}


export function ButtonTimerOn({isDisabled, startTimer, stopTimer, isActive}: IProps) {
  return (
    <>
      {(isActive === null && isDisabled === true) ?
        <Button isDisabled={true} onClick={startTimer} type="button" color="grey">Старт</Button> :
        (isActive === null) ?
          <Button  onClick={startTimer} type="button" color="green">Старт</Button> :
          (isActive !== null && isActive) ?
            <Button onClick={stopTimer} type="button" color="green">Пауза</Button>
            : 
            <Button onClick={startTimer} type="button" color="green">Продолжить</Button> 
      }
    </>
  );
}
