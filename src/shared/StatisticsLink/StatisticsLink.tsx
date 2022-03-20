import React from 'react';
import { StatisticsIcon } from '../icons/StatisticsIcon';
import styles from './statisticslink.css';

export function StatisticsLink() {
  return (
    <a className={styles.link} href="#">
      <StatisticsIcon/>
      <span className={styles.text}>Cтатистика</span>
    </a>
  );
}
