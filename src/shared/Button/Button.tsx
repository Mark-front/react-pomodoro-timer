import React from 'react';
import styles from './button.css';
import classNames from 'classnames';


interface IButtonProps {
  type: "button" | "reset" | "submit";
  color: "green" | "red" | "grey";
  onClick?: () => void;
  isDisabled?: boolean
  children: React.ReactNode;
}

const colors = {
  "green": styles.green,
  "red": styles.red,
  "grey": styles.grey
} 
export function Button({type="button", color="green", children, onClick, isDisabled}: IButtonProps) {
  const classes = classNames(styles.button, colors[color]);
  const classesDisabled = classNames(styles.button, colors['grey']);
  return (
    <>
      <button disabled={isDisabled} onClick={onClick} type={type} className={isDisabled ? classesDisabled : classes}>
        {children}
      </button>
      {(type === 'submit' && isDisabled) ? <span className={styles.isDisabledMessege}>*Пожалуйста, заполните поля</span> : null}
    </>
  );
}
