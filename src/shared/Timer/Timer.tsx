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
import { startTimerAction, stopTimerAction, resetTimerAction, addTimeTimerAction, numberOfTriggeredTimers, toggleTimerRestAction, allTimeTimerAction, timerSetStateAction } from '../../store/timer/actions';
import { sound } from '../audio/sound';
import { useEffect } from 'react';
import { RemoveTaskNumberAction, TTaskArr, DeleteTasksItem } from '../../store/tasks/actions';
import { TimerStatusBar } from '../TimerStatusBar/TimerStatusBar';
import { weekDefault } from '../utils/js/timerFunction/weekDefault';
import { TimerOptionToogleBtn } from '../TimerOptions/TimerOptionToogleBtn';
import { TimerOptions } from '../TimerOptions/TimerOptions';

let timerId: NodeJS.Timer;
let tasksIsNotRestCount = 0;
const nowDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');

export interface ITimeDay {
  'dateDay': string,
  'totalWorkingMinutes': number,
  'allTimeInTimer': number,
  'minutesOnPause': number,
  'stops': number,
  'tomatoes': number,
}

export interface ITimerData {
  'beforeLastWeek': ITimeDay[],
  'lastWeek': ITimeDay[],
  'nowWeek': ITimeDay[],
}

export interface IOptions {
  timePomodor: number;
  timeShortRest: number;
  timeLongRest: number;
  frequencyLongRest: number;
  alertToggle: boolean;
}
export interface ITimerState {
  isLoad: boolean;
  howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek";
  howDay: string;
  nowDay: string;
  time: number;
  isActive: boolean | null;
  isRest: boolean;
  options: IOptions;
  count: number;
  numberOfTask: number;
}

export function Timer() {
  const dispatch = useDispatch();
  const timerStorageData = typeof localStorage !== "undefined" ? localStorage.getItem('timerData') : null;
  const timerStorageDataJSON: ITimerData = timerStorageData !== null ? JSON.parse(timerStorageData) : {};
  const valueClock = useSelector<RootState, TTimerClockState>(state => state.timerClock);
  const timerOptions = useSelector<RootState, IOptions>(state => state.options);
  const timerOptionsData = typeof localStorage !== "undefined" ? localStorage.getItem('timerOptions') : null;
  const timerOptionsDataJSON: IOptions = timerOptionsData !== null ? JSON.parse(timerOptionsData) : {};
  const timerStateData = typeof localStorage !== "undefined" ? localStorage.getItem('timerState') : null;
  const timerStateDataJSON: ITimerState = timerStateData !== null ? JSON.parse(timerStateData) : {};
  const TaskArr = useSelector<RootState, TTaskArr[]>(state => state.taskArr.arr);
  const time = valueClock.minutes * 60 + valueClock.seconds;
  const [tick, setTick] = useState(time);
  const [numberOfTasks, setNumberOfTasks] = useState(timerStateDataJSON?.numberOfTask ? timerStateDataJSON.numberOfTask : 1); 
  const [minutesWorks, setMinutesWork] = useState(1); 
  const [optionsIsOpen, setOptionsIsOpen] = useState(false); 
  
  useEffect(() => { //coздает или перезаписывает данные о прогрессе пользователя
    if(timerStorageData !== null) {
      const dateInArr = new Date(timerStorageDataJSON.nowWeek[timerStorageDataJSON.nowWeek.length-1].dateDay);
      
      if(dateInArr.getDate() < new Date().getDate()) {
        timerStorageDataJSON.beforeLastWeek = [];
        timerStorageDataJSON.beforeLastWeek.push(...timerStorageDataJSON.lastWeek);
        timerStorageDataJSON.lastWeek = [];
        timerStorageDataJSON.lastWeek.push(...timerStorageDataJSON.nowWeek);
        timerStorageDataJSON.nowWeek = [];
        timerStorageDataJSON.nowWeek = weekDefault('nowWeek');
        localStorage.setItem('timerData', JSON.stringify(timerStorageDataJSON));
      }
    } else {localStorage.setItem('timerData', JSON.stringify({
      'beforeLastWeek': weekDefault('beforeLastWeek'),
      'lastWeek': weekDefault('lastWeek'),
      'nowWeek': weekDefault('nowWeek')
    }));}
    
  }, []);

  useEffect(() => {
    if(timerStateDataJSON.nowDay !== nowDate) {
      setNumberOfTasks(1);
      timerStateDataJSON.nowDay = nowDate;
      localStorage.setItem('timerState', JSON.stringify(timerStateDataJSON));
    }
  }, []);
  
  useEffect(() => { //coздает или перезаписывает состояние таймера
    if(timerStateData === null) {
      localStorage.setItem('timerState', JSON.stringify({
        isLoad: true,
        time: 1500,
        isActive: null,
        isRest: false
      }));
    } else {
      dispatch(timerSetStateAction(Math.floor(timerStateDataJSON.time / 60), timerStateDataJSON.time % 60, timerStateDataJSON.isRest, timerStateDataJSON.isActive, timerStateDataJSON.count));
    }
    if(timerOptionsData === null) {
      localStorage.setItem('timerOptions', JSON.stringify({
        timePomodor: 25,
        timeShortRest: 5,
        timeLongRest: 15,
        frequencyLongRest: 4,
        alertToggle: true
      }));
    }
  }, []);

  window?.addEventListener('beforeunload', () => {
    timerStateDataJSON.time = tick;
    timerStateDataJSON.isActive = valueClock.isActive;
    timerStateDataJSON.isRest = valueClock.isRest;
    timerStateDataJSON.count = valueClock.count;
    timerStateDataJSON.numberOfTask = numberOfTasks;
    localStorage.setItem('timerState', JSON.stringify(timerStateDataJSON));
    timerOptionsDataJSON.alertToggle = timerOptions.alertToggle;
    timerOptionsDataJSON.frequencyLongRest = timerOptions.frequencyLongRest;
    timerOptionsDataJSON.timeLongRest = timerOptions.timeLongRest;
    timerOptionsDataJSON.timeShortRest = timerOptions.timeShortRest;
    timerOptionsDataJSON.timePomodor = timerOptions.timePomodor;
    localStorage.setItem('timerOptions', JSON.stringify(timerOptionsDataJSON));
  });

  useEffect(() => { //обновляет время пребывания в таймере
    function timerAllTime() {
      dispatch(allTimeTimerAction(valueClock.minutesInTimer = valueClock.minutesInTimer+1));
      loadNewLocalStorageData('allTimeInTimer');
    }
    const timerId = setInterval(timerAllTime, 60000);//считает время проведенного в таймере
    return () => {clearInterval(timerId)};
  }, [valueClock.minutesInTimer])

  //Загружает увеличенные на единицу данные в localStorage
  function loadNewLocalStorageData<T extends keyof ITimeDay>(option: T ) {
    timerStorageDataJSON.nowWeek.map(i => {
      let sample: number extends ITimeDay ? number : any = i[option];
      if(i['dateDay'] === nowDate) {
        sample =  typeof sample === "number" ? sample + 1 : sample;
        i[option] = sample;
      }
    });
    localStorage.setItem('timerData', JSON.stringify(timerStorageDataJSON));
  }
  
  const timer = () => {
  if(tick <= 1) {
    resetTimer();
  } else {
      setTick(tick - 1);
    }
  }
  
  useEffect(() => {
    setOptionsIsOpen(optionsIsOpen)
  }, [optionsIsOpen]);

  useEffect(() => {
    setMinutesWork(minutesWorks);
  }, [minutesWorks]);
  
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
      //записывает минуты за работой в локальное хранилище 
      if(tick % 60 === 0 && tick !== time && !valueClock.isRest) {
       loadNewLocalStorageData('totalWorkingMinutes');
      } else {
        if(tick % 60 === 0 && tick !== time && valueClock.isRest) {
          loadNewLocalStorageData('minutesOnPause');
        }
      }
    }
    return () => {clearInterval(timerId)}
  }, [tick, valueClock.isActive]);
  
  function startTimerRest() { //включает таймер отдыха
    if((Math.floor(valueClock.count/2)) % timerOptions.frequencyLongRest === 0) {
      dispatch(startTimerAction(timerOptions.timeLongRest, 0, true));
    } else dispatch(startTimerAction(timerOptions.timeShortRest, 0, true));
    dispatch(toggleTimerRestAction(true));
  }
  
  function startTimer() {
    dispatch(startTimerAction(valueClock.minutes, valueClock.seconds, true));
  }
  
  function pauseTimer() {
    dispatch(stopTimerAction(Math.floor(tick / 60), tick % 60, false));
  }
  
  function addTimerMinutes() {// добавляет к времени одну минуту  
    dispatch(addTimeTimerAction(Math.floor(tick / 60)));
  }

  useEffect(() => { // рендерит измененное состояние таймера 
    setTick(valueClock.minutes * 60 + valueClock.seconds);
  }, [valueClock.minutes]);
  
  //перезагружает и обнуляет таймер
  function resetTimer() {
    dispatch(resetTimerAction()); // обнуляет таймер
    setTick(valueClock.minutes * 60 + valueClock.seconds);// рендерит обнуленное значение
    dispatch(toggleTimerRestAction(!valueClock.isRest));
    dispatch(numberOfTriggeredTimers(valueClock.count));
    if(TaskArr[0]?.number > 1 && !valueClock.isRest ) {// уменьшает/удаляет элемент списка 
      dispatch(RemoveTaskNumberAction(TaskArr[0].id));
      loadNewLocalStorageData('tomatoes');
    } else {
      if(tasksIsNotRestCount >= 2 && TaskArr[0].number === 1) {
        dispatch(DeleteTasksItem(TaskArr[0].id));
        loadNewLocalStorageData('tomatoes');
      }
    }
    clearInterval(timerId);
    if(timerOptions.alertToggle) {
      alert('Таймер остановлен');
    } 
    sound();//звук окончания таймера
  }

  //перезагружает и обнуляет таймер
  function stopTimer() {
    dispatch(resetTimerAction()); // обнуляет таймер
    setTick(valueClock.minutes * 60 + valueClock.seconds);// рендерит обнуленное значение
    clearInterval(timerId);
    loadNewLocalStorageData('stops');
    if(timerOptions.alertToggle) {
      alert('Таймер остановлен');
    } 
    sound();//звук окончания таймера
  }


  return (
    <div className={styles.box}>
      <TimerHeader isRest={valueClock.isRest} taskName={TaskArr.length > 0 ? TaskArr[0].value : 'Добавьте задачу'} isActive={valueClock.isActive}/>
      <TimerOptionToogleBtn onClick={() => setOptionsIsOpen(!optionsIsOpen)}/>
      <TimerOptions onClose={() => setOptionsIsOpen(!optionsIsOpen)} valueDefault={timerOptions} isOpen={optionsIsOpen}/>
      <TimerStatusBar timeStart={time} timeNow={tick}/>
      <Indent indent={'bottom'} size={70}/>
      <TimerClockContainer isRest={valueClock.isRest} addClick={addTimerMinutes} isActive={valueClock.isActive} valueClock={{
        minutes: Math.floor(tick / 60),
        seconds: tick % 60
      }}/>
      <TimerTask taskNumber={numberOfTasks} taskName={TaskArr.length > 0 ? TaskArr[0].value : 'Добавьте задачу'}/>
      <Indent indent={'bottom'} size={32}/>
      <TimerButtonsContainer isRest={valueClock.isRest} notTask={TaskArr.length > 0 ? false : true} pauseTimer={pauseTimer} resetTimer={resetTimer} isActive={valueClock.isActive} stopTimer={stopTimer} startTimer={startTimer}/>
      <Indent indent={'bottom'} size={107}/>
    </div>
  );
}
