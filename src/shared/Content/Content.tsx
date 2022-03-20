import React from 'react';
import { Layout } from '../Layout/Layout';
import styles from './content.css';

interface IContentProps {
  children?: React.ReactNode;
}


export function Content({children}: IContentProps) {
  return (
    <main className={styles.box}>
      <Layout className={styles.flex}>
        {children}
      </Layout>
    </main>
  );
}
