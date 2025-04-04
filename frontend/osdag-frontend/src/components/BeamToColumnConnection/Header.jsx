// components/ConnectionDesigner/Header.js
import React from 'react';
import styles from '../../styles/ConnectionDesigner.module.scss';

const menuItems = ['File', 'Edit', 'Graphics', 'Database', 'Help'];

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.menuBar}>
        {menuItems.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </header>
  );
};

export default Header;