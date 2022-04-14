import React from 'react';
import styles from './youractivitycontainer.css';
import { YourActivityHeader } from '../YourActivityHeader/YourActivityHeader';
import { YourActivitySelector } from '../YourActivitySelector/YourActivitySelector';

interface IYourActivityContainerProps {
}

export function YourActivityContainer({}: IYourActivityContainerProps) {
  return (
    <div className={styles.block}>
      <YourActivityHeader/>
      <YourActivitySelector/>
    </div>
  );
}
