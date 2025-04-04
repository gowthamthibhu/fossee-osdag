// components/Home/index.js
'use client';

import React from 'react';
import Head from 'next/head';
import { HomeProvider } from './HomeContext';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import styles from '../../styles/Home.module.scss';

const Home = () => {
  return (
    <HomeProvider>
      <div className={styles.container}>
        <Head>
          <title>Osdag</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </Head>
        
        <Sidebar />
        <MainContent />
      </div>
    </HomeProvider>
  );
};

export default Home;