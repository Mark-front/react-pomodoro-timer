import React from 'react';
import styles from './graphcolumn.css';
import classNames from 'classnames';

interface IGraphColumnProps {
  height: number;
  onClick: () => void;
  isSelected: boolean;
}

export function GraphColumn({isSelected, height, onClick}: IGraphColumnProps) {
  return (
      <>
      {
        height === 0 ?
        <li onClick={onClick} className={classNames(styles.column, styles.columnIsDisabled)}></li> :
        <li style={{height: `${height}px`}} className={isSelected ? classNames(styles.column, styles.columnIsSelected) : styles.column}></li>
      }
      </>
  );
}
