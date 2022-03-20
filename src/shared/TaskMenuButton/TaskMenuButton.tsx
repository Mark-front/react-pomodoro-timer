import React from 'react';
import styles from './taskmenubutton.css';
import { MenuButtonIcon } from '../icons/MenuButtonIcon';

export function TaskMenuButton() {
  return (
    <button className={styles.menu}>
      <MenuButtonIcon/>
    </button>
  );
}
