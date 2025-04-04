// components/Home/ConnectionCard.js
'use client';

import React from 'react';
import styles from '../../styles/Home.module.scss';

const ConnectionCard = ({ title, image }) => {
  return (
    <div className={styles.connectionCard}>
      <h3>{title}</h3>
      <div className={styles.connectionImage}>
        <img src={image} alt={title}/>
        <div className={styles.radioContainer}>
          <label className={styles.radio}>
            <input type="radio" name="connection-type"/>
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;