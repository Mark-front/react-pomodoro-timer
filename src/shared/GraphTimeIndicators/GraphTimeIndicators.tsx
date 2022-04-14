import React from 'react';
import { GraphicsTime } from '../GraphicsTime';
import { Indent } from '../Indent';
import { generateRandomString } from '../utils/react/generateRandomIndex';
import styles from './graphtimeindicators.css';

export function GraphTimeIndicators() {
  const createArr = () => {
    let arrTimeIndicators: React.ReactNode[] = [];
    for (let index = 1; index < 5; index++) {
      const id = generateRandomString();
      arrTimeIndicators.push(<GraphicsTime key={id} time={25*index}/>);
    }
    return arrTimeIndicators;
  }
  const arr = createArr();
  return (
    <ul className={styles.list}>
      {arr.reverse().map((item) => item)}
    </ul>
  );
}
