import React from 'react';
import styles from './graphicsboard.css';
import { GraphTimeIndicators } from '../GraphTimeIndicators';
import { GraphColumnsList } from '../GraphColumnsList/GraphColumnsList';
import { ITimerData } from '../Timer';

interface IGraphicsBoardProps {
  data: ITimerData;
  howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek";
}
  
export function GraphicsBoard({data, howWeek}: IGraphicsBoardProps) {
  return (
    <div className={styles.block}>
      <GraphTimeIndicators />
      <GraphColumnsList howWeek={howWeek} data={data}/>
    </div>
  );
}
