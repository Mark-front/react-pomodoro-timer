import React, { useState } from 'react';
import './youractivityselector.css';
import Select, { SingleValue } from 'react-select';
import { useDispatch, useSelector} from 'react-redux';
import { ChangeDayAction, ChangeWeekAction, IStatistics} from '../../store/statistics/actions';
import { RootState } from '../../store/rootReducer';
import { getDataStat } from '../utils/js/timerFunction/getDataStat';
import { useEffect } from 'react';

interface IOption {
  value: "nowWeek" | "lastWeek" | "beforeLastWeek";
  label: string;
} 

const options: IOption[] = [
  {value: "nowWeek", label: "Эта неделя"},
  {value: "lastWeek", label: "Прошедшая неделя"},
  {value: "beforeLastWeek", label: "2 недели назад"},
];

interface IYourActivitySelectorProps {
}

export function YourActivitySelector({}: IYourActivitySelectorProps) {
  const statisticsState = useSelector<RootState, IStatistics>(state => state.statisticsState);
  const data = getDataStat()
  const dispatch = useDispatch();

  const getValue = () => {
    return statisticsState.howWeek
    ? options.find(c => c.value === statisticsState.howWeek) : '';
  }

  const onChange = (newValue: SingleValue<IOption | string>) => {
    dispatch(ChangeWeekAction((newValue as IOption)?.value)); 
    dispatch(ChangeDayAction(data[`${(newValue as IOption)?.value}`][0].dateDay))
  }
  return (
    <Select 
      classNamePrefix='custom-select'
      onChange={onChange}
      value={getValue()} 
      options={options}
      inputValue={''}
      />
  );
}