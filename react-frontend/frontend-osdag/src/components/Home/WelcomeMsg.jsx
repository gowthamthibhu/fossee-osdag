import React from "react";
import { useHome } from "./HomeContext";
import "../../styles/Home.css";

const WelcomeMsg = () => {
  const { darkMode } = useHome();
  
  return (
    <div className={`welcomeMsg ${darkMode ? "darkMode" : ""}`}>
      <h1>Welcome to Osdag</h1>
      <p>
        Open steel design and graphics
      </p>
    </div>
  );
};

export default WelcomeMsg;