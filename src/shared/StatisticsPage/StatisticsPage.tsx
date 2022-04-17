import React, { useState } from 'react';
import styles from './statisticspage.css';
import { YourActivityContainer } from '../YourActivityContainer/YourActivityContainer';
import { StatisticsDay } from '../StatisticsDay';
import { Indent } from '../Indent/Indent';
import { StatisticsTomato } from '../StatisticsTomato/StatisticsTomato';
import { StatisticsWeek } from '../StatisticsWeek/StatisticsWeek';
import { StatisticsFocus } from '../StatisticsFocus/StatisticsFocus';
import { StatisticsTimeOnPause } from '../StatisticsTimeOnPause/StatisticsTimeOnPause';
import { StatisticsStops } from '../StatisticsStops/StatisticsStops';
import { IStatistics, ChangeDayAction, ChangeWeekAction } from '../../store/statistics/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { getDataStat } from '../utils/js/timerFunction/getDataStat';
import { ITimerData, ITimerState } from '../Timer';
import { useEffect } from 'react';
import { weekDefault } from '../utils/js/timerFunction/weekDefault';

export function StatisticsPage() {
  const dispatch = useDispatch();
  const timerStateData = typeof localStorage !== "undefined" ? localStorage.getItem('timerState') : null;
  const timerStateDataJSON: ITimerState = timerStateData !== null ? JSON.parse(timerStateData) : {};
  const statisticsState = useSelector<RootState, IStatistics>(state => state.statisticsState);
  let data = getDataStat();
  const dataChangeDay = getChangeDay();

  
  function getChangeDay() {
    if(statisticsState.howWeek === 'nowWeek') {
      return data[`${statisticsState.howWeek}`].filter((day) => {
        return day.dateDay === statisticsState.howDay;
      })[0];
    } else {
      return data[`${statisticsState.howWeek}`][0]
    };
  }
  useEffect(() => {
    dispatch(ChangeDayAction(timerStateDataJSON.howDay));
    dispatch(ChangeWeekAction(timerStateDataJSON.howWeek));
  }, []);

  function getDayName() {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dateArr = statisticsState.howDay.split("-");
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]) - 1;
    const day = parseInt(dateArr[2]);
    const date = new Date(year, month, day);
    return days[date.getDay()];
  }

  window?.addEventListener('beforeunload', () => {
    timerStateDataJSON.howWeek = statisticsState.howWeek;
    timerStateDataJSON.howDay = statisticsState.howDay;
    localStorage.setItem('timerState', JSON.stringify(timerStateDataJSON));
  });
  
  return (
    <div className={styles.block}>  
      <YourActivityContainer/>
      <Indent indent={'bottom'} size={30}/>
      <div className={styles.infoAndGraphContainer}>
        <div className={styles.dayAndTomatoContainer}>
          <StatisticsDay min={dataChangeDay.totalWorkingMinutes !== 0 ? dataChangeDay.totalWorkingMinutes : undefined} howDay={getDayName()}/>
          <Indent indent={'bottom'} size={32}/>
          <StatisticsTomato number={dataChangeDay.tomatoes !== 0 ? dataChangeDay.tomatoes : undefined}/> 
        </div>
        <StatisticsWeek data={data}/>
      </div>
      <Indent indent={'bottom'} size={32}/>
      <div className={styles.infoBlockContainer}>
        <StatisticsFocus value={dataChangeDay.allTimeInTimer !== 0 && dataChangeDay.totalWorkingMinutes !== 0 ? Math.floor((dataChangeDay.totalWorkingMinutes/dataChangeDay.allTimeInTimer)*100) : 0}/>
        <StatisticsTimeOnPause value={dataChangeDay.minutesOnPause !== 0 ? dataChangeDay.minutesOnPause : 0}/>
        <StatisticsStops value={dataChangeDay.stops !== 0 ? dataChangeDay.stops : 0}/>
      </div>
    </div>
  );
}
