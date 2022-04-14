import React from 'react';
import styles from './statisticsweek.css';
import { GraphicsBoard } from '../GraphicsBoard/GraphicsBoard';
import { GraphicsWeek } from '../GraphicsWeek/GraphicsWeek';
import { ITimerData } from '../Timer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { IStatistics } from '../../store/statistics/actions';

interface IStatisticsWeekData {
  data: ITimerData
}

export function StatisticsWeek({data}: IStatisticsWeekData) {
  const statisticsState = useSelector<RootState, IStatistics>(state => state.statisticsState);
  return (
    <div className={styles.block}>
      <GraphicsBoard howWeek={statisticsState.howWeek} data={data}/>
      <GraphicsWeek howDay={statisticsState.howDay} howWeek={statisticsState.howWeek} data={data}/>
    </div>
  );
}
