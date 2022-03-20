import React from 'react';
import styles from './header.css';
import { Layout } from '../Layout/Layout';
import { Logo } from '../Logo/Logo';
import { StatisticsLink } from '../StatisticsLink/StatisticsLink';

export function Header() {
  return (
    <header className={styles.header}>
        <Layout className={styles.headerIn}>
          <Logo/>
          <StatisticsLink/>        
        </Layout>
    </header>
  );
}
