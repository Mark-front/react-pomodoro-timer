import React from 'react';
import styles from './button.css';
import classNames from 'classnames';


interface IButtonProps {
  type: "button" | "reset" | "submit";
  color: "green" | "red" | "grey";
  onClick?: () => void;
  children: React.ReactNode;
}

const colors = {
  "green": styles.green,
  "red": styles.red,
  "grey": styles.grey
} 
export function Button({type="button", color="green", children, onClick}: IButtonProps) {
  const classes = classNames(styles.button, colors[color]);
  return (
    <button onClick={onClick} type={type} className={classes}>
      {children}
    </button>
  );
}
