import React from 'react';
import styles from './statisticstomato.css';
import { TomatoSmile } from '../icons/tomatoSmile';
import { TomatoIcon } from '../icons/TomatoIcon';
import { getNoun } from '../utils/js/getNoun';

interface IStatisticsTomatoProps {
  number: number | undefined;
} 

export function StatisticsTomato({number}: IStatisticsTomatoProps) {
  return (
    <div className={!number ? styles.block : styles.blockWithNumber}>
      {number ?
        <div className={styles.tomatoBox}>
          <TomatoIcon size={81}/> 
          <span className={styles.tomatoBoxText}>x {number}</span>
        </div>
        : <TomatoSmile/>
      }
      {number && 
        <div className={styles.text}>
          {`${number} `+ getNoun(number, 'помидор', 'помидора', 'помидор')}
        </div>
      }
    </div>

  );
}
