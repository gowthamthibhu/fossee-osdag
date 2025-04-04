import React from 'react';
import '../../styles/ConnectionDesigner.css';

const menuItems = ['File', 'Edit', 'Graphics', 'Database', 'Help'];

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="menuBar">
        {menuItems.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </header>
  );
};

export default Header;