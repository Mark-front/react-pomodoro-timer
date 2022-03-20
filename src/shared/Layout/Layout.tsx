import classNames from 'classnames';
import React from 'react';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode; 
  className?: string;
}

export function Layout({ children, className }: ILayoutProps) {
  const classes = classNames(styles.layout, className ? className : '') ;
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
