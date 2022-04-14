import React from 'react';
import styles from './statisticsfocus.css';
import { StatisticsInfoBox } from '../StatisticsInfoBox/StatisticsInfoBox';

interface IStatisticsFocus {
  value: number | undefined;
}

export function StatisticsFocus({value}: IStatisticsFocus) {
  return (
    <StatisticsInfoBox isDisabled={value ? false : true} howInfoBlock={'focus'} value={value} />
  );
}
