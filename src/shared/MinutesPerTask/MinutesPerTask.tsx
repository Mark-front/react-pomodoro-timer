import React from 'react';
import styles from './minutespertask.css';
import classNames from 'classnames';
import { getNoun } from '../utils/js/getNoun';

interface IMinutesPerTask {
  minutesDefault: number;
  className?: string;
  isFull?: boolean;
}

export function MinutesPerTask({isFull, className, minutesDefault}: IMinutesPerTask) {
  const classes = classNames(className, styles.minutes)
  let hour = 0;
  if(minutesDefault > 60) {
    hour = Math.floor(minutesDefault/60);
    minutesDefault = minutesDefault - (hour*60)
  }
  return ( 
    <>
    {minutesDefault !== 0 && 
      <div className={className ? classes : styles.minutes}>
        {!isFull ? 
          hour === 0 ? 
            minutesDefault + " " + "мин"  : 
            hour + " "+ "ч" + " " + minutesDefault + " " + "мин" :
              hour === 0 ?
                minutesDefault + " " + getNoun(minutesDefault, 'минута', 'минуты', 'минут') : 
                hour + " " + getNoun(hour, 'час', 'часа', 'часов') + " " + minutesDefault + " " + getNoun(minutesDefault, 'минута', 'минуты', 'минут')
        } 
      </div>
    }
    </>
  );
}
