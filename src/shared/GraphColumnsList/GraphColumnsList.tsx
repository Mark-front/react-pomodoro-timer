import React from 'react';
import styles from './graphcolumnslist.css';
import { GraphColumn } from '../GraphColumn/GraphColumn';
import { generateRandomString } from '../utils/react/generateRandomIndex';
import { ITimerData } from '../Timer';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeDayAction, IStatistics } from '../../store/statistics/actions';
import { RootState } from '../../store/rootReducer';

interface IGraphColumnsListProps {
  data: ITimerData;
  howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek";
}
  

export function GraphColumnsList({data, howWeek}: IGraphColumnsListProps) {
  const statisticsState = useSelector<RootState, IStatistics>(state => state.statisticsState);
  const dispatch = useDispatch();
  const createArr = () => {
    let arrColumns: React.ReactNode[] = [];
    for (let index = 0; index < data[`${howWeek}`].length; index++) {
      const id = generateRandomString();
      arrColumns.push(<GraphColumn key={id} isSelected={statisticsState.howDay === data[`${howWeek}`][index].dateDay} onClick={() => dispatch(ChangeDayAction(data[`${howWeek}`][index].dateDay))} height={(data[`${howWeek}`][index].totalWorkingMinutes)*3.37}/>);
    }
    return arrColumns;
  }
  const arr = createArr();

  return (
    <ul className={styles.list}>
      {arr.map((item) => item)}
    </ul>
  )
}
