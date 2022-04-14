import React from 'react';
import styles from './graphicstime.css';
import { MinutesPerTask } from '../MinutesPerTask/MinutesPerTask';
import { Indent } from '../Indent/Indent';

interface IGraphicsTimeProps {
  time: number;
}

export function GraphicsTime({time}: IGraphicsTimeProps) {
  return (
    <li className={styles.item}>
      <span className={styles.line}></span>
      <Indent indent={'right'} size={32}/>
      <MinutesPerTask className={styles.time} minutesDefault={time}/>
    </li>
  );
}
