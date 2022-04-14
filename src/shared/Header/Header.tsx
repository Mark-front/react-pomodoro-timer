import React from 'react';
import styles from './header.css';
import { Layout } from '../Layout/Layout';
import { Logo } from '../Logo/Logo';
import { StatisticsLink } from '../StatisticsLink/StatisticsLink';
import { DarkMode } from '../DarkMode/DarkMode';

interface IHeaderProps {
  isDarkChange: () => void;
}

export function Header({isDarkChange}: IHeaderProps) {
  return (
    <header className={styles.header}>
        <Layout className={styles.headerIn}>
          <Logo/>
          <DarkMode isDarkChange={isDarkChange}/>
          <StatisticsLink/>   
        </Layout>
    </header>
  );
}
