import React from 'react';
import { StatisticsInfoBox } from '../StatisticsInfoBox';
import styles from './statisticsstops.css';

interface IStatisticsStops {
  value: number;
}

export function StatisticsStops({value}: IStatisticsStops) {
  return (
    <StatisticsInfoBox isDisabled={value ? false : true} howInfoBlock={'stops'} value={value} />
  );
}
