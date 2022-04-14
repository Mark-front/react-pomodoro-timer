import React from 'react';
import styles from './graphicsweekbutton.css';
import classNames from 'classnames';

interface IGraphicsWeekButtonProps {
  onClick: () => void;
  isSelected: boolean;
  dayName: string;
} 

export function GraphicsWeekButton({dayName, isSelected, onClick}: IGraphicsWeekButtonProps) {
  return (
    <li className={isSelected ? classNames(styles.item, styles.itemSelected) : styles.item}>
      <button onClick={onClick}>
        {dayName}
      </button>
    </li>
  );
}
