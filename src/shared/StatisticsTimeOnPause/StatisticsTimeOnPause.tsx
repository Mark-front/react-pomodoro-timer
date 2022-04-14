import React from 'react';
import { StatisticsInfoBox } from '../StatisticsInfoBox';
import styles from './statisticstimeonpause.css';

interface IStatisticsPause {
  value: number | undefined;
}

export function StatisticsTimeOnPause({value}: IStatisticsPause) {
  return (
    <StatisticsInfoBox isDisabled={value ? false : true} howInfoBlock={'pause'} value={value} />
  );
}
