import React from 'react';
import styles from './darkmode.css';

interface IDarkModeProps {
  isDarkChange: () => void;
}

export function DarkMode({isDarkChange}:IDarkModeProps) {
  return (
    <button className={styles.moon} onClick={isDarkChange}>
    </button>
  );
}
