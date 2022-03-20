import React from 'react';
import styles from './timer.css';
import { TimerHeader } from '../TimerHeader/TimerHeader';
import { TimerClockContainer } from '../TimerClockContainer/TimerClockContainer';
import { TimerButtonsContainer } from '../TimerButtonsContainer/TimerButtonsContainer';
import { TimerTask } from '../TimerTask/TimerTask';
import { Indent } from '../Indent/Indent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { TTimerClockState} from '../../store/timer/reducer';
import { startTimerAction, stopTimerAction } from '../../store/timer/actions';
import { sound } from '../audio/sound';
let timerId: NodeJS.Timer;

export function Timer() {
  const valueClock = useSelector<RootState, TTimerClockState>(state => state.timerClock);
  const dispatch = useDispatch();
  
  const timer = () => {
    if (valueClock.seconds === 0 && valueClock.minutes > 0) {
      valueClock.minutes = valueClock.minutes - 1;
      valueClock.seconds = 59;
    } else {
      if(valueClock.seconds === 0 && valueClock.minutes === 0) {
        stopTimer;
      } else valueClock.seconds = valueClock.seconds - 1;
    }
    console.log(valueClock)
  }


  function startTimer() {
    timerId = setInterval(timer, 1000);
    dispatch(startTimerAction(valueClock.minutes, valueClock.seconds));
  }
  
  function stopTimer() {
    clearInterval(timerId);
    sound()
    dispatch(stopTimerAction(valueClock.minutes, valueClock.seconds))
  }
  
  return (
    <div className={styles.box}>
      {sound()}
      <TimerHeader/>
      <Indent indent={'bottom'} size={70}/>
      <TimerClockContainer valueClock={{
        minutes: valueClock.minutes,
        seconds: valueClock.seconds
      }}/>
      <TimerTask/>
      <Indent indent={'bottom'} size={32}/>
      <TimerButtonsContainer stopTimer={stopTimer} startTimer={startTimer}/>
      <Indent indent={'bottom'} size={107}/>
    </div>
  );
}
