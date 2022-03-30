import React, { useState } from 'react';
import styles from './timer.css';
import { TimerHeader } from '../TimerHeader/TimerHeader';
import { TimerClockContainer } from '../TimerClockContainer/TimerClockContainer';
import { TimerButtonsContainer } from '../TimerButtonsContainer/TimerButtonsContainer';
import { TimerTask } from '../TimerTask/TimerTask';
import { Indent } from '../Indent/Indent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { TTimerClockState} from '../../store/timer/reducer';
import { startTimerAction, stopTimerAction, resetTimerAction, addTimeTimerAction, numberOfTriggeredTimers, toggleTimerRestAction } from '../../store/timer/actions';
import { sound } from '../audio/sound';
import { useEffect } from 'react';
import { RemoveTaskNumberAction, TTaskArr, DeleteTasksItem } from '../../store/tasks/actions';

let timerId: NodeJS.Timer;
let tasksIsNotRestCount = 0;

export function Timer() {
  const valueClock = useSelector<RootState, TTimerClockState>(state => state.timerClock);
  const TaskArr = useSelector<RootState, TTaskArr[]>(state => state.taskArr.arr);
  const dispatch = useDispatch();
  const time = valueClock.minutes * 60 + valueClock.seconds;
  const [tick, setTick] = useState(time);
  const [numberOfTasks, setNumberOfTasks] = useState(1); 

  const timer = () => {
  if(tick <= 1) {
    resetTimer();
  } else {
      setTick(tick - 1);
    }
  }
  
  useEffect(() => {
    setTick(time);
  }, [valueClock.minutes]);

  
  useEffect(() => {
    if(tasksIsNotRestCount >= 2 ) {
      setNumberOfTasks(numberOfTasks + 1);
      tasksIsNotRestCount = 1;
    } else tasksIsNotRestCount = tasksIsNotRestCount + 1;
    if(valueClock.count % 2 === 0) {
      startTimerRest();
    } 
  }, [valueClock.count]);
  
  useEffect(() => {
    if(valueClock.isActive) {
      timerId = setInterval(timer, 1000);
    }
    return () => {clearInterval(timerId)}
  }, [tick, valueClock.isActive]);
  
  function startTimerRest() {
    if((Math.floor(valueClock.count/2)) % 4 === 0) {
      dispatch(startTimerAction(15, 0, true));
    } else dispatch(startTimerAction(5, 0, true));
    dispatch(toggleTimerRestAction(true));
  }

  function startTimer() {
    dispatch(startTimerAction(valueClock.minutes, valueClock.seconds, true));
  }
  
  function stopTimer() {
    dispatch(stopTimerAction(Math.floor(tick / 60), tick % 60, false));
  }

  function addTimerMinutes() {// добавляет к времени одну минуту  
    dispatch(addTimeTimerAction(Math.floor(tick / 60)));
  }
  
  //перезагружает и обнуляет таймер
  function resetTimer() {
    dispatch(resetTimerAction()); // обнуляет таймер
    setTick(valueClock.minutes * 60 + valueClock.seconds);// рендерит обнуленное значение
    dispatch(toggleTimerRestAction(!valueClock.isRest));
    if(TaskArr[0].number > 1 && !valueClock.isRest) {// уменьшает/удаляет элемент списка 
      dispatch(RemoveTaskNumberAction(TaskArr[0].id));
      dispatch(numberOfTriggeredTimers(valueClock.count));
    } else {
      dispatch(numberOfTriggeredTimers(valueClock.count));
      if(tasksIsNotRestCount >= 2 && TaskArr[0].number === 1) {
        dispatch(DeleteTasksItem(TaskArr[0].id));
      }
    }
    clearInterval(timerId);
    sound();//звук окончания таймера
  }



  return (
    <div className={styles.box}>
      <TimerHeader isRest={valueClock.isRest} taskName={TaskArr.length > 0 ? TaskArr[0].value : 'Добавьте задачу'} isActive={valueClock.isActive}/>
      <Indent indent={'bottom'} size={70}/>
      <TimerClockContainer isRest={valueClock.isRest} addClick={addTimerMinutes} isActive={valueClock.isActive} valueClock={{
        minutes: Math.floor(tick / 60),
        seconds: tick % 60
      }}/>
      <TimerTask taskNumber={numberOfTasks} taskName={TaskArr.length > 0 ? TaskArr[0].value : 'Добавьте задачу'}/>
      <Indent indent={'bottom'} size={32}/>
      <TimerButtonsContainer isRest={valueClock.isRest} notTask={TaskArr.length > 0 ? false : true} resetTimer={resetTimer} isActive={valueClock.isActive} stopTimer={stopTimer} startTimer={startTimer}/>
      <Indent indent={'bottom'} size={107}/>
    </div>
  );
}
