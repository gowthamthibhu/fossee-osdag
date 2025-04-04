import React from 'react';
import '../../styles/Home.css';

const ConnectionCard = ({ title, image }) => {
  return (
    <div className="connectionCard">
      <h3>{title}</h3>
      <div className="connectionImage">
        <img src={image} alt={title}/> 
        <div className="radioContainer">
          <label className="radio">
            <input type="radio" name="connection-type"/>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;