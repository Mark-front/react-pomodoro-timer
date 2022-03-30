import React from 'react';
import styles from './taskmenubutton.css';
import { MenuButtonIcon } from '../icons/MenuButtonIcon';
interface IButtonProps {
  onClick?: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
}

export function TaskMenuButton({onClick, btnRef}: IButtonProps) {
  return (
    <button ref={btnRef} onClick={onClick} className={styles.menu}>
      <MenuButtonIcon/>
    </button>
  );
}
